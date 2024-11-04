import ReactQuill from "react-quill";
import { formats, modules } from "@components/Common/quillConfig";
import { useEffect, useRef } from "react";

type CodeViewerProps = {
  content: string;
};

export const CodeViewer = ({ content }: CodeViewerProps) => {
  const quillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (quillRef.current) {
      const style = document.createElement("style");
      style.textContent = `
        .ql-snow .ql-editor pre {
          margin-top: 0px;
          margin-bottom: 0px;
        }
        .ql-snow .ql-editor pre.ql-syntax {
          color: black;
          border-radius: 8px; 
          padding: 16px;
          background-color: #f6f6f6;
        }
        .ql-container.ql-snow {
          border: none;
        }
        .ql-editor {
          padding: 0;
        }
        .Pre .ql-syntax {
        }
      `;
      quillRef.current.appendChild(style);
    }
  }, []);

  return (
    <div ref={quillRef} className="bg-white whitespace-pre-wrap break-words">
      <ReactQuill modules={modules} formats={formats} value={content} readOnly={true} />
    </div>
  );
};
