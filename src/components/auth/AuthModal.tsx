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

  const handleSignIn = (email: string, password: string) => {
      login(email, password);
      onClose();
  };

  const handleSignUp = (email: string, password: string) => {
      signup(email, password);
      onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {mode === "signin" ? (
        <SignInForm
          onSubmit={handleSignIn}
          onSwitchToSignUp={() => {
            setMode("signup");
          }}
          loading={false}
        />
      ) : (
        <SignUpForm
          onSubmit={handleSignUp}
          onSwitchToSignIn={() => {
            setMode("signin");
          }}
          loading={false}
        />
      )}
    </Modal>
  );
};
