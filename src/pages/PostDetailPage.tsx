import { EditDelete, PostDetailHeader, Feedback, CommentContainer, CodeViewer } from "@components/PostDetailPage";
import { PostMeta } from "@customTypes/postDetail";
import { useParams } from "react-router-dom";
//!코드에디터 컴폰넌트 추가 필요
//!API 연동 필요
//!컴포넌트 세부호출 필요
export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const postMeta: PostMeta = {
    createdAt: "작성일",
    today: "오늘",
    views: 2,
    replies: 2,
    id: id
  };

  return (
    <section className="m-auto my-[1.625rem] flex max-w-[1240px] flex-col gap-12 px-5">
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
        <CodeViewer />
      </section>
      <Feedback />
      <section>Answer</section>
      <CommentContainer />
    </section>
  );
}
