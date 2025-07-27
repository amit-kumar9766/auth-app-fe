/**
 * SignInPage uses SignInForm
 */

import React from "react";
import { Header } from "../layout/Header";
import { SignInForm } from "../auth/SignInForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const SignIn: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (email: string, password: string) => {
    login(email, password);
  };

  return (
    <div>
      <Header onSignInClick={() => {}} />
      <div className="h-screen-minus-68 flex flex-col justify-center bg-white">
        <SignInForm
          onSubmit={handleSignIn}
          onSwitchToSignUp={() => navigate("/signup")}
          loading={false}
        />
      </div>
    </div>
  );
};
