import type { User } from "../context/AuthContext";

export const preloadUsers = () => {
  const defaultUsers: User[] = [
    {
      id: "1",
      name: "Demo user",
      avatar: "https://i.pravatar.cc/150?img=1",
      email: "demo@example.com",
      password: "password123",
    },
    {
      id: "2",
      name: "Test user",
      avatar: "https://i.pravatar.cc/150?img=3",
      email: "test@user.com",
      password: "testpass",
    },
  ];
  localStorage.setItem("users", JSON.stringify(defaultUsers));
};
