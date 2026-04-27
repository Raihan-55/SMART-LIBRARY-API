# DESKRIPSI KEGIATAN KERJA PRAKTIK
## Pembangunan Website Smart Library API

---

## I. IDENTITAS PESERTA
- **Program:** Kerja Praktik
- **Semester:** 6
- **Mata Kuliah:** Praktik Sistem Basis Data (PRAK SBD)
- **Topik:** Pengembangan RESTful API untuk Sistem Manajemen Perpustakaan

---

## II. LATAR BELAKANG PROYEK

Smart Library API merupakan aplikasi RESTful API yang dirancang untuk mengelola sistem perpustakaan modern. Sistem ini memfasilitasi pengelolaan data buku, penulis, kategori, anggota perpustakaan, serta transaksi peminjaman buku secara terintegrasi. Proyek ini bertujuan untuk memberikan pemahaman praktis tentang:

- Pengembangan backend menggunakan Node.js dan Express.js
- Desain database relasional dengan PostgreSQL
- Implementasi RESTful API yang sesuai dengan best practices
- Manajemen relasi antar tabel dalam sistem basis data
- Integrasi antara frontend dan backend

---

## III. TUJUAN KEGIATAN KERJA PRAKTIK

### Tujuan Umum
Membangun sistem informasi perpustakaan berbasis web yang mampu mengelola data buku, anggota, dan transaksi peminjaman secara efisien.

### Tujuan Khusus
1. Merancang dan mengimplementasikan database relasional untuk kasus perpustakaan
2. Mengembangkan RESTful API endpoints yang menangani CRUD operations
3. Menerapkan konsep JOIN dan relasi foreign key dalam queries
4. Membuat interface frontend untuk interaksi pengguna dengan sistem
5. Memahami arsitektur MVC (Model-View-Controller) dalam praktik

---

## IV. TEKNOLOGI YANG DIGUNAKAN

### Backend
- **Node.js** (v18+) - Runtime JavaScript di server
- **Express.js** (v5.2.1) - Web framework untuk routing dan middleware
- **PostgreSQL** - Sistem manajemen basis data relasional

### Database
- **node-postgres (pg)** (v8.20.0) - Client PostgreSQL untuk Node.js
- **SQL** - untuk query dan manajemen data

### Frontend
- **HTML5** - Struktur halaman web
- **CSS3** - Styling dan responsive design
- **JavaScript (Vanilla)** - Interaktivitas frontend

### Development Tools
- **nodemon** (v3.1.14) - Auto-restart server saat development
- **dotenv** (v17.4.2) - Manajemen environment variables

### Deployment
- **Vercel** - Platform deployment untuk hosting

---

## V. DESKRIPSI SISTEM DAN FITUR

### A. Arsitektur Sistem

Sistem Smart Library API menggunakan arsitektur **three-tier** (tiga lapisan):

```
┌─────────────────────────────────────┐
│     Frontend (Presentation Layer)    │
│  HTML/CSS/JavaScript (index.html)   │
└────────────────┬────────────────────┘
                 │
┌────────────────┴────────────────────┐
│  API Server (Application Layer)      │
│  - Express.js Routes                 │
│  - Controllers                        │
│  - Business Logic                     │
└────────────────┬────────────────────┘
                 │
┌────────────────┴────────────────────┐
│   Database (Data Layer)              │
│   PostgreSQL with Relational Model   │
└─────────────────────────────────────┘
```

### B. Struktur Database

**Tabel yang Diimplementasikan:**

1. **authors** (Penulis)
   - `id` (Primary Key)
   - `name` (Nama penulis)
   - `nationality` (Kewarganegaraan)

2. **categories** (Kategori)
   - `id` (Primary Key)
   - `name` (Nama kategori)

3. **books** (Buku)
   - `id` (Primary Key)
   - `isbn` (Nomor identitas buku)
   - `title` (Judul buku)
   - `author_id` (Foreign Key → authors)
   - `category_id` (Foreign Key → categories)
   - `total_copies` (Total salinan)
   - `available_copies` (Salinan tersedia)

4. **members** (Anggota)
   - `id` (Primary Key)
   - `name` (Nama anggota)
   - `email` (Alamat email)
   - `phone` (Nomor telepon)

5. **loans** (Peminjaman)
   - `id` (Primary Key)
   - `book_id` (Foreign Key → books)
   - `member_id` (Foreign Key → members)
   - `loan_date` (Tanggal peminjaman)
   - `due_date` (Tanggal kembali)
   - `return_date` (Tanggal pengembalian aktual)

**Relasi Yang Dibangun:**
- Authors ↔ Books (1:N)
- Categories ↔ Books (1:N)
- Members ↔ Loans (1:N)
- Books ↔ Loans (1:N)

### C. Fitur Utama Aplikasi

#### 1. Manajemen Penulis (Authors)
- **GET /api/authors** - Mengambil daftar semua penulis (diurutkan A-Z)
- **POST /api/authors** - Menambahkan penulis baru
- Fitur: Validasi input, pengurutan otomatis

#### 2. Manajemen Kategori (Categories)
- **GET /api/categories** - Mengambil daftar semua kategori
- **POST /api/categories** - Menambahkan kategori baru
- Fitur: Pembuatan kategori cepat dan sederhana

#### 3. Manajemen Buku (Books)
- **GET /api/books** - Mengambil daftar buku lengkap dengan detail penulis dan kategori (JOIN query)
- **POST /api/books** - Menambahkan buku baru
- Fitur: 
  - Relasi dengan penulis dan kategori
  - Tracking stok buku (total dan salinan tersedia)
  - Validasi referensi foreign key

#### 4. Manajemen Anggota (Members)
- **GET /api/members** - Mengambil daftar anggota
- **POST /api/members** - Mendaftar anggota baru
- Fitur: Data identitas lengkap anggota

#### 5. Transaksi Peminjaman (Loans)
- **GET /api/loans** - Mengambil daftar peminjaman
- **POST /api/loans** - Membuat transaksi peminjaman baru
  - Otomatis mengurangi stok buku
  - Set due date (tanggal batas kembali)
- **PUT /api/loans/:id** - Menyelesaikan peminjaman (return buku)
  - Otomatis menambah stok buku
  - Catat tanggal pengembalian

#### 6. Frontend Interface
- Tampilan daftar buku tersedia dengan stok real-time
- Form peminjaman buku interaktif
- Validasi input client-side
- Notifikasi status (success/error)
- Responsive design

---

## VI. KEGIATAN KERJA PRAKTIK

### A. Tahap Persiapan
1. **Analisis Kebutuhan Sistem**
   - Mendefinisikan entity yang dibutuhkan (Authors, Books, Categories, Members, Loans)
   - Merancang relasi antar entitas
   - Menentukan fitur utama aplikasi

2. **Setup Environment Development**
   - Install Node.js dan PostgreSQL
   - Konfigurasi project npm
   - Setup environment variables (.env)

### B. Tahap Implementasi

#### 1. Konfigurasi Database (config/db.js)
- Membuat koneksi ke PostgreSQL menggunakan library `pg`
- Konfigurasi connection pool untuk performa optimal
- Implementasi fungsi query yang reusable
- Error handling untuk koneksi database

**Aktivitas:**
- Setup connection string
- Testing koneksi database
- Membuat fungsi helper untuk query

#### 2. Pembuatan Models (models/)
Membuat file model untuk setiap entitas:

**authorModel.js:**
- Query GET semua penulis (dengan sorting)
- Query POST tambah penulis
- Validasi data

**categoryModel.js:**
- Query GET semua kategori
- Query POST tambah kategori

**bookModel.js:**
- Query GET semua buku dengan JOIN ke authors dan categories
- Query POST tambah buku dengan validasi foreign key
- Menangani initial value available_copies = total_copies

**memberModel.js:**
- Query GET semua anggota
- Query POST tambah anggota

**loanModel.js:**
- Query GET semua transaksi peminjaman dengan detail buku dan anggota
- Query POST membuat peminjaman baru + UPDATE stok buku
- Query PUT menyelesaikan peminjaman + UPDATE stok buku
- JOIN queries untuk mengambil relasi data

#### 3. Pembuatan Controllers (controllers/)
Mengimplementasikan business logic untuk setiap endpoint:

**authorController.js:**
- Handle GET/POST requests untuk authors
- Error handling dan response formatting

**categoryController.js:**
- Handle GET/POST requests untuk categories
- Validasi kategori unik

**bookController.js:**
- Handle GET books dengan JOIN query
- Validasi book creation dengan foreign key check
- Response dengan detail author dan category

**memberController.js:**
- Handle GET/POST members
- Validasi email dan data anggota

**loanController.js:**
- Handle GET loans dengan JOIN ke books dan members
- Handle POST loan creation dengan transaction untuk update stok
- Handle PUT loan completion dengan return logic dan stok recovery
- Validasi ketersediaan stok buku

#### 4. Pembuatan Routes (routes/)
Setup routing untuk semua endpoints:

**authorRoutes.js, categoryRoutes.js, bookRoutes.js, memberRoutes.js, loanRoutes.js:**
- Define GET, POST, PUT verbs
- Link ke controllers
- Setup path parameters
- Middleware configuration

#### 5. Setup Server Utama (src/index.js)
- Inisialisasi Express app
- Konfigurasi middleware (CORS, JSON parsing)
- Mount route groups
- Error handling global
- Start server di port 3000

**Fitur yang diimplementasikan:**
- CORS middleware untuk allow cross-origin requests
- JSON body parser
- Route grouping untuk API organization

#### 6. Pembuatan Frontend (index.html)
- Design interface untuk menampilkan daftar buku
- Membuat form peminjaman buku
- Implementasi fetch API untuk komunikasi dengan backend
- Real-time update stok buku
- Message notification system (success/error)
- CSS styling untuk UX yang baik
- Validasi form client-side

**Aktivitas:**
- HTML structure
- CSS grid layout untuk book cards
- JavaScript async functions (loadBooks, handleLoan)
- Error handling frontend
- Auto-refresh data setelah transaksi

#### 7. Configuration Files
- **package.json** - Dependency management dan scripts
- **.env** - Environment variables (DB credentials, PORT)
- **vercel.json** - Deployment configuration

### C. Tahap Testing & Quality Assurance
1. **API Testing**
   - Testing setiap endpoint dengan Postman/curl
   - Validasi response format JSON
   - Testing error scenarios
   - Testing CRUD operations

2. **Database Testing**
   - Verifikasi relasi dan constraints
   - Testing cascading operations (stok update)
   - Testing JOIN queries

3. **Integration Testing**
   - Testing frontend ke backend communication
   - Full workflow: view books → loan → return update

### D. Tahap Deployment
- Deploy backend ke Vercel
- Configure environment variables di production
- Testing aplikasi di production environment

---

## VII. HASIL IMPLEMENTASI DAN OUTPUT

### A. Endpoints dan Fungsionalitas yang Dihasilkan

| Method | Endpoint | Fungsionalitas |
|--------|----------|---|
| GET | `/` | Health check server |
| GET | `/api/authors` | Ambil semua penulis (sorted by name) |
| POST | `/api/authors` | Tambah penulis baru |
| GET | `/api/categories` | Ambil semua kategori |
| POST | `/api/categories` | Tambah kategori baru |
| GET | `/api/books` | Ambil buku + detail author & category (JOIN) |
| POST | `/api/books` | Tambah buku baru |
| GET | `/api/members` | Ambil semua anggota |
| POST | `/api/members` | Daftar anggota baru |
| GET | `/api/loans` | Ambil riwayat peminjaman |
| POST | `/api/loans` | Buat transaksi peminjaman (kurang stok) |
| PUT | `/api/loans/:id` | Kembalikan buku (tambah stok) |

### B. File-File yang Dihasilkan

```
smart-library-api-main/
├── src/
│   ├── index.js (Server utama)
│   ├── config/
│   │   └── db.js (Database connection)
│   ├── models/
│   │   ├── authorModel.js
│   │   ├── categoryModel.js
│   │   ├── bookModel.js
│   │   ├── memberModel.js
│   │   └── loanModel.js
│   ├── controllers/
│   │   ├── authorController.js
│   │   ├── categoryController.js
│   │   ├── bookController.js
│   │   ├── memberController.js
│   │   └── loanController.js
│   └── routes/
│       ├── authorRoutes.js
│       ├── categoryRoutes.js
│       ├── bookRoutes.js
│       ├── memberRoutes.js
│       └── loanRoutes.js
├── index.html (Frontend interface)
├── package.json (Dependencies)
├── README.md (API documentation)
├── vercel.json (Deployment config)
└── .env (Environment variables)
```

### C. Fitur Aplikasi yang Berfungsi
✅ CRUD Operations untuk Authors  
✅ CRUD Operations untuk Categories  
✅ CRUD Operations untuk Books dengan relasi  
✅ CRUD Operations untuk Members  
✅ Create & Update Loans dengan stok tracking  
✅ JOIN queries untuk relational data  
✅ Frontend interface untuk book browsing dan borrowing  
✅ Real-time stok update  
✅ Error handling dan validation  
✅ CORS setup untuk cross-origin requests  

---

## VIII. TANTANGAN DAN SOLUSI

### Tantangan 1: Relasi Database yang Kompleks
**Masalah:** Mengelola multiple foreign keys dan JOIN queries  
**Solusi:** 
- Merancang schema dengan jelas terlebih dahulu
- Testing query di database client terlebih dahulu sebelum di-integrate ke code
- Membuat helper query reusable di model

### Tantangan 2: Stok Buku Tracking
**Masalah:** Memastikan stok buku konsisten saat peminjaman dan pengembalian  
**Solusi:**
- Implementasi UPDATE query di controller saat POST loan
- Implementasi UPDATE query di controller saat PUT loan completion
- Validasi stok sebelum memproses peminjaman

### Tantangan 3: CORS dan Cross-Domain Communication
**Masalah:** Frontend tidak bisa mengakses API karena CORS restrictions  
**Solusi:**
- Implementasi CORS middleware di Express
- Set header Allow-Origin ke "*"
- Handle OPTIONS preflight requests

### Tantangan 4: Error Handling dan Validation
**Masalah:** Banyak skenario error yang perlu ditangani  
**Solusi:**
- Validasi input di controller sebelum query database
- Try-catch block untuk error handling
- Return consistent error response format dengan status code

---

## IX. PEMBELAJARAN DAN INSIGHT

### 1. Architectural Patterns
- Memahami MVC pattern dan implementasinya di Node.js
- Pemisahan concern antara models, controllers, dan routes
- Pentingnya middleware untuk cross-cutting concerns

### 2. Database Design
- Normalisasi database dan penghindaran redundansi
- Foreign key relationships untuk data integrity
- Query optimization dengan indexing dan JOIN

### 3. REST API Best Practices
- Penggunaan HTTP methods yang tepat (GET/POST/PUT/DELETE)
- Stateless communication
- Consistent response format
- Proper HTTP status codes

### 4. Frontend-Backend Integration
- Asynchronous programming dengan fetch API
- Error handling di client side
- User feedback dengan message notifications

### 5. Development Workflow
- Version control dan project organization
- Environment configuration management
- Testing dan debugging techniques
- Deployment process

---

## X. KESIMPULAN

Kerja Praktik ini telah menghasilkan sistem Smart Library API yang fungsional dan terintegrasi penuh, mendemonstrasikan kemampuan dalam:

1. **Database Design & Management**
   - Merancang schema relasional dengan 5 tabel dan multiple relationships
   - Implementasi CRUD operations dan advanced queries (JOIN)
   - Manajemen data integrity dengan constraints

2. **Backend Development**
   - Membangun RESTful API dengan 11 endpoints fungsional
   - Implementasi business logic dan validation
   - Error handling yang robust

3. **Frontend Development**
   - Membuat interactive user interface
   - Komunikasi asynchronous dengan backend
   - User experience yang baik dengan feedback system

4. **Full-Stack Integration**
   - Integrasi frontend dan backend secara seamless
   - CORS configuration untuk cross-origin requests
   - End-to-end workflow dari data retrieval hingga transaction completion

Melalui proyek ini, pemahaman mendalam tentang pengembangan aplikasi web modern telah tercapai, dengan penerapan konsep-konsep penting dalam Software Engineering, Database Management, dan Web Development.

---

## XI. REKOMENDASI PENGEMBANGAN LEBIH LANJUT

1. **Authentication & Authorization**
   - Implementasi JWT untuk security
   - Role-based access control

2. **Advanced Features**
   - Late fee calculation untuk buku overdue
   - Book reservation system
   - Member history dan recommendation

3. **Performance Optimization**
   - Database indexing
   - Caching mechanism
   - Pagination untuk data lists

4. **Testing**
   - Unit tests dengan Jest
   - Integration tests
   - API documentation dengan Swagger

5. **Monitoring & Logging**
   - Application logging
   - Error tracking
   - Performance monitoring

---

**Dokumen ini merupakan deskripsi resmi kegiatan Kerja Praktik untuk Sistem Basis Data semester 6.**

*Tanggal Pembuatan: April 2026*
