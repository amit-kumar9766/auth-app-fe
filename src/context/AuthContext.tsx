/**
 * AuthContext
 * Provides authentication context using localStorage to simulate a user system.
 * Handles user signup, login, logout, and persists session across reloads.
 * For assignment only. Do NOT use localStorage to store passwords in real applications.
 */

import React, { createContext, useContext, useState, useEffect } from "react";
import { preloadUsers } from "../utils/helpers";

export interface User {
  id: string;
  avatar?: string;
  name?: string;
  email: string;
  password?: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = () => {
      preloadUsers();
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user && user.id && user.email) {
          setCurrentUser(user);
        } else {
          localStorage.removeItem("currentUser");
        }
      }
    };

    initializeAuth();
  }, []);

  const signup = (email: string, password: string) => {
    const storedUsers = JSON.parse(
      localStorage.getItem("users") || "[]"
    ) as User[];
    if (
      storedUsers.find((u) => u.email.toLowerCase() === email.toLowerCase())
    ) {
      throw new Error("An account with this email already exists");
    }
    const newUser: User = {
      id: crypto.randomUUID(),
      avatar: "",
      email: email.toLowerCase().trim(),
      password,
      name: email,
    };

    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setCurrentUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
  };

  const login = (email: string, password: string) => {
    const storedUsers = JSON.parse(
      localStorage.getItem("users") || "[]"
    ) as User[];
    const user = storedUsers.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!user) {
      throw new Error("Invalid email or password");
    }
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const isAuthenticated = currentUser !== null;

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
