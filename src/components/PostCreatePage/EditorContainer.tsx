import { formats } from "@components/Common/quillConfig";
import hljs from "highlight.js";
import { useEffect, useMemo, useRef } from "react";
import ReactQuill from "react-quill";

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

type EditorContainerProps = {
  value: string;
  onChange: (value: string) => void;
};

export const EditorContainer = ({ value, onChange }: EditorContainerProps) => {
  const modules = useMemo<CustomModule>(
    () => ({
      syntax: {
        highlight: (text: any) => hljs.highlightAuto(text).value
      },
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["code", "code-block"],
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        ["link"],
        ["clean"]
      ]
    }),
    []
  );

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
          background-color: #f6f6f6;
          color: black;
          border-radius: 8px; 
          padding: 16px;
        }
        .ql-container.ql-snow {
          padding: 16px;
        }
        .ql-editor {
          padding: 0;
        }
      `;
      quillRef.current.appendChild(style);
    }
  }, []);

  return (
    <section className="flex w-full flex-col gap-4 rounded-lg border border-solid border-gray px-4 py-6 shadow">
      <div className="flex flex-col gap-3">
        <h2 className="text-16 font-semibold md:text-20">질문하고 싶은 코드를 작성해주세요</h2>
        <p className="text-14 text-primary md:text-16">주석으로 설명을 추가해주세요.</p>
        <div ref={quillRef} className="relative h-[60vh]">
          <ReactQuill
            value={value}
            onChange={onChange}
            modules={modules}
            formats={formats}
            placeholder="코드를 입력해주세요"
            className="2sm:h-[90%] absolute h-[84%] w-full sm:h-[90%] md:h-[92%]"
          />
        </div>
      </div>
    </section>
  );
};

export default EditorContainer;
