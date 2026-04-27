import { MemberModel } from "../models/memberModel.js";

export const MemberController = {
  // Mendapatkan semua daftar anggota
  async getAllMembers(req, res) {
    try {
      const members = await MemberModel.getAll();
      res.json(members);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Mendapatkan anggota berdasarkan ID
  async getMember(req, res) {
    try {
      const { id } = req.params;
      const member = await MemberModel.getById(id);

      if (!member) {
        return res.status(404).json({ error: "Anggota tidak ditemukan" });
      }

      res.json(member);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Mendaftarkan anggota baru
  async registerMember(req, res) {
    try {
      const newMember = await MemberModel.create(req.body);
      res.status(201).json({
        message: "Anggota berhasil didaftarkan!",
        data: newMember,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // Memperbarui data anggota
  async updateMember(req, res) {
    try {
      const { id } = req.params;

      const existingMember = await MemberModel.getById(id);
      if (!existingMember) {
        return res.status(404).json({ error: "Anggota tidak ditemukan" });
      }

      const updatedMember = await MemberModel.update(id, req.body);
      res.json({
        message: "Anggota berhasil diperbarui!",
        data: updatedMember,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // Menghapus anggota
  async deleteMember(req, res) {
    try {
      const { id } = req.params;

      const existingMember = await MemberModel.getById(id);
      if (!existingMember) {
        return res.status(404).json({ error: "Anggota tidak ditemukan" });
      }

      await MemberModel.delete(id);
      res.json({ message: "Anggota berhasil dihapus" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
