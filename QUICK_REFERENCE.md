# ⚡ QUICK REFERENCE - Smart Library API

Referensi cepat semua endpoint API Smart Library.

---

## 📚 ENDPOINTS SUMMARY

### **Authors** 👨‍✍️

| Method | Endpoint                | Deskripsi        |
| ------ | ----------------------- | ---------------- |
| GET    | `/api/authors`          | Semua penulis    |
| GET    | `/api/authors?name=xxx` | Cari penulis     |
| GET    | `/api/authors/:id`      | Penulis tertentu |
| POST   | `/api/authors`          | Buat penulis     |
| PUT    | `/api/authors/:id`      | Update penulis   |
| DELETE | `/api/authors/:id`      | Hapus penulis    |

**Body POST/PUT:**

```json
{
  "name": "string",
  "nationality": "string"
}
```

---

### **Categories** 📂

| Method | Endpoint                   | Deskripsi         |
| ------ | -------------------------- | ----------------- |
| GET    | `/api/categories`          | Semua kategori    |
| GET    | `/api/categories?name=xxx` | Cari kategori     |
| GET    | `/api/categories/:id`      | Kategori tertentu |
| POST   | `/api/categories`          | Buat kategori     |
| PUT    | `/api/categories/:id`      | Update kategori   |
| DELETE | `/api/categories/:id`      | Hapus kategori    |

**Body POST/PUT:**

```json
{
  "name": "string"
}
```

---

### **Books** 📖

| Method | Endpoint               | Deskripsi     |
| ------ | ---------------------- | ------------- |
| GET    | `/api/books`           | Semua buku    |
| GET    | `/api/books?title=xxx` | Cari buku     |
| GET    | `/api/books/:id`       | Buku tertentu |
| POST   | `/api/books`           | Buat buku     |
| PUT    | `/api/books/:id`       | Update buku   |
| DELETE | `/api/books/:id`       | Hapus buku    |

**Body POST/PUT:**

```json
{
  "isbn": "string",
  "title": "string",
  "author_id": "uuid",
  "category_id": "uuid",
  "total_copies": "number"
}
```

---

### **Members** 👥

| Method | Endpoint           | Deskripsi        |
| ------ | ------------------ | ---------------- |
| GET    | `/api/members`     | Semua anggota    |
| GET    | `/api/members/:id` | Anggota tertentu |
| POST   | `/api/members`     | Daftar anggota   |
| PUT    | `/api/members/:id` | Update anggota   |
| DELETE | `/api/members/:id` | Hapus anggota    |

**Body POST/PUT:**

```json
{
  "full_name": "string",
  "email": "string",
  "member_type": "string"
}
```

---

### **Loans** 💳

| Method | Endpoint                    | Deskripsi           |
| ------ | --------------------------- | ------------------- |
| GET    | `/api/loans`                | Semua peminjaman    |
| GET    | `/api/loans/:id`            | Peminjaman tertentu |
| POST   | `/api/loans`                | Pinjam buku         |
| POST   | `/api/loans/:loanId/return` | Kembalikan buku     |

**Body POST (Loan):**

```json
{
  "book_id": "uuid",
  "member_id": "uuid",
  "due_date": "YYYY-MM-DD"
}
```

**Body POST (Return):**

```json
{}
```

(Empty body, hanya kirim request POST)

---

## ✅ STATUS CODES

| Code | Arti         | Contoh                                           |
| ---- | ------------ | ------------------------------------------------ |
| 200  | OK           | GET, PUT, DELETE berhasil                        |
| 201  | Created      | POST berhasil                                    |
| 400  | Bad Request  | Data tidak valid, stok habis, sudah dikembalikan |
| 404  | Not Found    | Data tidak ditemukan                             |
| 500  | Server Error | Error database                                   |

---

## 🔄 WORKFLOW UMUM

**1. Setup Data Master:**

```
POST /api/authors → Copy ID
POST /api/categories → Copy ID
POST /api/books (gunakan author_id & category_id) → Copy ID
POST /api/members → Copy ID
```

**2. Peminjaman:**

```
POST /api/loans (gunakan book_id & member_id) → Copy ID
GET /api/books/:id → Lihat stok berkurang
```

**3. Pengembalian:**

```
POST /api/loans/:loanId/return
GET /api/books/:id → Lihat stok bertambah
```

---

## 🧪 TESTING TOOLS

### **Opsi 1: Postman**

1. Import: `Smart_Library_API.postman_collection.json`
2. Baca: `POSTMAN_TESTING_GUIDE.md`

### **Opsi 2: cURL**

```bash
curl -X GET http://localhost:3000/api/books
curl -X POST http://localhost:3000/api/members \
  -H "Content-Type: application/json" \
  -d '{"full_name":"John","email":"john@example.com","member_type":"Regular"}'
```

Baca: `CURL_TESTING_COMMANDS.md`

### **Opsi 3: Browser (hanya GET)**

```
http://localhost:3000/api/books
http://localhost:3000/api/authors?name=Haruki
```

### **Opsi 4: VSCode REST Client Extension**

```http
GET http://localhost:3000/api/books

###

POST http://localhost:3000/api/members
Content-Type: application/json

{
  "full_name": "John Doe",
  "email": "john@example.com",
  "member_type": "Regular"
}
```

---

## 🎯 COMMON OPERATIONS

### **Ambil Semua Data**

```bash
curl http://localhost:3000/api/books
curl http://localhost:3000/api/members
curl http://localhost:3000/api/authors
```

### **Cari Data**

```bash
curl "http://localhost:3000/api/books?title=Norwegian"
curl "http://localhost:3000/api/authors?name=Haruki"
curl "http://localhost:3000/api/categories?name=Fiction"
```

### **Ambil Data Spesifik**

```bash
curl http://localhost:3000/api/books/550e8400-e29b-41d4-a716-446655440000
```

### **Buat Data**

```bash
curl -X POST http://localhost:3000/api/authors \
  -H "Content-Type: application/json" \
  -d '{"name":"Haruki Murakami","nationality":"Japan"}'
```

### **Update Data**

```bash
curl -X PUT http://localhost:3000/api/authors/550e8400-e29b-41d4-a716-446655440000 \
  -H "Content-Type: application/json" \
  -d '{"name":"Haruki (Updated)","nationality":"Japan"}'
```

### **Hapus Data**

```bash
curl -X DELETE http://localhost:3000/api/authors/550e8400-e29b-41d4-a716-446655440000
```

---

## 🚀 SETUP CEPAT

1. **Start Backend:**

   ```bash
   npm install
   npm start
   ```

2. **Test Endpoint:**

   ```bash
   # Via Browser
   http://localhost:3000/api/books

   # Via cURL
   curl http://localhost:3000/api/books

   # Via Postman
   Import Smart_Library_API.postman_collection.json
   ```

3. **Baca Dokumentasi:**
   - `POSTMAN_TESTING_GUIDE.md` - Untuk Postman user
   - `CURL_TESTING_COMMANDS.md` - Untuk terminal user
   - File ini - Untuk quick reference

---

## ⚠️ ERROR TROUBLESHOOTING

**"Cannot GET /api/books"**

- ❌ Server tidak jalan
- ✅ Jalankan: `npm start`

**"Error: Buku sedang tidak tersedia (stok habis)"**

- ❌ Stok habis
- ✅ Cek: `GET /api/books/:id` → `available_copies`

**"Error: Peminjaman tidak ditemukan"**

- ❌ Loan ID salah
- ✅ Cek: `GET /api/loans` → Cari loan ID yang benar

**"Error: Buku ini sudah dikembalikan sebelumnya"**

- ❌ Buku sudah dikembalikan
- ✅ Gunakan loan ID lain atau cek status peminjaman

---

## 📞 SUPPORT

**Files yang tersedia:**

- `Smart_Library_API.postman_collection.json` - Postman collection
- `POSTMAN_TESTING_GUIDE.md` - Panduan Postman lengkap
- `CURL_TESTING_COMMANDS.md` - Curl commands lengkap
- `QUICK_REFERENCE.md` - File ini (cheat sheet)

**Untuk info lebih detail:**

- Baca dokumentasi endpoint di controller masing-masing
- Cek DB schema di database
- Lihat error message untuk debug

---

**Last Updated: 2026-04-27** 📚
