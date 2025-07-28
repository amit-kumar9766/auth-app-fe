/**
 * SignUpPage uses SignUpForm
 */
import React, { useState } from "react";
import { Header } from "../layout/Header";
import { SignUpForm } from "../auth/SignUpForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const SignUp: React.FC = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const handleSignUp = (email: string, password: string) => {
    try {
      signup(email, password);
      navigate("/feed");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
    }
  };

  return (
    <div>
      <Header onSignInClick={() => {}} />
      <div className="h-screen-minus-68 flex flex-col justify-center bg-white">
        <SignUpForm
          onSubmit={handleSignUp}
          onSwitchToSignIn={() => {
            navigate("/signin");
          }}
          onErrorClear={() => setError("")}
          loading={false}
          error={error}
        />
      </div>
    </div>
  );
};
