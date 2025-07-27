import React from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Code,
  Quote,
} from "lucide-react";

interface PostToolbarProps {
  onAction: (action: string) => void;
}

export const PostToolbar: React.FC<PostToolbarProps> = ({ onAction }) => {
  const toolbarButtons = [
    { icon: Bold, action: "bold", label: "Bold" },
    { icon: Italic, action: "italic", label: "Italic" },
    { icon: Underline, action: "underline", label: "Underline" },
  ];

  const listIcons = [
    { icon: List, action: "bullet-list", label: "Bullet List" },
    { icon: ListOrdered, action: "numbered-list", label: "Numbered List" },
  ];

  const quoteIcons = [
    { icon: Quote, action: "quote", label: "Quote" },
    { icon: Code, action: "code", label: "Code" },
  ];

  return (
    <div className="flex items-center gap-1 border-b border-gray-100 p-2 bg-black-3 rounded-xl">
      <select
        className="text-sm border-none focus:outline-none mr-4 bg-white p-2 border border-gray-100 rounded-md"
        onChange={(e) => onAction(e.target.value)}
      >
        <option value="paragraph">Paragraph</option>
        <option value="heading1">Heading 1</option>
        <option value="heading2">Heading 2</option>
        <option value="heading3">Heading 3</option>
      </select>

      <div className="flex items-center gap-1">
        {toolbarButtons.map(({ icon: Icon, action, label }) => (
          <button
            key={action}
            onClick={() => onAction(action)}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            title={label}
            type="button"
          >
            <Icon size={16} />
          </button>
        ))}

        <div className="border-l border-gray-300 ">
          {listIcons.map(({ icon: Icon, action, label }) => (
            <button
              key={action}
              onClick={() => onAction(action)}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title={label}
              type="button"
            >
              <Icon size={16} />
            </button>
          ))}
        </div>

        <div className="border-l border-gray-300">
          {quoteIcons.map(({ icon: Icon, action, label }) => (
            <button
              key={action}
              onClick={() => onAction(action)}
              className="p-2 hover:bg-gray-100 rounded transition-colors"
              title={label}
              type="button"
            >
              <Icon size={16} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
