# Feed App

A modern React + TypeScript social media feed application featuring user authentication, post creation, and interactive social features. Built with React Context for state management and localStorage for session persistence.

> ⚠️ **Disclaimer:** This project is for learning and demonstration purposes only. Do **not** use localStorage to store passwords in real-world applications.

## ✨ Features

- **Authentication System**
  - User signup & login
  - Session persistence across browser reloads
  - Protected routes
- **Social Feed**
  - Create and view posts
  - Like and comment on posts
  - User interactions
- **Modern UI**
  - Responsive design with Tailwind CSS
  - Clean and intuitive interface
  - Modal components for enhanced UX

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript
- **Routing:** React Router DOM v7
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **State Management:** React Context API
- **Build Tool:** Vite
- **Storage:** localStorage (browser)

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd frontend-assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the application.

## 📝 Available Scripts

- `npm run dev` - Start development server
## 🔐 Authentication Flow

1. Users can sign up with email and password
2. Login credentials are validated against stored users
3. Authentication state is managed via React Context
4. Sessions persist across browser reloads using localStorage
5. Protected routes redirect unauthenticated users to sign-in

## 📁 Project Structure

```
src/
├── components/
│   ├── auth/          # Authentication components
│   ├── layout/        # Layout components
│   ├── pages/         # Page components
│   ├── post/          # Post-related components
│   └── ui/            # Reusable UI components
├── context/           # React Context providers
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── utils/             # Utility functions and mock data
└── assets/            # Static assets
```