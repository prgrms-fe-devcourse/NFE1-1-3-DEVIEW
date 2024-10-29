import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const dummyCommentContent = `
 <p>이 문제는 다음과 같이 해결할 수 있습니다:</p>
 <pre><code class="language-javascript">
   // React Router 네비게이션 예제
   import { useNavigate } from 'react-router-dom';
   
   function Navigation() {
     const navigate = useNavigate();
     
     // 페이지 이동 함수
     const handleClick = () => {
       navigate('/target-path');
     };
     
     return (
       <button onClick={handleClick}>
         페이지 이동
       </button>
     );
   }
 </code></pre>
 <p>useNavigate 훅을 사용하면 프로그래매틱하게 라우팅을 처리할 수 있습니다.</p>
 <ul>
   <li>history 스택에 추가됩니다</li>
   <li>뒤로가기가 가능합니다</li>
 </ul>
`;

export const CodeViewer = () => {
  const modules = {
    toolbar: false
  };

  return (
    <section className="code-viewer">
      <ReactQuill
        value={dummyCommentContent}
        readOnly={true}
        modules={modules}
        theme="bubble"
        className="prose max-w-none"
      />
      <style>{`
        .code-viewer .ql-container {
          border: none;
        }
        
        .code-viewer .ql-editor {
          padding: 0;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .code-viewer .ql-editor p {
          margin: 0.5em 0;
        }
        
        .code-viewer .ql-editor pre {
          background: #f6f8fa;
          border-radius: 6px;
          padding: 16px;
          margin: 0.5em 0;
          overflow-x: auto;
        }
        
        .code-viewer .ql-editor pre code {
          font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
          font-size: 13px;
          line-height: 1.5;
          color: #24292f;
        }
        
        .code-viewer .ql-editor ul {
          padding-left: 1.5em;
          margin: 0.5em 0;
        }
      `}</style>
    </section>
  );
};
export default CodeViewer;
