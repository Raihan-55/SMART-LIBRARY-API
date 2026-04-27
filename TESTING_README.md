# 🧪 TESTING DOCUMENTATION - Smart Library API

Dokumentasi lengkap untuk testing semua API Smart Library dengan berbagai metode.

---

## 📋 FILES YANG TERSEDIA

### **1. `Smart_Library_API.postman_collection.json`** 📮

File koleksi Postman yang siap diimport.

**Untuk siapa?** Developer yang menggunakan Postman Desktop atau Web
**Isi:**

- 25+ endpoints siap pakai
- Organized dalam 5 folder: Authors, Categories, Books, Members, Loans
- Pre-built request bodies

**Cara pakai:**

1. Buka Postman
2. Klik Import → Upload file ini
3. Klik-klik endpoint, modifikasi ID jika perlu
4. Klik Send

**Keuntungan:**
✅ Paling mudah dan visual  
✅ Bisa save response  
✅ Bisa organize request dalam folder  
✅ Support environment variables

---

### **2. `POSTMAN_TESTING_GUIDE.md`** 📖

Panduan lengkap cara menggunakan Postman.

**Isi:**

- Cara import collection
- Struktur folder & endpoint
- Testing workflow lengkap
- Contoh request & response
- Error handling
- Tips penggunaan

**Baca ini ketika:**

- Baru pertama kali pakai Postman
- Ingin tahu workflow lengkap
- Perlu contoh request & response
- Mengalami error dan butuh troubleshoot

---

### **3. `CURL_TESTING_COMMANDS.md`** 💻

Referensi curl commands untuk terminal/command line.

**Isi:**

- 20+ curl commands lengkap
- Grouped by endpoint (Authors, Categories, Books, dll)
- Testing workflow example
- Tips untuk PowerShell users
- Cara save response ke file
- Cara pretty print JSON

**Gunakan ketika:**

- Tidak ingin install Postman
- Prefer command line
- Automation/scripting
- CI/CD pipeline

**Keuntungan:**
✅ No software needed, hanya terminal  
✅ Bisa dipakai di server/Linux  
✅ Bisa diautomasi dalam script  
✅ Cepat untuk testing quick

---

### **4. `QUICK_REFERENCE.md`** ⚡

Cheat sheet singkat (one-page reference).

**Isi:**

- Tabel semua endpoints
- Status codes
- Workflow umum
- Common operations
- Error troubleshooting
- Setup cepat

**Gunakan untuk:**

- Referensi cepat (2 menit)
- Inget lagi nama endpoint
- Lihat struktur request body
- Quick troubleshooting

---

### **5. `README.md`** 📚

File ini - dokumentasi testing keseluruhan.

---

## 🚀 MULAI TESTING - CHOOSE YOUR PATH

### **Path A: Saya pengen pakai GUI (Paling Mudah)** 🎨

1. Download & install [Postman](https://www.postman.com/downloads/)
2. Buka Postman
3. Klik **Import** → Pilih `Smart_Library_API.postman_collection.json`
4. Selesai! Collection sudah muncul di sidebar
5. Klik endpoint, modifikasi jika perlu, klik **Send**
6. Baca `POSTMAN_TESTING_GUIDE.md` untuk detail

**Time: 2 menit setup + 1 menit per test**

---

### **Path B: Saya pengen pakai Terminal (Tanpa Install)** 🖥️

1. Buka terminal/command prompt
2. Copy-paste curl command dari `CURL_TESTING_COMMANDS.md`
3. Ganti `{id}` dengan ID yang sebenarnya
4. Press Enter
5. Response langsung muncul di terminal

**Example:**

```bash
curl http://localhost:3000/api/books
```

**Time: 30 detik per test**

---

### **Path C: Saya mau Quick Reference (Paling Cepat)** ⚡

1. Buka `QUICK_REFERENCE.md`
2. Cari endpoint yang kamu cari
3. Copy URL/format request
4. Paste ke Postman atau curl
5. Modifikasi ID jika perlu

**Time: 1 menit per test**

---

### **Path D: Saya mau Full Tutorial** 📖

1. Baca `POSTMAN_TESTING_GUIDE.md` dari awal sampai akhir
2. Ikuti testing workflow step-by-step
3. Lihat contoh request & response
4. Pelajari error handling
5. Selesai!

**Time: 30 menit full reading**

---

## 📊 COMPARISON TABLE

| Aspek           | Postman    | cURL       | Quick Ref    | This Doc |
| --------------- | ---------- | ---------- | ------------ | -------- |
| Setup Time      | 2 menit    | 0 menit    | 0 menit      | 0 menit  |
| Kemudahan       | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     | ⭐⭐⭐⭐     | ⭐⭐⭐   |
| Visual          | ⭐⭐⭐⭐⭐ | ❌         | ❌           | ⭐⭐     |
| Learning Curve  | Mudah      | Medium     | Sangat Mudah | Medium   |
| Automation      | ⭐⭐       | ⭐⭐⭐⭐⭐ | ⭐⭐         | ❌       |
| IDE Integration | ❌         | ⭐⭐⭐⭐⭐ | ❌           | ❌       |
| Resource Usage  | Medium     | Very Low   | None         | None     |
| Best For        | Testing UI | Scripting  | Quick Check  | Learning |

---

## 🎯 RECOMMENDED WORKFLOW

### **Day 1: Learn & Explore**

```
1. Baca QUICK_REFERENCE.md (5 menit)
   ↓
2. Setup Postman (2 menit)
   ↓
3. Import Smart_Library_API.postman_collection.json
   ↓
4. Test 2-3 endpoint (10 menit)
   ↓
5. Baca POSTMAN_TESTING_GUIDE.md (20 menit)
```

### **Day 2+: Production Testing**

```
1. Refer QUICK_REFERENCE.md saat butuh endpoint (1 menit)
   ↓
2. Copy curl command dari CURL_TESTING_COMMANDS.md
   ↓
3. Test via curl atau Postman (2 menit per endpoint)
   ↓
4. Done!
```

---

## ✅ CHECKLIST - Testing Semua Endpoint

### **Authors** 👨‍✍️

- [ ] GET /api/authors - Get all
- [ ] GET /api/authors?name=xxx - Search
- [ ] GET /api/authors/:id - Get by ID
- [ ] POST /api/authors - Create
- [ ] PUT /api/authors/:id - Update
- [ ] DELETE /api/authors/:id - Delete

### **Categories** 📂

- [ ] GET /api/categories - Get all
- [ ] GET /api/categories?name=xxx - Search
- [ ] GET /api/categories/:id - Get by ID
- [ ] POST /api/categories - Create
- [ ] PUT /api/categories/:id - Update
- [ ] DELETE /api/categories/:id - Delete

### **Books** 📖

- [ ] GET /api/books - Get all
- [ ] GET /api/books?title=xxx - Search
- [ ] GET /api/books/:id - Get by ID
- [ ] POST /api/books - Create
- [ ] PUT /api/books/:id - Update
- [ ] DELETE /api/books/:id - Delete

### **Members** 👥

- [ ] GET /api/members - Get all
- [ ] GET /api/members/:id - Get by ID
- [ ] POST /api/members - Create
- [ ] PUT /api/members/:id - Update
- [ ] DELETE /api/members/:id - Delete

### **Loans** 💳

- [ ] GET /api/loans - Get all
- [ ] GET /api/loans/:id - Get by ID
- [ ] POST /api/loans - Create loan (borrow)
- [ ] POST /api/loans/:loanId/return - Return book

### **Stock Management** 📦

- [ ] Check: Stock berkurang setelah borrow
- [ ] Check: Stock bertambah setelah return
- [ ] Check: Tidak bisa borrow jika stock 0

---

## 🔍 HOW TO READ DOCUMENTATION

### **Untuk Postman User:**

```
START HERE → POSTMAN_TESTING_GUIDE.md
           ↓
        Import Collection → QUICK_REFERENCE.md
           ↓
        Run Tests!
```

### **Untuk Terminal/cURL User:**

```
START HERE → QUICK_REFERENCE.md
           ↓
        CURL_TESTING_COMMANDS.md
           ↓
        Copy-Paste Commands → Run in Terminal!
```

### **Untuk Learner:**

```
START HERE → This file (README.md)
           ↓
        POSTMAN_TESTING_GUIDE.md (Full tutorial)
           ↓
        Try with Postman
           ↓
        QUICK_REFERENCE.md (untuk daily use)
```

---

## 📦 FOLDER STRUCTURE

```
smart-library-api-main/
├── Smart_Library_API.postman_collection.json  ← Import ke Postman
├── POSTMAN_TESTING_GUIDE.md                  ← Baca pertama (Postman user)
├── CURL_TESTING_COMMANDS.md                  ← Baca pertama (cURL user)
├── QUICK_REFERENCE.md                        ← Quick lookup
├── README.md                                  ← File ini
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── config/
├── package.json
└── index.html
```

---

## 🚨 BEFORE YOU START

**Checklist:**

- [ ] Backend sudah running (`npm start`)
- [ ] Database sudah terhubung
- [ ] Server listening di `http://localhost:3000`
- [ ] Test dengan `curl http://localhost:3000/api/books` di terminal

**Test Connection:**

```bash
# Jika berhasil, akan return array books (bisa kosong)
curl http://localhost:3000/api/books

# Jika error "Cannot GET", server tidak jalan
# Jalankan: npm start
```

---

## 🆘 QUICK TROUBLESHOOTING

| Problem                          | Solution                                         |
| -------------------------------- | ------------------------------------------------ |
| "Cannot GET /api/books"          | Server tidak jalan → `npm start`                 |
| Postman error ECONNREFUSED       | Backend belum running                            |
| cURL command not found (Windows) | Install Git Bash atau gunakan PowerShell         |
| JSON format error                | Pastikan Content-Type header: `application/json` |
| Stok tidak berubah               | Pastikan transaction berhasil (lihat response)   |
| "Peminjaman tidak ditemukan"     | Loan ID salah atau sudah didelete                |

---

## 📞 NEED HELP?

1. **Baca QUICK_REFERENCE.md** - Cek semua endpoint ada gak
2. **Lihat contoh di POSTMAN_TESTING_GUIDE.md** - Cek request/response format
3. **Copy dari CURL_TESTING_COMMANDS.md** - Guaranteed working
4. **Check error message** - Error message sudah cukup jelas
5. **Cek DB** - Pastikan data ada di database

---

## ✨ FEATURES SUMMARY

✅ **Complete CRUD** - Create, Read, Update, Delete untuk semua entity  
✅ **Search/Filter** - Cari berdasarkan name (authors/categories) atau title (books)  
✅ **Stock Management** - Auto kurangi stok saat borrow, auto tambah saat return  
✅ **Transaction Safety** - Gunakan database transaction untuk konsistensi data  
✅ **Error Handling** - Clear error messages untuk debugging  
✅ **API Documentation** - 4 file dokumentasi lengkap

---

## 🎓 LEARNING GOALS

Setelah menyelesaikan testing, kamu akan bisa:
✅ Understand REST API design
✅ Test CRUD operations
✅ Use Postman effectively
✅ Write curl commands
✅ Handle database transactions
✅ Implement error handling
✅ Manage resource relationships

---

## 📝 SUMMARY

Pilih metode testing yang kamu suka:

- **GUI Lovers?** → Gunakan **Postman** + `POSTMAN_TESTING_GUIDE.md`
- **Terminal Lovers?** → Gunakan **cURL** + `CURL_TESTING_COMMANDS.md`
- **Quick Lookup?** → Gunakan **QUICK_REFERENCE.md**
- **Full Learning?** → Baca semua file dari awal sampai akhir

**Start testing now! 🚀**

---

**Last Updated: 2026-04-27**  
**Created for: Smart Library API v1.0**
