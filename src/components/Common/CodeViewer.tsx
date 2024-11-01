import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeViewerProps = {
  content: string;
};

export const CodeViewer: React.FC<CodeViewerProps> = ({ content }) => {
  const [highlighter, setHighlighter] = useState(true);
  const [processedContent, setProcessedContent] = useState("");

  const checkText = (htmlContent: string): boolean => {
    const trimmedContent = htmlContent.trim();
    return trimmedContent.startsWith("<p>") && trimmedContent.endsWith("</p>");
  };

  // HTML 내용을 처리하고 문자열로 반환하는 함수
  const processContent = (htmlContent: string): string => {
    const sanitizedContent = DOMPurify.sanitize(String(htmlContent));
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = sanitizedContent;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  // 처리된 내용을 저장
  useEffect(() => {
    const isParagraph = checkText(content);
    setHighlighter(!isParagraph);
    const processed = processContent(content);
    setProcessedContent(processed);
  }, [content]);

  return (
    <div className="code-viewer bg-white overflow-x-auto whitespace-pre-wrap break-words rounded-lg">
      {highlighter ? (
        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          className="text-sm rounded-b-lg rounded-t-none leading-relaxed"
          customStyle={{
            margin: 0,
            borderTopLeftRadius: 0
          }}
        >
          {processedContent}
        </SyntaxHighlighter>
      ) : (
        <div className="text-14 md:text-16">{processedContent}</div>
      )}
    </div>
  );
};
