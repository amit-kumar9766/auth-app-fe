import React from "react";
import heart from "../../assets/heart.svg";
import comment from "../../assets/comment-text.svg";
import share from "../../assets/share.svg";

interface PostActionsProps {
  likes?: number;
  comments?: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  isLiked?: boolean;
}

export const PostActions: React.FC<PostActionsProps> = ({
  likes,
  comments,
  onLike,
  onComment,
  onShare,
  isLiked = false,
}) => {
  return (
    <div className="flex items-center gap-6">
      <button
        onClick={onLike}
        className={`flex items-center gap-2 ${
          isLiked
            ? "text-red-500 hover:text-red-800"
            : "text-gray-800 hover:text-gray-900"
        }`}
      >
        <img src={heart} alt="heart" />
        <span className="text-sm">{likes}</span>
      </button>

      <button
        onClick={onComment}
        className="flex items-center gap-2 text-gray-800 hover:text-gray-900"
      >
        <img src={comment} alt="comment" />
        <span className="text-sm">{comments}</span>
      </button>

      <button
        onClick={onShare}
        className="flex items-center gap-2 text-gray-800 hover:text-gray-900"
      >
        <img src={share} alt="share" />
      </button>
    </div>
  );
};
