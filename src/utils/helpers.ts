import type { User } from "../context/AuthContext";

export const preloadUsers = () => {
  const defaultUsers: User[] = [
    {
      id: "1",
      name: "Alice Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      email: "demo@example.com",
      password: "password123",
    },
    {
      id: "3",
      name: "Carol Davis",
      avatar: "https://i.pravatar.cc/150?img=3",
      email: "carol@example.com",
      password: "password123",
    },
  ];
  localStorage.setItem("users", JSON.stringify(defaultUsers));
};
