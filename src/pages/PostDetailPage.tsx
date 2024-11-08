import { errorAlert } from "@/utils/sweetAlert/alerts";
import { Loading } from "@components/Common/Loading";
import { CommentList, CommentWrite, PostDetail, PostDetailInteraction } from "@components/PostDetailPage";
import { usePostDetail } from "@hooks/usePostDetail";
import ErrorPage from "@pages/ErrorPage";
import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { post, isLoading, isError, error } = usePostDetail({
    postId: id ?? undefined,
    enabled: Boolean(id)
  });
  if (!id) {
    errorAlert({ title: "게시글을 찾을 수 없습니다.", text: "올바르지 않은 POSTID입니다." });
    return <ErrorPage />;
  }

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-20rem)] items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (isError) {
    errorAlert({ title: "게시글을 불러오는 중 오류가 발생했습니다.", text: error?.message });
    return <ErrorPage />;
  }

  if (!post) {
    errorAlert({ title: "게시글을 찾을 수 없습니다.", text: "게시글을 찾을 수 없습니다." });
    return <ErrorPage />;
  }

  return (
    <div className="m-auto flex max-w-[1440px] flex-col gap-12 px-4 py-12">
      <PostDetail />
      <PostDetailInteraction postId={post._id} post={post} />
      <CommentWrite />
      <CommentList />
    </div>
  );
}
