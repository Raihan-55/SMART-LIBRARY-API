import { CategoryModel } from "../models/categoryModel.js";

export const CategoryController = {
  async getCategories(req, res) {
    try {
      const { name } = req.query;

      let categories;
      if (name && name.trim()) {
        // Jika ada parameter pencarian, gunakan search
        categories = await CategoryModel.search(name);
      } else {
        // Jika tidak ada parameter, return semua data
        categories = await CategoryModel.getAll();
      }

      res.json(categories);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getCategory(req, res) {
    try {
      const { id } = req.params;
      const category = await CategoryModel.getById(id);

      if (!category) {
        return res.status(404).json({ error: "Kategori tidak ditemukan" });
      }

      res.json(category);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async addCategory(req, res) {
    try {
      const category = await CategoryModel.create(req.body.name);
      res.status(201).json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async updateCategory(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const existingCategory = await CategoryModel.getById(id);
      if (!existingCategory) {
        return res.status(404).json({ error: "Kategori tidak ditemukan" });
      }

      const updatedCategory = await CategoryModel.update(id, name);
      res.json(updatedCategory);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deleteCategory(req, res) {
    try {
      const { id } = req.params;

      const existingCategory = await CategoryModel.getById(id);
      if (!existingCategory) {
        return res.status(404).json({ error: "Kategori tidak ditemukan" });
      }

      await CategoryModel.delete(id);
      res.json({ message: "Kategori berhasil dihapus" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
