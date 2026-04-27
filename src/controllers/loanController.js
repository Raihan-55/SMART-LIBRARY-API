import { LoanModel } from "../models/loanModel.js";

export const LoanController = {
  async createLoan(req, res) {
    const { book_id, member_id, due_date } = req.body;
    try {
      const loan = await LoanModel.createLoan(book_id, member_id, due_date);
      res.status(201).json({
        message: "Peminjaman berhasil dicatat!",
        data: loan,
      });
    } catch (err) {
      // Jika stok habis atau ID salah, kirim status 400 (Bad Request)
      res.status(400).json({ error: err.message });
    }
  },

  async getLoans(req, res) {
    try {
      const loans = await LoanModel.getAllLoans();
      res.json(loans);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getLoan(req, res) {
    try {
      const { id } = req.params;
      const loan = await LoanModel.getLoanById(id);

      if (!loan) {
        return res.status(404).json({ error: "Peminjaman tidak ditemukan" });
      }

      res.json(loan);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async returnLoan(req, res) {
    try {
      const { loanId } = req.params;

      const result = await LoanModel.returnLoan(loanId);

      res.json({
        message: "Buku berhasil dikembalikan!",
        loan: result.loan,
        updatedBook: {
          id: result.book.id,
          title: result.book.title,
          available_copies: result.book.available_copies,
          total_copies: result.book.total_copies,
        },
      });
    } catch (err) {
      // Jika loan tidak ditemukan atau sudah dikembalikan, kirim status 400
      if (err.message.includes("tidak ditemukan") || err.message.includes("sudah dikembalikan")) {
        res.status(400).json({ error: err.message });
      } else {
        res.status(500).json({ error: err.message });
      }
    }
  },
};
