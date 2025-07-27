export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  author: User;
  content?: string;
  timestamp?: string;
  likes?: number;
  comments: number;
  emoji?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
}

export interface AuthFormData {
  email: string;
  password: string;
}

export type PageType = "feed" | "signin" | "signup";

export interface PostComposerState {
  content: string;
  isPublishing: boolean;
}

// Add error handling types
export interface ApiError {
  message: string;
  code?: string;
}

export interface AuthError {
  message: string;
  field?: 'email' | 'password';
}

// Add action types for better type safety
export type PostAction = 'like' | 'comment' | 'share' | 'delete';

export interface PostActionHandler {
  (action: PostAction, postId: string): void;
}
