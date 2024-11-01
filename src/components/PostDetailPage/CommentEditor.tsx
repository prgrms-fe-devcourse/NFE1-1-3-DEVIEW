// import { useState, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type CommentEditorProps = {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
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

export const CommentEditor = ({ value, onChange, placeholder = "댓글을 입력하세요..." }: CommentEditorProps) => {
  return (
    <div className="h-44 w-full">
      <div className="relative h-full">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
          className="absolute h-[90%] w-full"
        />
      </div>
    </div>
  );
};
export default CommentEditor;
