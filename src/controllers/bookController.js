import { BookModel } from "../models/bookModel.js";

export const BookController = {
  async getAllBooks(req, res) {
    try {
      const { title } = req.query;

      let books;
      if (title && title.trim()) {
        // Jika ada parameter pencarian, gunakan search
        books = await BookModel.search(title);
      } else {
        // Jika tidak ada parameter, return semua data
        books = await BookModel.getAll();
      }

      res.json(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getBook(req, res) {
    try {
      const { id } = req.params;
      const book = await BookModel.getById(id);

      if (!book) {
        return res.status(404).json({ error: "Buku tidak ditemukan" });
      }

      res.json(book);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async createBook(req, res) {
    try {
      const newBook = await BookModel.create(req.body);
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async updateBook(req, res) {
    try {
      const { id } = req.params;

      const existingBook = await BookModel.getById(id);
      if (!existingBook) {
        return res.status(404).json({ error: "Buku tidak ditemukan" });
      }

      const updatedBook = await BookModel.update(id, req.body);
      res.json(updatedBook);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deleteBook(req, res) {
    try {
      const { id } = req.params;

      const existingBook = await BookModel.getById(id);
      if (!existingBook) {
        return res.status(404).json({ error: "Buku tidak ditemukan" });
      }

      await BookModel.delete(id);
      res.json({ message: "Buku berhasil dihapus" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
