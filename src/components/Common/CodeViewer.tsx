import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/xcode.css";

type CodeViewerProps = {
  content: string;
};

export const CodeViewer = ({ content }: CodeViewerProps) => {
  const quillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (quillRef.current) {
      const style = document.createElement("style");
      style.textContent = `
        pre {
          margin-top: 0px;
          margin-bottom: 0px;
        }
        pre.ql-syntax {
          color: black;
          border-radius: 8px; 
          padding: 16px;
          background-color: #f6f6f6;
          white-space: pre-wrap;
          line-height: 1.5;
        }
        p {
          margin: 0;
        }
      `;
      quillRef.current.appendChild(style);

      const codeBlocks = quillRef.current.getElementsByClassName("ql-syntax");
      Array.from(codeBlocks).forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    }
  }, [content]);

  return <div ref={quillRef} className="bg-white break-words" dangerouslySetInnerHTML={{ __html: content }} />;
};
