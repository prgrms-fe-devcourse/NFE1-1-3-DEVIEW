import "react-quill/dist/quill.bubble.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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

const dummyPython = `
class Smartphone:
	"""
	Smartphone class
	"""
    def __init__(self, brand, informations):
        self._brand = brand
        self._informations = informations

    def __str__(self):
        return f'str : {self._brand} - {self._informations}'

    def __repr__(self):
        return f'repr : {self._brand} - {self._informations}'
    

Smartphone1 = Smartphone('Iphone', {'color' : 'White', 'price': 10000})
Smartphone2 = Smartphone('Galaxy', {'color' : 'Black', 'price': 8000})

print(Smartphone1)
print(Smartphone1.__dict__)

print(Smartphone1._brand == Smartphone2._brand)
print(Smartphone1 is Smartphone2)

print(Smartphone.__doc__) 
`;

export const CodeViewer = () => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={oneDark}
      className="text-sm leading-relaxed"
      showLineNumbers
      wrapLines
    >
      {dummyCommentContent}
    </SyntaxHighlighter>
  );
};
export default CodeViewer;
