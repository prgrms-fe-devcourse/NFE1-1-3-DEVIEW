import { PostMeta } from "@customTypes/postDetail";
import { EditDelete, PostDetailHeader, CodeViewer } from "@components/PostDetailPage";
// Quill 에디터에서 생성된 콘텐츠
const quillContent = `
<p>Python으로 구현한 예제입니다:</p>
<pre><code class="language-python">
def hello_world():
print("Hello, World!")
</code></pre>
<p>설명이 여기 있습니다.</p>
`;
type PostDetailProps = {};
export const PostDetail = ({}: PostDetailProps) => {
  const postMeta: PostMeta = {
    createdAt: "작성일",
    today: "오늘",
    views: 2,
    replies: 2,
    id: "ssss"
  };
  return (
    <>
      <section className="flex justify-between border-b border-solid border-gray pb-3 pr-3">
        <PostDetailHeader title="React Router를 사용해 navigate하는 방법이 뭔가요?" meta={postMeta} />
        <EditDelete />
      </section>
      <article className="text-16 font-medium">
        Lorem ipsum dolor sit amet <br />
        consectetur adipisicing elit. <br />
        Voluptatibus, doloribus perferendis rerum expedita <br />
        architecto autem non quis sapiente saepe maiores <br />
        ipsa soluta magni est. Neque mollitia eaque est vitae assumenda.
      </article>
      <section>
        <CodeViewer content={quillContent} />
      </section>
    </>
  );
};
