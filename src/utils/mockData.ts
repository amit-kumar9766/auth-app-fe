import { type User, type Post } from "../types";

export const initialPosts: Post[] = [
  {
    id: "1",
    author: {
      id: "3",
      name: "Theresa Webb",
      email: "theresa@example.com",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: "5 mins ago",
    likes: 12,
    comments: 3,
    emoji: "😊",
  },
  {
    id: "2",
    author: {
      id: "4",
      name: "John Doe",
      email: "john@example.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: "5 mins ago",
    likes: 8,
    comments: 1,
    emoji: "👋",
  },
  {
    id: "3",
    author: {
      id: "5",
      name: "Jane Doe",
      email: "jane@example.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    timestamp: "5 mins ago",
    likes: 15,
    comments: 7,
    emoji: "💭",
  },
];

// Additional mock users for variety
export const additionalMockUsers: User[] = [
  {
    id: "6",
    name: "Alice Johnson",
    email: "alice@example.com",
    avatar:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "7",
    name: "Bob Smith",
    email: "bob@example.com",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "8",
    name: "Carol Davis",
    email: "carol@example.com",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face",
  },
];

// Sample emojis for posts
export const postEmojis = [
  "😊",
  "👋",
  "💭",
  "🎉",
  "🔥",
  "💡",
  "❤️",
  "🚀",
  "✨",
  "🌟",
];

// Helper function to get random emoji
export const getRandomEmoji = (): string => {
  return postEmojis[Math.floor(Math.random() * postEmojis.length)];
};

// Helper function to format timestamp
export const formatTimestamp = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMins = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInMins < 1) return "now";
  if (diffInMins < 60)
    return `${diffInMins} min${diffInMins > 1 ? "s" : ""} ago`;
  if (diffInHours < 24)
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  if (diffInDays < 7)
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;

  return date.toLocaleDateString();
};
