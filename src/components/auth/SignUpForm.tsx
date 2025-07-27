/**
 * SignUpForm
 */
import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import type { AuthFormData } from "../../types";

interface SignUpFormData extends AuthFormData {
  confirmPassword: string;
}

interface SignUpFormProps {
  onSubmit: (email: string, password: string) => void;
  onSwitchToSignIn?: () => void;
  loading?: boolean;
  error?: string;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
  onSubmit,
  onSwitchToSignIn,
  loading = false,
}) => {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<SignUpFormData>>({});
  const [submitError, setSubmitError] = useState<string>("");

  const displayError = submitError;

  const validateForm = (): boolean => {
    const newErrors: Partial<SignUpFormData> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please repeat your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (validateForm()) {
      onSubmit(formData.email.toLowerCase().trim(), formData.password);
    }
  };

  const updateField = (field: keyof SignUpFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitError) {
      setSubmitError("");
    }
  };

  return (
    <div className="bg-black-3 rounded-lg shadow-lg p-8 w-full max-w-md mx-auto rounded-3xl">
      {/* Header */}
      <div className="p-8 bg-white rounded-3xl">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Create an account to continue
          </h2>
          <p className="text-sm text-gray-500">
            Create an account to access all the features on this app
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {displayError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{displayError}</p>
            </div>
          )}
          
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
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

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Repeat your password"
            value={formData.confirmPassword}
            onChange={(e) => updateField("confirmPassword", e.target.value)}
            error={errors.confirmPassword}
            disabled={loading}
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
          >
            Sign Up
          </Button>
        </form>
      </div>
      <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToSignIn}
          className="text-blue-600 hover:underline font-medium"
          disabled={loading}
        >
          Sign In
        </button>
      </p>
    </div>
  );
};
