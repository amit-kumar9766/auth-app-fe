import React, { useState } from "react";
import { PostToolbar } from "./PostToolbar";
import { Button } from "../ui/Button";
import { useAuth } from "../../context/AuthContext";
import trash from "../../assets/trash.svg";
import send from "../../assets/send.svg";
import plus from "../../assets/plus.svg";
import mic from "../../assets/mic.svg";
import videocamera from "../../assets/video-camera.svg";

interface PostComposerProps {
  onPublish: (content: string) => void;
  onUnauthenticatedAction: () => void;
}

export const PostComposer: React.FC<PostComposerProps> = ({
  onPublish,
  onUnauthenticatedAction,
}) => {
  const [content, setContent] = useState("");
  const { isAuthenticated } = useAuth();

  const handlePublish = () => {
    onPublish(content);
    setContent("");
  };

  const handleTextareaClick = () => {
    if (!isAuthenticated) {
      onUnauthenticatedAction();
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
  };

  const handleClearContent = () => {
    setContent("");
  };

  const notImplemented = () => {
    alert("function not implemented");
  };

  return (
    <div className="p-2 bg-black-3 rounded-2xl">
      <div className="bg-white rounded-2xl border border-gray-200 p-2">
        <div className="flex items-center">
          <PostToolbar onAction={notImplemented} />
          <div className="ml-auto p-3">
            <button
              onClick={handleClearContent}
              className="bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 h-10 w-10 rounded-lg transition-colors"
              type="button"
              aria-label="Clear post content"
            >
              <span className="text-red-600">
                <img src={trash} alt="trash" />
              </span>
            </button>
          </div>
        </div>

        <div className="mb-4">
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder="😊 How are you feeling today?"
            onClick={handleTextareaClick}
            className={`h-32 resize-none border-none focus:outline-none text-gray-700 w-full`}
            name="post-field"
            aria-label="Post content"
          />
        </div>

        <div className="flex justify-between items-center border-t border-gray-200 pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={notImplemented}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Add attachment"
            >
              <img src={plus} alt="plus" />
            </button>
            <button
              onClick={notImplemented}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Record audio"
            >
              <img src={mic} alt="mic" />
            </button>
            <button
              onClick={notImplemented}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Record video"
            >
              <img src={videocamera} alt="videocamera" />
            </button>
          </div>

          <Button
            onClick={isAuthenticated ? handlePublish : onUnauthenticatedAction}
            disabled={!content.trim() || !isAuthenticated}
            variant="tertiary"
            className="px-6"
          >
            <span>
              <img src={send} alt="send" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
