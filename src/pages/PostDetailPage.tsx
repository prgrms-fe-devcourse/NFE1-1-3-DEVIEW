import { Feedback, CommentList, CommentWrite, PostDetail } from "@components/PostDetailPage";
import { useParams } from "react-router-dom";
import usePostDetail from "@hooks/usePostDetail";
//!코드에디터 컴폰넌트 추가 필요
//!API 연동 필요
//!컴포넌트 세부호출 필요

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { post, isLoading } = usePostDetail({
    postId: id
  });
  console.log(post);
  return (
    <div className="m-auto my-[1.625rem] flex max-w-[1240px] flex-col gap-12 px-5">
      <PostDetail />
      <Feedback />
      <CommentWrite />
      <CommentList />
    </div>
  );
}
