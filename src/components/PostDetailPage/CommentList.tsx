import { CommentEditDelete, CommentInteraction } from "@components/PostDetailPage";
import { useInfiniteCommentsQuery } from "@hooks/useInfiniteComment";
import Avatar from "boring-avatars";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
import { EditableCodeViewer } from "./EditableCodeViewer";
import { Loading } from "@components/Common/Loading";
import { errorAlert } from "@/utils/sweetAlert/alerts";
export const CommentList = () => {
  const { id: postId } = useParams<{ id: string }>();
  const { ref, inView } = useInView({
    threshold: 0.8,
    rootMargin: "10px"
  });

  // 수정 중인 댓글의 ID를 관리하는 state
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, error } = useInfiniteCommentsQuery({
    postId: postId ?? "",
    limit: 10,
    enabled: Boolean(postId)
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // 로딩 상태
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    errorAlert({ title: "댓글 목록을 불러오는 중 오류가 발생했습니다.", text: error.message });
    return null;
  }

  if (!data?.pages[0]) {
    errorAlert({ title: "댓글 목록을 불러오는 중 오류가 발생했습니다.", text: "데이터를 찾을 수 없습니다." });
    return null;
  }

  // 모든 페이지의 댓글을 하나의 배열로 합치기
  const allComments = data.pages.flatMap((page) => page.comments);
  const totalComments = data.pages[0].totalComments;

  return (
    <div className="flex flex-col gap-4">
      <div className="text-14 font-medium">전체 댓글 {totalComments}개</div>

      {/* 댓글 목록 */}
      <div className="flex flex-col gap-4">
        {allComments.map((comment) => (
          <section
            key={comment._id}
            className="flex flex-col gap-9 rounded-lg border border-solid border-gray px-3 py-4"
          >
            <section className="flex justify-between">
              <div className="flex gap-5">
                <figure className="h-12 w-12 overflow-hidden rounded-full md:h-16 md:w-16">
                  <Avatar name={comment.author.userId} variant="beam" />
                </figure>
                <p className="flex flex-col justify-center gap-2 md:flex-row md:flex-center">
                  <span className="flex text-12 font-medium md:text-16">{comment.author.userId}</span>
                  <span className="flex text-12 text-gray md:text-16">
                    {comment.updatedAt.slice(0, 16).replace("T", " ")}
                  </span>
                  <span className="flex text-12 text-gray md:text-16">
                    {comment.createdAt !== comment.updatedAt && "(수정됨)"}
                  </span>
                </p>
              </div>
              {comment.isMine && (
                <CommentEditDelete
                  commentId={comment._id}
                  isEditing={editingCommentId === comment._id} // isEditing prop 추가
                  onEditStateChange={(isEditing) => {
                    setEditingCommentId(isEditing ? comment._id : null);
                  }}
                />
              )}
            </section>

            <section className="px-1">
              <EditableCodeViewer
                content={comment.content}
                commentId={comment._id}
                postId={postId ?? ""}
                isEditing={editingCommentId === comment._id}
                onEditComplete={() => setEditingCommentId(null)}
                userId={comment.author.userId}
              />
            </section>
            <CommentInteraction commentId={comment._id} />
          </section>
        ))}

        {/* 옵저버 요소를 댓글 목록 바깥에 배치 */}
        <div ref={ref} className="h-4 w-full" />
      </div>

      {/* 추가 댓글 로딩 상태 */}
      {isFetchingNextPage && (
        <div className="flex h-20 w-full flex-center">
          <Loading />
        </div>
      )}

      {/* 댓글이 없는 경우 */}
      {!isLoading && allComments.length === 0 && (
        <div className="p-4 text-gray flex-center">아직 작성된 댓글이 없습니다.</div>
      )}
    </div>
  );
};
