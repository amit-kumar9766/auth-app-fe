import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import { FeedPage } from "./components/pages/FeedPage";
import { SignIn } from "./components/pages/SignIn";
import { SignUp } from "./components/pages/SignUp";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route
          path="/signin"
          element={
            isAuthenticated ? <Navigate to="/feed" replace /> : <SignIn />
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? <Navigate to="/feed" replace /> : <SignUp />
          }
        />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </div>
  );
}

export default App;
