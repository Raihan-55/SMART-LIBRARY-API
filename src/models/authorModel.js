import { pool } from "../config/db.js";

export const AuthorModel = {
  async getAll() {
    const result = await pool.query("SELECT * FROM authors ORDER BY name ASC");
    return result.rows;
  },

  async getById(id) {
    const query = "SELECT * FROM authors WHERE id = $1";
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },

  async search(name) {
    const query = `
      SELECT * FROM authors 
      WHERE name ILIKE '%' || $1 || '%'
      ORDER BY name ASC
    `;
    const result = await pool.query(query, [name]);
    return result.rows;
  },

  async create(name, nationality) {
    const query = "INSERT INTO authors (name, nationality) VALUES ($1, $2) RETURNING *";
    const result = await pool.query(query, [name, nationality]);
    return result.rows[0];
  },

  async update(id, name, nationality) {
    const query = "UPDATE authors SET name = $2, nationality = $3 WHERE id = $1 RETURNING *";
    const result = await pool.query(query, [id, name, nationality]);
    return result.rows[0];
  },

  async delete(id) {
    const query = "DELETE FROM authors WHERE id = $1 RETURNING *";
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },
};
