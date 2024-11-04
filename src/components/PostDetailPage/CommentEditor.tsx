import { formats } from "@components/Common/quillConfig";
import hljs from "highlight.js";
import { useEffect, useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/github.css";

type CommentEditorProps = {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
};

export const CommentEditor = ({ value, onChange, placeholder = "댓글을 입력하세요..." }: CommentEditorProps) => {
  const quillRef = useRef<HTMLDivElement>(null);

  const modules = useMemo(
    () => ({
      syntax: {
        highlight: (text: string) => hljs.highlightAuto(text).value
      },
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link"],
          ["clean"]
        ]
      },
      clipboard: {
        matchVisual: false
      }
    }),
    []
  );

  useEffect(() => {
    const currentRef = quillRef.current;
    if (!currentRef) return;

    const style = document.createElement("style");
    style.textContent = `
      /* 에디터 컨테이너 스타일링 */
      .comment-editor .ql-container {
        font-size: 14px;
        font-family: inherit;
      }

      /* 툴바 스타일링 */
      .comment-editor .ql-toolbar.ql-snow {
        border: 1px solid #D9D9D9;
        border-radius: 8px 8px 0 0;
        background-color: #fff;
        padding: 8px;
      }

      /* 에디터 본문 스타일링 */
      .comment-editor .ql-container.ql-snow {
        border: 1px solid #D9D9D9;
        border-top: none;
        border-radius: 0 0 8px 8px;
        background-color: #fff;
      }

      /* 에디터 내부 패딩 */
      .comment-editor .ql-editor {
        padding: 16px;
        min-height: 120px;
      }

      /* 플레이스홀더 스타일 */
      .comment-editor .ql-editor.ql-blank::before {
        font-style: normal;
        color: #999;
      }

      /* 코드블록 스타일링 */
      .comment-editor .ql-snow .ql-editor pre.ql-syntax {
        background-color: #f6f6f6;
        color: #333;
        overflow: visible;
        border-radius: 8px;
        padding: 16px;
        margin: 8px 0;
        font-family: monospace;
      }

      /* 인라인 코드 스타일링 */
      .comment-editor .ql-editor code {
        background-color: #f6f6f6;
        padding: 2px 4px;
        border-radius: 4px;
        font-family: monospace;
      }

      /* 블록쿼트 스타일링 */
      .comment-editor .ql-editor blockquote {
        border-left: 4px solid #ccc;
        padding-left: 16px;
        margin: 8px 0;
        color: #666;
      }

      /* 링크 스타일링 */
      .comment-editor .ql-editor a {
        color: #0066cc;
        text-decoration: none;
      }

      /* 툴바 버튼 호버 효과 */
      .comment-editor .ql-toolbar.ql-snow .ql-formats button:hover {
        color: #0066cc;
      }

      /* 활성화된 툴바 버튼 스타일 */
      .comment-editor .ql-toolbar.ql-snow .ql-formats button.ql-active {
        color: #0066cc;
      }

      /* 목록 스타일링 */
      .comment-editor .ql-editor ul > li,
      .comment-editor .ql-editor ol > li {
        padding-left: 4px;
      }
    `;

    currentRef.appendChild(style);

    // cleanup function
    return () => {
      if (style.parentNode === currentRef) {
        currentRef.removeChild(style);
      }
    };
  }, []); // 의존성 배열이 비어있으므로 컴포넌트 마운트 시에만 실행

  return (
    <div className="comment-editor w-full">
      <div ref={quillRef} className="relative">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default CommentEditor;
