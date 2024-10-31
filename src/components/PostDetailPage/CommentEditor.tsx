import { useState, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type CommentEditorProps = {
  onSubmit?: (content: string) => void;
  placeholder?: string;
  initialValue?: string;
};

const modules = {
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
};

const formats = ["bold", "italic", "underline", "strike", "blockquote", "code-block", "list", "bullet", "link"];

export const CommentEditor = ({
  onSubmit,
  placeholder = "댓글을 입력하세요...",
  initialValue = ""
}: CommentEditorProps) => {
  const [content, setContent] = useState(initialValue);

  const handleChange = useCallback((value: string) => {
    setContent(value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (content.trim() && onSubmit) {
      onSubmit(content);
      setContent("");
    }
  }, [content, onSubmit]);

  return (
    <div className="h-44 w-full">
      <div className="relative h-full">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
          className="absolute h-[90%] w-full"
        />
      </div>
      <div className="mt-12 flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white hover:bg-blue-600 rounded px-4 py-2 disabled:opacity-50"
          disabled={!content.trim()}
          type="submit"
        >
          댓글 작성
        </button>
      </div>
    </div>
  );
};

export default CommentEditor;
