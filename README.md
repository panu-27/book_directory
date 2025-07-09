
# 📚 Book Manager App

A full-stack Book Management web application built with **Node.js**, **Express**, **MongoDB**, **EJS**, and styled using **Tailwind CSS**. Users can perform CRUD operations (Create, Read, Update, Delete) on books, including image uploads.

---

## 🌟 Features

- 📖 Add, view, update, and delete books
- 🖼️ Upload and display book cover images
- 🎨 Clean and responsive UI with Tailwind CSS
- 🗃️ MongoDB integration for persistent data storage
- 🛣️ RESTful routing
- 📦 Form handling with file upload support

---

## 🚀 Tech Stack

- **Frontend**: EJS templates, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Other**: Multer (for image uploads), dotenv

---

## 📷 Screenshots

_Add screenshots of the UI here if possible for better presentation._

---

## 📁 Folder Structure

Since the app is in the root directory (not nested in `src/`), here's a breakdown:

```
📦 Book-Manager/
├── 📂 models/         # Mongoose schema for Book
├── 📂 routes/         # Express routes for books
├── 📂 views/          # EJS templates
├── 📂 uploads/        # Uploaded images
├── 📄 app.js          # Main server file
├── 📄 .env            # Environment variables (e.g., MongoDB URI)
├── 📄 .gitignore
├── 📄 README.md       # This file
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/book-manager.git
   cd book-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file in root**
   ```
   MONGO_URL=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the app**
   ```bash
   node app.js
   ```

5. **Visit in browser**
   ```
   http://localhost:3000
   ```

---

## 🛠️ Scripts (optional if added in package.json)

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

---

## 🙌 Author

**Pranav Zinjad**  
📧 pranavzinjad27@gmail.com  
🌐 [GitHub](https://github.com/panu-27)
 PortFolio : [htpps://pranavzinjad.vercel.app](https://pranavzinjad.vercel.app/)
---

## 📌 Notes

> This app was created for internship submission purposes and demonstrates proficiency in full-stack web development using the MERN stack concepts (without React). It includes file handling, Tailwind-based design, MongoDB operations, and a functional RESTful backend.

---
