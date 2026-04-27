import { pool } from '../config/db.js';

export const LoanModel = {
  async createLoan(book_id, member_id, due_date) {
    const client = await pool.connect(); // Menggunakan client untuk transaksi
    try {
      await client.query('BEGIN'); // Mulai transaksi database

      // 1. Cek ketersediaan buku
      const bookCheck = await client.query('SELECT available_copies FROM books WHERE id = $1', [book_id]);
      if (bookCheck.rows[0].available_copies <= 0) {
        throw new Error('Buku sedang tidak tersedia (stok habis).');
      }

      // 2. Kurangi stok buku
      await client.query('UPDATE books SET available_copies = available_copies - 1 WHERE id = $1', [book_id]);

      // 3. Catat transaksi peminjaman
      const loanQuery = `
        INSERT INTO loans (book_id, member_id, due_date) 
        VALUES ($1, $2, $3) RETURNING *
      `;
      const result = await client.query(loanQuery, [book_id, member_id, due_date]);

      await client.query('COMMIT'); // Simpan semua perubahan
      return result.rows[0];
    } catch (error) {
      await client.query('ROLLBACK'); // Batalkan jika ada error
      throw error;
    } finally {
      client.release();
    }
  },

  async getAllLoans() {
    const query = `
      SELECT l.*, b.title as book_title, m.full_name as member_name 
      FROM loans l
      JOIN books b ON l.book_id = b.id
      JOIN members m ON l.member_id = m.id
    `;
    const result = await pool.query(query);
    return result.rows;
  },

  async getLoanById(id) {
    const query = `
      SELECT l.*, b.title as book_title, m.full_name as member_name 
      FROM loans l
      JOIN books b ON l.book_id = b.id
      JOIN members m ON l.member_id = m.id
      WHERE l.id = $1
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },

  async returnLoan(loanId) {
    const client = await pool.connect();
    try {
      await client.query('BEGIN'); // Mulai transaksi database

      // 1. Ambil data peminjaman
      const loanQuery = 'SELECT * FROM loans WHERE id = $1';
      const loanResult = await client.query(loanQuery, [loanId]);
      
      if (loanResult.rows.length === 0) {
        throw new Error('Peminjaman tidak ditemukan');
      }

      const loan = loanResult.rows[0];

      // 2. Cek apakah sudah dikembalikan sebelumnya
      if (loan.status === 'RETURNED') {
        throw new Error('Buku ini sudah dikembalikan sebelumnya');
      }

      // 3. Ubah status peminjaman menjadi RETURNED dan set return_date
      const currentDate = new Date().toISOString().split('T')[0];
      const updateLoanQuery = `
        UPDATE loans 
        SET status = 'RETURNED', return_date = $2
        WHERE id = $1 RETURNING *
      `;
      const updatedLoan = await client.query(updateLoanQuery, [loanId, currentDate]);

      // 4. Tambahkan kembali stok buku (available_copies)
      const updateBooksQuery = `
        UPDATE books 
        SET available_copies = available_copies + 1 
        WHERE id = $1 RETURNING *
      `;
      const updatedBook = await client.query(updateBooksQuery, [loan.book_id]);

      // 5. Ambil data terbaru untuk response
      const finalLoan = await client.query(
        `SELECT l.*, b.title as book_title, m.full_name as member_name 
         FROM loans l
         JOIN books b ON l.book_id = b.id
         JOIN members m ON l.member_id = m.id
         WHERE l.id = $1`,
        [loanId]
      );

      await client.query('COMMIT'); // Simpan semua perubahan
      return {
        loan: finalLoan.rows[0],
        book: updatedBook.rows[0]
      };
    } catch (error) {
      await client.query('ROLLBACK'); // Batalkan jika ada error
      throw error;
    } finally {
      client.release();
    }
  }
};
