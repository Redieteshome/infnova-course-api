# INFNOVA Course API – NestJS Mini Challenge

This project is a simple Course Management API built using NestJS and TypeScript as part of the INFNOVA Backend Internship challenge.

It demonstrates clean architecture, DTO validation, proper HTTP status handling, and in-memory data storage.

---

## 🚀 Features

- GET /courses → Retrieve all courses
- GET /courses/:id → Retrieve a single course (404 if not found)
- POST /courses → Create a new course (with validation)
- PUT /courses/:id → Update an existing course
- DELETE /courses/:id → Delete a course
- DTO validation using class-validator
- Proper HTTP status codes (200, 201, 400, 404)
- Swagger API documentation available at /docs
- In-memory data storage (no database required)

---

## 🛠 Tech Stack

- NestJS
- TypeScript
- class-validator
- Swagger (OpenAPI)

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repository-link>
cd infnova-course-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

```bash
npm run start:dev
```

The server will start at:

```
http://localhost:3000
```

---

## 📖 API Documentation

Swagger documentation is available at:

```
http://localhost:3000/docs
```

---

## 🧪 Example Request (POST /courses)

```json
{
  "title": "Intro to HTML",
  "level": "Beginner",
  "duration": "4 weeks"
}
```

All fields are required. Validation errors return HTTP 400.

---

## 📌 Notes

- Data is stored in memory for simplicity.
- Validation is handled using DTOs and class-validator.
- Proper HTTP exceptions are used for error handling.
- The project follows a clean modular structure (module / controller / service).

---

## 👩🏽‍💻 Author

Rediet Teshome  
Backend Internship Candidate – INFNOVA Technologies
