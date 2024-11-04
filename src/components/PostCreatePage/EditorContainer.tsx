import { formats } from "@components/Common/quillConfig";
import hljs from "highlight.js";
import { useMemo } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";

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

  const StyledQuillEditor = styled(ReactQuill)`
    .ql-snow .ql-editor pre.ql-syntax {
      background-color: #f6f6f6;
      color: #000000;
    }
    .ql-container.ql-snow {
      border: none !important;
    }
    .ql-editor {
      padding: 0;
    }
  `;

  return (
    <section className="flex w-full flex-col gap-4 rounded-lg border border-solid border-gray py-7 pl-3 pr-6 shadow">
      <div className="flex flex-col gap-3">
        <h2 className="text-20 font-semibold">질문하고 싶은 코드를 작성해주세요</h2>
        <p className="text-16 font-medium text-primary">주석으로 설명을 추가해주세요.</p>
        <div className="relative h-[60vh]">
          <StyledQuillEditor
            value={value}
            onChange={onChange}
            modules={modules}
            formats={formats}
            placeholder="코드를 입력해주세요"
            className="absolute h-[92%] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default EditorContainer;
