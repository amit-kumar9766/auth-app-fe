export const APP_NAME = "foo-rum";

export const TEST_ACCOUNTS = {
  DEMO: {
    email: "demo@example.com",
    password: "password123",
  },
  TEST: {
    email: "test@user.com",
    password: "testpass",
  },
} as const;

export const ROUTES = {
  FEED: "/feed",
  SIGNIN: "/signin",
  SIGNUP: "/signup",
} as const;


// Local storage keys
export const STORAGE_KEYS = {
  USERS: "users",
  CURRENT_USER: "currentUser",
  POSTS_PREFIX: "posts_",
} as const;

// Error messages
export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: "Invalid email or password",
  EMAIL_EXISTS: "Email already registered",
  NETWORK_ERROR: "Network error. Please try again.",
  UNKNOWN_ERROR: "An unexpected error occurred",
} as const;
