import React from "react";
import { type Post } from "../../types";
import { PostActions } from "./PostActions";

interface PostCardProps {
  post: Post;
  onAction?: (action: string, postId: string) => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onAction }) => {
  const handleAction = (action: string) => {
    if (onAction) {
      onAction(action, post.id);
    }
  };

  return (
    <div className="p-2 bg-black-3 rounded-2xl flex flex-col justify-center pb-4 ">
      <div className="bg-white border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
        <div className="flex items-start gap-4">
          <div className="flex flex-col">
            <div>
              <img
                src={post.author.avatar || "https://i.pravatar.cc/150?img=12"}
                alt={post.author.name}
                className="w-12 h-12 rounded-md object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://i.pravatar.cc/150?img=12";
                }}
                loading="lazy"
              />
            </div>
            <div className="mt-2">
              {post.emoji && <div className="text-2xl mb-2">{post.emoji}</div>}
            </div>
          </div>

          <div className="flex-1">
            <div className="font-semibold text-gray-900">
              {post?.author?.name || post.author.email}
            </div>
            <div className="text-sm text-gray-400">{post.timestamp}</div>

            <div className="mt-4">
              <p className="text-gray-800 leading-relaxed">{post.content}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <PostActions
          likes={post.likes}
          comments={post.comments}
          onLike={() => handleAction("like")}
          onComment={() => handleAction("comment")}
          onShare={() => handleAction("share")}
        />
      </div>
    </div>
  );
};

PostCard.displayName = "PostCard";
