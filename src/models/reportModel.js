import { pool } from "../config/db.js";

export const ReportModel = {
  async getStats() {
    const booksQuery = "SELECT COUNT(*) AS total FROM books";
    const authorsQuery = "SELECT COUNT(*) AS total FROM authors";
    const categoriesQuery = "SELECT COUNT(*) AS total FROM categories";
    const loansQuery = "SELECT COUNT(*) AS total FROM loans WHERE status = 'BORROWED'";

    const [booksResult, authorsResult, categoriesResult, loansResult] = await Promise.all([pool.query(booksQuery), pool.query(authorsQuery), pool.query(categoriesQuery), pool.query(loansQuery)]);

    return {
      total_books: parseInt(booksResult.rows[0].total, 10),
      total_authors: parseInt(authorsResult.rows[0].total, 10),
      total_categories: parseInt(categoriesResult.rows[0].total, 10),
      total_borrowed_transactions: parseInt(loansResult.rows[0].total, 10),
    };
  },
};
