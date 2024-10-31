// // import "react-quill/dist/quill.bubble.css";
// // import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// // const dummyCommentContent = `
// //  <p>이 문제는 다음과 같이 해결할 수 있습니다:</p>
// //  <pre><code class="language-javascript">
// //    // React Router 네비게이션 예제
// //    import { useNavigate } from 'react-router-dom';

// //    function Navigation() {
// //      const navigate = useNavigate();

// //      // 페이지 이동 함수
// //      const handleClick = () => {
// //        navigate('/target-path');
// //      };

// //      return (
// //        <button onClick={handleClick}>
// //          페이지 이동
// //        </button>
// //      );
// //    }
// //  </code></pre>
// //  <p>useNavigate 훅을 사용하면 프로그래매틱하게 라우팅을 처리할 수 있습니다.</p>
// //  <ul>
// //    <li>history 스택에 추가됩니다</li>
// //    <li>뒤로가기가 가능합니다</li>
// //  </ul>
// // `;

// // const dummyPython = `
// // class Smartphone:
// // 	"""
// // 	Smartphone class
// // 	"""
// //     def __init__(self, brand, informations):
// //         self._brand = brand
// //         self._informations = informations

// //     def __str__(self):
// //         return f'str : {self._brand} - {self._informations}'

// //     def __repr__(self):
// //         return f'repr : {self._brand} - {self._informations}'

// // Smartphone1 = Smartphone('Iphone', {'color' : 'White', 'price': 10000})
// // Smartphone2 = Smartphone('Galaxy', {'color' : 'Black', 'price': 8000})

// // print(Smartphone1)
// // print(Smartphone1.__dict__)

// // print(Smartphone1._brand == Smartphone2._brand)
// // print(Smartphone1 is Smartphone2)

// // print(Smartphone.__doc__)
// // `;

// // export const CodeViewer = () => {
// //   return (
// //     <SyntaxHighlighter
// //       language="javascript"
// //       style={oneDark}
// //       className="text-sm leading-relaxed"
// //       showLineNumbers
// //       wrapLines
// //     >
// //       {dummyCommentContent}
// //     </SyntaxHighlighter>
// //   );
// // };
// // export default CodeViewer;
// import "react-quill/dist/quill.bubble.css";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import parse from "html-react-parser";

// const dummyCommentContent = `
//  <p>이 문제는 다음과 같이 해결할 수 있습니다:</p>
//  <pre><code class="language-javascript">
//  // React Router 네비게이션 예제
//  import { useNavigate } from 'react-router-dom';
//  function Navigation() {
//  const navigate = useNavigate();
//  // 페이지 이동 함수
//  const handleClick = () => {
//  navigate('/target-path');
//  };
//  return (
//  <button onClick={handleClick}>
//  페이지 이동
//  </button>
//  );
//  }
//  </code></pre>
//  <p>useNavigate 훅을 사용하면 프로그래매틱하게 라우팅을 처리할 수 있습니다.</p>
//  <ul>
//  <li>history 스택에 추가됩니다</li>
//  <li>뒤로가기가 가능합니다</li>
//  </ul>
// `;

// const dummyPython = `
// class Smartphone:
//  """
//  Smartphone class
//  """
//  def **init**(self, brand, informations):
//  self._brand = brand
//  self._informations = informations
//  def **str**(self):
//  return f'str : {self._brand} - {self._informations}'
//  def **repr**(self):
//  return f'repr : {self._brand} - {self._informations}'
// Smartphone1 = Smartphone('Iphone', {'color' : 'White', 'price': 10000})
// Smartphone2 = Smartphone('Galaxy', {'color' : 'Black', 'price': 8000})
// print(Smartphone1)
// print(Smartphone1.__dict__)
// print(Smartphone1._brand == Smartphone2._brand)
// print(Smartphone1 is Smartphone2)
// print(Smartphone.__doc__)
// `;

// export const CodeViewer = () => {
//   const processContent = (htmlContent: string) => {
//     return parse(htmlContent, {
//       replace: (domNode: any) => {
//         if (domNode.type === "tag" && domNode.name === "pre") {
//           const codeBlock = domNode.children[0];
//           if (codeBlock && codeBlock.name === "code") {
//             const language = codeBlock.attribs.class?.replace("language-", "") || "text";
//             const code = codeBlock.children[0]?.data || "";

//             return (
//               <div className="my-4">
//                 <SyntaxHighlighter
//                   language={language}
//                   style={oneDark}
//                   className="text-sm rounded-lg leading-relaxed"
//                   showLineNumbers
//                   wrapLines
//                 >
//                   {code.trim()}
//                 </SyntaxHighlighter>
//               </div>
//             );
//           }
//         }

//         if (domNode.type === "tag" && domNode.name === "p") {
//           return (
//             <p className="text-gray-700 my-2">
//               {domNode.children.map((child: any, index: number) => child.data || child.children?.[0]?.data || "")}
//             </p>
//           );
//         }

//         if (domNode.type === "tag" && domNode.name === "ul") {
//           return (
//             <ul className="my-2 list-inside list-disc space-y-1">
//               {domNode.children.map((child: any, index: number) => {
//                 if (child.name === "li") {
//                   return (
//                     <li key={index} className="text-gray-700">
//                       {child.children[0]?.data || ""}
//                     </li>
//                   );
//                 }
//                 return null;
//               })}
//             </ul>
//           );
//         }
//       }
//     });
//   };

//   return (
//     <div className="space-y-8">
//       <div className="code-viewer bg-white rounded-lg p-4 shadow">
//         <h2 className="text-lg mb-4 font-semibold">JavaScript Example:</h2>
//         {processContent(dummyCommentContent)}
//       </div>

//       <div className="code-viewer bg-white rounded-lg p-4 shadow">
//         <h2 className="text-lg mb-4 font-semibold">Python Example:</h2>
//         <SyntaxHighlighter
//           language="python"
//           style={oneDark}
//           className="text-sm rounded-lg leading-relaxed"
//           showLineNumbers
//           wrapLines
//         >
//           {dummyPython}
//         </SyntaxHighlighter>
//       </div>
//     </div>
//   );
// };

//!코드 뷰어 임시 컴포넌트
// export default CodeViewer;
import "react-quill/dist/quill.bubble.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import parse from "html-react-parser";

// 지원하는 언어 매핑
const SUPPORTED_LANGUAGES = {
  "c#": "csharp",
  "c++": "cpp",
  css: "css",
  git: "git",
  go: "go",
  html: "html",
  java: "java",
  javascript: "javascript",
  nodejs: "javascript", // Node.js는 JavaScript 하이라이팅 사용
  php: "php",
  python: "python",
  react: "jsx", // React는 JSX 하이라이팅 사용
  ruby: "ruby",
  sass: "scss" // Sass는 SCSS 하이라이팅 사용
} as const;

type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;

interface CodeViewerProps {
  content: string;
}

export const CodeViewer = ({ content }: CodeViewerProps) => {
  // 언어 감지 및 정규화 함수
  const normalizeLanguage = (language: string): string => {
    const normalizedLang = language.toLowerCase().replace(/[^a-z#+]/g, "");
    const mappedLang = SUPPORTED_LANGUAGES[normalizedLang as SupportedLanguage];
    return mappedLang || "text"; // 매핑된 언어가 없으면 일반 텍스트로 처리
  };

  const processContent = (htmlContent: string) => {
    return parse(htmlContent, {
      replace: (domNode: any) => {
        if (domNode.type === "tag" && domNode.name === "pre") {
          const codeBlock = domNode.children[0];
          if (codeBlock && codeBlock.name === "code") {
            // language- 접두사를 제거하고 언어 정규화
            const languageClass = codeBlock.attribs.class || "";
            const detectedLang = languageClass.replace("language-", "");
            const language = normalizeLanguage(detectedLang);
            const code = codeBlock.children[0]?.data || "";

            return (
              <div className="code-block my-4">
                <div className="language-tag bg-gray-700 text-gray-200 text-sm inline-block rounded-t-lg px-3 py-1">
                  {detectedLang.toUpperCase()}
                </div>
                <SyntaxHighlighter
                  language={language}
                  style={oneDark}
                  className="text-sm rounded-b-lg rounded-t-none leading-relaxed"
                  showLineNumbers
                  wrapLines
                  customStyle={{
                    margin: 0,
                    borderTopLeftRadius: 0
                  }}
                >
                  {code.trim()}
                </SyntaxHighlighter>
              </div>
            );
          }
        }

        if (domNode.type === "tag" && domNode.name === "p") {
          return (
            <p className="text-gray-700 my-2">
              {domNode.children.map((child: any, index: number) => child.data || child.children?.[0]?.data || "")}
            </p>
          );
        }

        if (domNode.type === "tag" && domNode.name === "ul") {
          return (
            <ul className="my-2 list-inside list-disc space-y-1">
              {domNode.children.map((child: any, index: number) => {
                if (child.name === "li") {
                  return (
                    <li key={index} className="text-gray-700">
                      {child.children[0]?.data || ""}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          );
        }
      }
    });
  };

  return <div className="code-viewer bg-white rounded-lg p-4 shadow">{processContent(content)}</div>;
};

export default CodeViewer;
