/**
 * SignInPage uses SignInForm
 */

import React, { useState } from "react";
import { Header } from "../layout/Header";
import { SignInForm } from "../auth/SignInForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const SignIn: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const handleSignIn = (email: string, password: string) => {
    try {
      login(email, password);
      navigate("/feed");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    }
  };

  return (
    <div>
      <Header onSignInClick={() => {}} />
      <div className="h-screen-minus-68 flex flex-col justify-center bg-white">
        <SignInForm
          onSubmit={handleSignIn}
          onSwitchToSignUp={() => navigate("/signup")}
          onErrorClear={() => setError("")}
          loading={false}
          error={error}
        />
      </div>
    </div>
  );
};
