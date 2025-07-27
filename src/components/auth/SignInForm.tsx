/**
 * SignInForm
 */
import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { type AuthFormData } from "../../types";

interface SignInFormProps {
  onSubmit: (email: string, password: string) => void;
  onSwitchToSignUp?: () => void;
  loading?: boolean;
  error?: string;
}

export const SignInForm: React.FC<SignInFormProps> = ({
  onSubmit,
  onSwitchToSignUp,
  loading = false,
  error: externalError,
}) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<AuthFormData>>({});
  const [submitError, setSubmitError] = useState<string>("");

  const displayError = externalError || submitError;

  const validateForm = (): boolean => {
    const newErrors: Partial<AuthFormData> = {};

    if (!formData.email) {
      newErrors.email = "Email or username is required";
    } else if (
      !/\S+@\S+\.\S+/.test(formData.email) &&
      formData.email.length < 3
    ) {
      newErrors.email = "Enter a valid email or username";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    if (validateForm()) {
      onSubmit(formData.email, formData.password);
    }
  };

  const updateField = (field: keyof AuthFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitError) {
      setSubmitError("");
    }
  };

  return (
    <div className=" bg-black-3 rounded-3xl shadow-lg p-3 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="p-8 bg-white rounded-3xl">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Sign in to continue
          </h2>
          <p className="text-sm text-gray-500">
            Sign in to access all the features on this app
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {displayError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{displayError}</p>
            </div>
          )}

          <Input
            label="Email or username"
            type="text"
            placeholder="Enter your email or username"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            error={errors.email}
            disabled={loading}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => updateField("password", e.target.value)}
            error={errors.password}
            disabled={loading}
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
          >
            Sign In
          </Button>
        </form>
      </div>
      <p className="text-center text-sm text-gray-500 mt-4">
        Do not have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToSignUp}
          className="text-blue-600 hover:underline font-medium"
          disabled={loading}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};
