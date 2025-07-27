/**
 * SignUpPage uses SignUpForm
 */
import React from "react";
import { Header } from "../layout/Header";
import { SignUpForm } from "../auth/SignUpForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const SignUp: React.FC = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (email: string, password: string) => {
    signup(email, password);
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
          loading={false}
         
        />
      </div>
    </div>
  );
};
