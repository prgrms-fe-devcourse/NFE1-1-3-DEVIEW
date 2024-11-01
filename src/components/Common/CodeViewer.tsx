import ReactQuill from "react-quill";
import { formats, modules } from "@components/Common/quillConfig";
import styled from "styled-components";

type CodeViewerProps = {
  content: string;
};

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

export const CodeViewer = ({ content }: CodeViewerProps) => {
  return (
    <div className="bg-white overflow-x-auto whitespace-pre-wrap break-words rounded-lg">
      <StyledQuillEditor modules={modules} formats={formats} value={content} readOnly={true} />
    </div>
  );
};
