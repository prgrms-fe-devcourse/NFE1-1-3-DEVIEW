import { formats } from "@components/Common/quillConfig";
import hljs from "highlight.js";
import { useEffect, useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type CommentEditorProps = {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
};

type ToolbarOptions =
  | string
  | number
  | boolean
  | { header: (number | boolean)[] }
  | { list: string }
  | { script: string }
  | { indent: string };

type CustomModule = {
  toolbar: ToolbarOptions[][];
};

export const CommentEditor = ({ value, onChange, placeholder = "댓글을 입력하세요..." }: CommentEditorProps) => {
  const modules = useMemo<CustomModule>(
    () => ({
      syntax: {
        highlight: (text: any) => hljs.highlightAuto(text).value
      },
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
        ["clean"]
      ],
      clipboard: {
        matchVisual: false
      }
    }),
    []
  );

  const quillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (quillRef.current) {
      const style = document.createElement("style");
      style.textContent = `
        .comment-editor .ql-snow .ql-editor pre {
          margin-top: 0px;
          margin-bottom: 0px;
        }
        .comment-editor .ql-snow .ql-editor pre.ql-syntax {
          color: black;
          border-radius: 8px; 
          padding: 16px
          background-color: #f6f6f6;
        }
        .comment-editor .ql-container.ql-snow {
          border: 1px solid #D9D9D9;
          padding: 16px
        }
        .comment-editor .ql-editor {
          padding: 0;
        }
      `;
      quillRef.current.appendChild(style);
    }
  }, []);

  return (
    <div className="comment-editor h-44 w-full">
      <div ref={quillRef} className="relative h-full">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
          className="absolute h-full w-full"
        />
      </div>
    </div>
  );
};
export default CommentEditor;
