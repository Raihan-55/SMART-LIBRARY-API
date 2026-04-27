import { AuthorModel } from "../models/authorModel.js";

export const AuthorController = {
  async getAuthors(req, res) {
    try {
      const { name } = req.query;

      let authors;
      if (name && name.trim()) {
        // Jika ada parameter pencarian, gunakan search
        authors = await AuthorModel.search(name);
      } else {
        // Jika tidak ada parameter, return semua data
        authors = await AuthorModel.getAll();
      }

      res.json(authors);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getAuthor(req, res) {
    try {
      const { id } = req.params;
      const author = await AuthorModel.getById(id);

      if (!author) {
        return res.status(404).json({ error: "Penulis tidak ditemukan" });
      }

      res.json(author);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async addAuthor(req, res) {
    try {
      const { name, nationality } = req.body;
      const author = await AuthorModel.create(name, nationality);
      res.status(201).json(author);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async updateAuthor(req, res) {
    try {
      const { id } = req.params;
      const { name, nationality } = req.body;

      const existingAuthor = await AuthorModel.getById(id);
      if (!existingAuthor) {
        return res.status(404).json({ error: "Penulis tidak ditemukan" });
      }

      const updatedAuthor = await AuthorModel.update(id, name, nationality);
      res.json(updatedAuthor);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deleteAuthor(req, res) {
    try {
      const { id } = req.params;

      const existingAuthor = await AuthorModel.getById(id);
      if (!existingAuthor) {
        return res.status(404).json({ error: "Penulis tidak ditemukan" });
      }

      await AuthorModel.delete(id);
      res.json({ message: "Penulis berhasil dihapus" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
