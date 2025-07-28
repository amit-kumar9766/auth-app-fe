/**
 * AuthModal - A reusable modal for user authentication.
 * Switches between SignIn and SignUp modes.
 */

import React, { useState } from "react";
import { Modal } from "../ui/Modal";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
import { useAuth } from "../../context/AuthContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: "signin" | "signup";
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultMode = "signin",
}) => {
  const [mode, setMode] = useState<"signin" | "signup">(defaultMode);
  const { login, signup } = useAuth();
  const [error, setError] = useState<string>("");

  const handleSignIn = (email: string, password: string) => {
    try {
      login(email, password);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  };

  const handleSignUp = (email: string, password: string) => {
    try {
      signup(email, password);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {mode === "signin" ? (
        <SignInForm
          onSubmit={handleSignIn}
          onSwitchToSignUp={() => {
            setMode("signup");
            setError("");
          }}
          onErrorClear={() => setError("")}
          loading={false}
          error={error}
        />
      ) : (
        <SignUpForm
          onSubmit={handleSignUp}
          onSwitchToSignIn={() => {
            setMode("signin");
            setError("");
          }}
          onErrorClear={() => setError("")}
          loading={false}
          error={error}
        />
      )}
    </Modal>
  );
};
