# Project Name

A full-stack web application built with **Express.js** for backend and **React (Vite)** for frontend.

---

## 📂 Project Structure

```
.vite/deps          # Vite dependencies
express             # Express backend setup
models              # Database models
routes              # API routes
.env                # Environment variables
package-lock.json   # Dependency lockfile
package.json        # Backend dependencies
server.js           # Backend entry point

frontend/           # React frontend project
  public/           # Public assets
  src/              # Source code
    assets/         # Static assets (e.g., react.svg)
    component/      # Reusable components
      footer.jsx
      navbar.jsx
      servicecard.jsx
    css/            # Styling
      App.css
      index.css
    pages/          # Application pages
      about.jsx
      home.jsx
      payment.jsx
      service.jsx
    App.jsx          # Main App component
    index.js         # React entry point
    main.jsx
    vite-env.d.ts
  .env               # Frontend environment variables
  .gitignore
  README.md
  eslint.config.js   # ESLint configuration
  index.html         # Base HTML
  package-lock.json
  package.json       # Frontend dependencies
  tsconfig.app.json
  tsconfig.json
  tsconfig.node.json
  vite.config.ts     # Vite configuration
```

---

## 🚀 Features
- **Backend:** Express.js server with routes & models
- **Frontend:** React with Vite, modular components
- **Styling:** Custom CSS
- **Pages:** Home, About, Services, Payment
- **Reusable Components:** Navbar, Footer, Service Card
- **Environment Variables:** Secure configuration using `.env`

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone <repo-url>
cd <repo-folder>
```

### 2. Install backend dependencies
```bash
cd backend
npm install
```

### 3. Install frontend dependencies
```bash
cd frontend
npm install
```

### 4. Run backend
```bash
cd backend
npm start
```

### 5. Run frontend
```bash
cd frontend
npm run dev
```

---

## ⚙️ Environment Variables

Create `.env` files in both **backend** and **frontend** with required variables.

Example:
```env
PORT=5000
MONGO_URI=your_mongo_connection_string
VITE_API_URL=http://localhost:5000/api
```

---

## 📦 Scripts

### Backend
```bash
npm start       # Start backend server
```

### Frontend
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

---

## 🌐 Live Demo
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://kailashsatkuri-warangal.github.io/EcommercePaymentgateway_Razerpay/)

---

## 📜 License
This project is licensed under the **MIT License**.

