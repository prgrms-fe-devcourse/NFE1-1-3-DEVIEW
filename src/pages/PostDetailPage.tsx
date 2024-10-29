import { EditDelete, PostDetailHeader } from "@components/PostDetailPage";
import { PostMeta } from "@customTypes/postDetail";
import { useParams } from "react-router-dom";
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
      <article className="text-16">상세 설명</article>
      <section>코드 및 부연 설명 섹션</section>
      <div>좋아요 신고</div>
      <section>댓글 섹션</section>
      <section>댓글 리스트 섹션</section>
    </section>
  );
}
