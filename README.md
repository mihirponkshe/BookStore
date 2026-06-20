# BookStore

A modern, full-stack Book Store web application built using the MERN stack (MongoDB, Express, React, Node.js). It offers a premium user interface with light/dark mode support, live inventory management, user authentication, and a complete shopping cart system.

## 🌐 Deployment
- **Frontend:** Deployed on Vercel
- **Backend:** Deployed on Render
- **Database:** Hosted on MongoDB Atlas

## 🚀 Features

### Frontend (React + Vite + Tailwind CSS + DaisyUI)
- **Modern UI/UX**: Stunning UI with gradient accents, smooth transitions, and a fully responsive layout.
- **Dark/Light Mode**: Seamlessly switch between themes with a user-friendly toggle.
- **Global Shopping Cart**: Persists across page reloads using React Context and `localStorage`.
- **User Authentication**: Signup and Login modals/pages integrated with backend JWT/session handling.
- **Search Functionality**: A live search bar to quickly find books by title, author, or category.
- **Dynamic Book Details**: Deep dive into individual books with cover images, descriptions, and stock status.
- **User Profile & Orders**: Dedicated pages to view account details and purchase history.

### Backend (Node.js + Express + MongoDB)
- **RESTful API**: Clean API architecture managing Books, Users, and Orders.
- **Live Inventory Tracking**: `availableQuantity` of books dynamically decrements when a checkout/order is completed.
- **Seeding Script**: Includes a `seed.js` script to instantly populate the database with dummy book data.
- **Authentication**: Secure user storage and session validation.

## 🛠️ Tech Stack

**Client:** React, Vite, Tailwind CSS, DaisyUI, React Router DOM, Axios, React Hot Toast
**Server:** Node.js, Express, MongoDB, Mongoose, dotenv

## 💻 Installation & Setup

Follow these steps to run the application locally.

### 1. Clone the repository
```bash
git clone <repository-url>
cd BookStore
```

### 2. Setup the Backend
1. Open a terminal and navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Backend` directory and add your MongoDB connection string and port:
   ```env
   PORT=4001
   MongoDBURI="mongodb://127.0.0.1:27017/bookStore"
   ```
4. **(Optional)** Seed the database with initial books:
   ```bash
   node seed.js
   ```
5. Start the backend server:
   ```bash
   npm start
   ```

### 3. Setup the Frontend
1. Open a new terminal window and navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## 📂 Project Structure

```text
BookStore/
├── Backend/                 # Express backend
│   ├── controller/          # Route handlers (book, user, order)
│   ├── model/               # Mongoose schemas
│   ├── route/               # API routes
│   ├── index.js             # Main server entry point
│   └── seed.js              # Database seeding script
└── Frontend/                # React frontend
    ├── src/
    │   ├── api/             # Axios instance config
    │   ├── Components/      # Reusable UI components & pages
    │   ├── context/         # React context (Auth, Cart)
    │   ├── home/            # Home page specific components
    │   ├── courses/         # Course page wrapper
    │   ├── App.jsx          # Main application routing
    │   └── index.css        # Tailwind global styles
    └── package.json
```
