import React from "react";
import { LogIn, ArrowLeft } from "lucide-react";
import { Button } from "../ui/Button";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { APP_NAME } from "../../utils/constants";

interface HeaderProps {
  onSignInClick: (isLoginClick: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSignInClick }) => {
  const { currentUser: user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthPage =
    location.pathname === "/signin" || location.pathname === "/signup";
  return (
    <div className="bg-white px-6 py-4">
      <div className=" mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">f</span>
          </div>
          <span className="font-medium">{APP_NAME}</span>
        </div>

        {isAuthPage ? (
          <Button variant="ghost" size="sm" onClick={() => navigate("/feed")}>
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        ) : isAuthenticated ? (
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">
              Welcome, {user?.email}
            </span>
            <Button variant="ghost" size="sm" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <Button variant="ghost" size="sm" onClick={() => onSignInClick(true)}>
            Login
            <LogIn className="w-6 h-6" />
          </Button>
        )}
      </div>
    </div>
  );
};
