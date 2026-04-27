# 📮 Postman Collection - Smart Library API

File koleksi Postman untuk testing semua API endpoints Smart Library API.

## 📥 Cara Import Collection

### 1. **Menggunakan Postman Desktop**

- Buka Postman
- Klik tombol **"Import"** di bagian atas kiri
- Pilih **"Upload Files"**
- Pilih file `Smart_Library_API.postman_collection.json`
- Klik **"Import"**
- Koleksi akan muncul di sidebar

### 2. **Menggunakan Postman Web**

- Buka https://web.postman.co
- Login dengan akun Postman
- Klik **"Import"** di bagian atas kiri
- Upload file `Smart_Library_API.postman_collection.json`
- Koleksi akan tersimpan di workspace

---

## 🚀 Struktur Collection

Koleksi dibagi menjadi 5 kategori utama:

### **1. Authors (Penulis)**

- ✅ `GET /api/authors` - Ambil semua penulis
- ✅ `GET /api/authors?name=xxx` - Cari penulis berdasarkan nama
- ✅ `GET /api/authors/:id` - Ambil penulis berdasarkan ID
- ✅ `POST /api/authors` - Buat penulis baru
- ✅ `PUT /api/authors/:id` - Update penulis
- ✅ `DELETE /api/authors/:id` - Hapus penulis

### **2. Categories (Kategori)**

- ✅ `GET /api/categories` - Ambil semua kategori
- ✅ `GET /api/categories?name=xxx` - Cari kategori berdasarkan nama
- ✅ `GET /api/categories/:id` - Ambil kategori berdasarkan ID
- ✅ `POST /api/categories` - Buat kategori baru
- ✅ `PUT /api/categories/:id` - Update kategori
- ✅ `DELETE /api/categories/:id` - Hapus kategori

### **3. Books (Buku)**

- ✅ `GET /api/books` - Ambil semua buku (dengan detail penulis & kategori)
- ✅ `GET /api/books?title=xxx` - Cari buku berdasarkan judul
- ✅ `GET /api/books/:id` - Ambil buku berdasarkan ID
- ✅ `POST /api/books` - Buat buku baru
- ✅ `PUT /api/books/:id` - Update buku
- ✅ `DELETE /api/books/:id` - Hapus buku

### **4. Members (Anggota)**

- ✅ `GET /api/members` - Ambil semua anggota
- ✅ `GET /api/members/:id` - Ambil anggota berdasarkan ID
- ✅ `POST /api/members` - Daftarkan anggota baru
- ✅ `PUT /api/members/:id` - Update data anggota
- ✅ `DELETE /api/members/:id` - Hapus anggota

### **5. Loans (Peminjaman)**

- ✅ `GET /api/loans` - Ambil semua data peminjaman
- ✅ `GET /api/loans/:id` - Ambil peminjaman berdasarkan ID
- ✅ `POST /api/loans` - Buat peminjaman baru (auto kurangi stok)
- ✅ `POST /api/loans/:loanId/return` - Return buku (auto tambah stok)

---

## 🔧 Cara Menggunakan

### **Sebelum Testing**

1. Pastikan backend sudah berjalan di `http://localhost:3000`
2. Database sudah terhubung dengan baik
3. Semua table sudah dibuat di database

### **Testing Alur Lengkap**

**Step 1: Buat Data Master**

1. Buat Author: `POST /api/authors` → Copy ID dari response
2. Buat Category: `POST /api/categories` → Copy ID dari response
3. Buat Book: `POST /api/books` (gunakan author_id & category_id dari step 1-2) → Copy ID
4. Buat Member: `POST /api/members` → Copy ID

**Step 2: Test Peminjaman**

1. Pinjam Buku: `POST /api/loans` (gunakan book_id & member_id dari step 1) → Copy loan ID
2. Lihat stok berkurang: `GET /api/books/:id`
3. Return Buku: `POST /api/loans/:loanId/return` (gunakan loan ID dari step 1)
4. Lihat stok bertambah: `GET /api/books/:id`

**Step 3: Test CRUD**

1. Update data master: `PUT /api/authors/:id`, `PUT /api/categories/:id`, dll
2. Get by ID: `GET /api/authors/:id`, `GET /api/members/:id`, dll
3. Search: `GET /api/authors?name=xxx`, `GET /api/books?title=xxx`, dll
4. Delete: `DELETE /api/authors/:id`, `DELETE /api/members/:id`, dll

---

## 📝 Contoh Request & Response

### **Buat Author**

**Request:**

```
POST http://localhost:3000/api/authors
Content-Type: application/json

{
  "name": "Haruki Murakami",
  "nationality": "Japan"
}
```

**Response (201 Created):**

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "Haruki Murakami",
  "nationality": "Japan",
  "created_at": "2026-04-27T10:30:00.000Z"
}
```

### **Buat Buku**

**Request:**

```
POST http://localhost:3000/api/books
Content-Type: application/json

{
  "isbn": "978-0451524935",
  "title": "Norwegian Wood",
  "author_id": "550e8400-e29b-41d4-a716-446655440000",
  "category_id": "660e8400-e29b-41d4-a716-446655440001",
  "total_copies": 5
}
```

**Response (201 Created):**

```json
{
  "id": "770e8400-e29b-41d4-a716-446655440002",
  "isbn": "978-0451524935",
  "title": "Norwegian Wood",
  "author_id": "550e8400-e29b-41d4-a716-446655440000",
  "category_id": "660e8400-e29b-41d4-a716-446655440001",
  "total_copies": 5,
  "available_copies": 5,
  "created_at": "2026-04-27T10:35:00.000Z"
}
```

### **Pinjam Buku**

**Request:**

```
POST http://localhost:3000/api/loans
Content-Type: application/json

{
  "book_id": "770e8400-e29b-41d4-a716-446655440002",
  "member_id": "880e8400-e29b-41d4-a716-446655440003",
  "due_date": "2026-05-04"
}
```

**Response (201 Created):**

```json
{
  "message": "Peminjaman berhasil dicatat!",
  "data": {
    "id": "990e8400-e29b-41d4-a716-446655440004",
    "book_id": "770e8400-e29b-41d4-a716-446655440002",
    "member_id": "880e8400-e29b-41d4-a716-446655440003",
    "status": "BORROWED",
    "borrow_date": "2026-04-27",
    "due_date": "2026-05-04",
    "return_date": null,
    "created_at": "2026-04-27T10:40:00.000Z"
  }
}
```

### **Return Buku**

**Request:**

```
POST http://localhost:3000/api/loans/990e8400-e29b-41d4-a716-446655440004/return
Content-Type: application/json
```

**Response (200 OK):**

```json
{
  "message": "Buku berhasil dikembalikan!",
  "loan": {
    "id": "990e8400-e29b-41d4-a716-446655440004",
    "book_id": "770e8400-e29b-41d4-a716-446655440002",
    "member_id": "880e8400-e29b-41d4-a716-446655440003",
    "status": "RETURNED",
    "borrow_date": "2026-04-27",
    "due_date": "2026-05-04",
    "return_date": "2026-04-27",
    "book_title": "Norwegian Wood",
    "member_name": "John Doe"
  },
  "updatedBook": {
    "id": "770e8400-e29b-41d4-a716-446655440002",
    "title": "Norwegian Wood",
    "available_copies": 5,
    "total_copies": 5
  }
}
```

---

## ⚠️ Error Handling

Collection sudah mencakup semua skenario error:

**404 Not Found** - Data tidak ditemukan

```json
{
  "error": "Penulis tidak ditemukan"
}
```

**400 Bad Request** - Data tidak valid atau duplicate

```json
{
  "error": "Buku sedang tidak tersedia (stok habis)."
}
```

**400 Bad Request** - Buku sudah dikembalikan sebelumnya

```json
{
  "error": "Buku ini sudah dikembalikan sebelumnya"
}
```

**500 Internal Server Error** - Error database

```json
{
  "error": "Pesan error dari database"
}
```

---

## 💡 Tips Penggunaan

1. **Ganti URL jika localhost tidak 3000** → Edit di bagian environment atau per request
2. **Copy ID dari response** → Gunakan untuk request berikutnya
3. **Gunakan tab "Body" untuk POST/PUT** → Pilih "raw" dan "JSON"
4. **Cek status code response** → 201 = berhasil create, 200 = sukses, 400 = error, 404 = not found
5. **Test search terlebih dahulu** → Sebelum menggunakan ID di request lain

---

## 🔗 Referensi Cepat

| Operasi     | Method | Endpoint                       |
| ----------- | ------ | ------------------------------ |
| Ambil semua | GET    | `/api/{entity}`                |
| Ambil satu  | GET    | `/api/{entity}/:id`            |
| Cari        | GET    | `/api/{entity}?name/title=xxx` |
| Buat        | POST   | `/api/{entity}`                |
| Update      | PUT    | `/api/{entity}/:id`            |
| Hapus       | DELETE | `/api/{entity}/:id`            |
| Return Buku | POST   | `/api/loans/:loanId/return`    |

---

**File dibuat untuk Smart Library API Testing** 📚
