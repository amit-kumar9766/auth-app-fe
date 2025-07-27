/**
 * usePosts Hook:
 * This custom React hook manages posts for a specific user.
 * - Loading initial posts from localStorage based on the user ID.
 * - Setting an empty post list if no user is provided.
 * - Providing an `addPost` function to create and persist a new post.
 */

import { useEffect, useState } from "react";
import { type Post, type User } from "../types";
import {
  initialPosts,
  getRandomEmoji,
  formatTimestamp,
} from "../utils/mockData";

const getStorageKey = (userId: string | number | null) => `posts_${userId}`;

export const usePosts = (userId: string | number | null) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!userId) {
      setPosts([]);
      return;
    }

    const saved = localStorage.getItem(getStorageKey(userId));
    if (saved) {
      setPosts(JSON.parse(saved));
    } else {
      setPosts(initialPosts);
      localStorage.setItem(getStorageKey(userId), JSON.stringify([]));
    }
  }, [userId]);

  const addPost = (content: string, author: User) => {
    const newPost: Post = {
      id: crypto.randomUUID(),
      author,
      content,
      timestamp: formatTimestamp(new Date()),
      likes: 0,
      comments: 0,
      emoji: getRandomEmoji(),
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);

    if (userId) {
      localStorage.setItem(getStorageKey(userId), JSON.stringify(updatedPosts));
    }
  };

  return {
    posts,
    addPost,
  };
};
