/**
 * Feed Page
 */

import React, { useState } from "react";
import { Header } from "../layout/Header";
import { PostComposer } from "../post/PostComposer";
import { PostCard } from "../post/PostCard";
import { AuthModal } from "../auth/AuthModal";
import { usePosts } from "../../hooks/usePosts";
import { useAuth } from "../../context/AuthContext";
import { initialPosts } from "../../utils/mockData";
import { useNavigate } from "react-router-dom";
import type { User } from "../../types";

export const FeedPage: React.FC = () => {
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { currentUser } = useAuth();
  const { posts, addPost } = usePosts(currentUser?.id || null);
  const handlePublishPost = (content: string) => {
    if (!currentUser) {
      handleUnauthenticatedAction();
      return;
    }
    addPost(content, currentUser as User);
  };

  const handleUnauthenticatedAction = (isLoginClick = false) => {
    if (isLoginClick) {
      navigate("/signin");
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onSignInClick={handleUnauthenticatedAction} />
      <main className="max-w-xl mx-auto p-6">
        <PostComposer
          onPublish={handlePublishPost}
          onUnauthenticatedAction={handleUnauthenticatedAction}
        />
        <div className="space-y-6 mt-6">
          {[...posts, ...initialPosts].map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </div>
  );
};
