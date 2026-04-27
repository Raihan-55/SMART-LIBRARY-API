# 🧪 CURL Testing Commands - Smart Library API

File ini berisi curl commands untuk testing semua API endpoints Smart Library tanpa perlu Postman.

---

## 📚 AUTHORS ENDPOINTS

### 1️⃣ Get All Authors
```bash
curl -X GET http://localhost:3000/api/authors
```

### 2️⃣ Search Authors by Name
```bash
curl -X GET "http://localhost:3000/api/authors?name=Haruki"
```

### 3️⃣ Get Author by ID
```bash
curl -X GET http://localhost:3000/api/authors/{author-id}
```

### 4️⃣ Create Author
```bash
curl -X POST http://localhost:3000/api/authors \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Haruki Murakami",
    "nationality": "Japan"
  }'
```

### 5️⃣ Update Author
```bash
curl -X PUT http://localhost:3000/api/authors/{author-id} \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Haruki Murakami (Updated)",
    "nationality": "Japan"
  }'
```

### 6️⃣ Delete Author
```bash
curl -X DELETE http://localhost:3000/api/authors/{author-id}
```

---

## 📂 CATEGORIES ENDPOINTS

### 1️⃣ Get All Categories
```bash
curl -X GET http://localhost:3000/api/categories
```

### 2️⃣ Search Categories by Name
```bash
curl -X GET "http://localhost:3000/api/categories?name=Fiction"
```

### 3️⃣ Get Category by ID
```bash
curl -X GET http://localhost:3000/api/categories/{category-id}
```

### 4️⃣ Create Category
```bash
curl -X POST http://localhost:3000/api/categories \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Science Fiction"
  }'
```

### 5️⃣ Update Category
```bash
curl -X PUT http://localhost:3000/api/categories/{category-id} \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Science Fiction (Updated)"
  }'
```

### 6️⃣ Delete Category
```bash
curl -X DELETE http://localhost:3000/api/categories/{category-id}
```

---

## 📖 BOOKS ENDPOINTS

### 1️⃣ Get All Books
```bash
curl -X GET http://localhost:3000/api/books
```

### 2️⃣ Search Books by Title
```bash
curl -X GET "http://localhost:3000/api/books?title=Norwegian"
```

### 3️⃣ Get Book by ID
```bash
curl -X GET http://localhost:3000/api/books/{book-id}
```

### 4️⃣ Create Book
```bash
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "isbn": "978-0451524935",
    "title": "Norwegian Wood",
    "author_id": "author-id-here",
    "category_id": "category-id-here",
    "total_copies": 5
  }'
```

### 5️⃣ Update Book
```bash
curl -X PUT http://localhost:3000/api/books/{book-id} \
  -H "Content-Type: application/json" \
  -d '{
    "isbn": "978-0451524935",
    "title": "Norwegian Wood (Updated)",
    "author_id": "author-id-here",
    "category_id": "category-id-here",
    "total_copies": 10
  }'
```

### 6️⃣ Delete Book
```bash
curl -X DELETE http://localhost:3000/api/books/{book-id}
```

---

## 👥 MEMBERS ENDPOINTS

### 1️⃣ Get All Members
```bash
curl -X GET http://localhost:3000/api/members
```

### 2️⃣ Get Member by ID
```bash
curl -X GET http://localhost:3000/api/members/{member-id}
```

### 3️⃣ Register Member
```bash
curl -X POST http://localhost:3000/api/members \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "John Doe",
    "email": "john.doe@example.com",
    "member_type": "Regular"
  }'
```

### 4️⃣ Update Member
```bash
curl -X PUT http://localhost:3000/api/members/{member-id} \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "John Doe (Updated)",
    "email": "john.doe.updated@example.com",
    "member_type": "Premium"
  }'
```

### 5️⃣ Delete Member
```bash
curl -X DELETE http://localhost:3000/api/members/{member-id}
```

---

## 💳 LOANS ENDPOINTS

### 1️⃣ Get All Loans
```bash
curl -X GET http://localhost:3000/api/loans
```

### 2️⃣ Get Loan by ID
```bash
curl -X GET http://localhost:3000/api/loans/{loan-id}
```

### 3️⃣ Create Loan (Borrow Book)
```bash
curl -X POST http://localhost:3000/api/loans \
  -H "Content-Type: application/json" \
  -d '{
    "book_id": "book-id-here",
    "member_id": "member-id-here",
    "due_date": "2026-05-04"
  }'
```

### 4️⃣ Return Loan (Return Book)
```bash
curl -X POST http://localhost:3000/api/loans/{loan-id}/return \
  -H "Content-Type: application/json"
```

---

## 🧪 TESTING WORKFLOW EXAMPLE

**Step 1: Create Author**
```bash
curl -X POST http://localhost:3000/api/authors \
  -H "Content-Type: application/json" \
  -d '{"name": "Haruki Murakami", "nationality": "Japan"}' \
  -w "\n"
# Copy author_id dari response
```

**Step 2: Create Category**
```bash
curl -X POST http://localhost:3000/api/categories \
  -H "Content-Type: application/json" \
  -d '{"name": "Fiction"}' \
  -w "\n"
# Copy category_id dari response
```

**Step 3: Create Book**
```bash
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{
    "isbn": "978-0451524935",
    "title": "Norwegian Wood",
    "author_id": "PASTE_AUTHOR_ID_HERE",
    "category_id": "PASTE_CATEGORY_ID_HERE",
    "total_copies": 5
  }' \
  -w "\n"
# Copy book_id dari response
```

**Step 4: Create Member**
```bash
curl -X POST http://localhost:3000/api/members \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "John Doe",
    "email": "john.doe@example.com",
    "member_type": "Regular"
  }' \
  -w "\n"
# Copy member_id dari response
```

**Step 5: Check Book Stock (before loan)**
```bash
curl -X GET http://localhost:3000/api/books/PASTE_BOOK_ID_HERE \
  -w "\n"
# Seharusnya available_copies = 5
```

**Step 6: Borrow Book**
```bash
curl -X POST http://localhost:3000/api/loans \
  -H "Content-Type: application/json" \
  -d '{
    "book_id": "PASTE_BOOK_ID_HERE",
    "member_id": "PASTE_MEMBER_ID_HERE",
    "due_date": "2026-05-04"
  }' \
  -w "\n"
# Copy loan_id dari response
```

**Step 7: Check Book Stock (after loan)**
```bash
curl -X GET http://localhost:3000/api/books/PASTE_BOOK_ID_HERE \
  -w "\n"
# Seharusnya available_copies = 4 (berkurang 1)
```

**Step 8: Return Book**
```bash
curl -X POST http://localhost:3000/api/loans/PASTE_LOAN_ID_HERE/return \
  -H "Content-Type: application/json" \
  -w "\n"
```

**Step 9: Check Book Stock (after return)**
```bash
curl -X GET http://localhost:3000/api/books/PASTE_BOOK_ID_HERE \
  -w "\n"
# Seharusnya available_copies = 5 (kembali ke semula)
```

---

## 🪟 Untuk Windows PowerShell User

Gunakan format berikut (ganti tanda kutip):

**Create Author:**
```powershell
$body = @{
    name = "Haruki Murakami"
    nationality = "Japan"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/api/authors" `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body $body
```

**Get All Books:**
```powershell
Invoke-WebRequest -Uri "http://localhost:3000/api/books" -Method GET
```

---

## 📊 Response Format

Semua response dalam format JSON:

**Success Response (201 Created):**
```json
{
  "id": "uuid-here",
  "name": "data-here",
  ...
}
```

**Success Message Response:**
```json
{
  "message": "Operasi berhasil!",
  "data": {...}
}
```

**Error Response (400/404/500):**
```json
{
  "error": "Deskripsi error"
}
```

---

## 🚀 Tips Command Line

**Format readable (pretty print JSON):**
```bash
# Linux/Mac
curl -X GET http://localhost:3000/api/books | jq

# Windows (perlu install jq atau gunakan | ConvertFrom-Json di PowerShell)
curl -X GET http://localhost:3000/api/books | ConvertFrom-Json | ConvertTo-Json
```

**Save response ke file:**
```bash
curl -X GET http://localhost:3000/api/books > books.json
```

**Show headers:**
```bash
curl -i http://localhost:3000/api/books
```

**Show verbose (debug):**
```bash
curl -v http://localhost:3000/api/books
```

---

**Created for Smart Library API Testing** 🚀

