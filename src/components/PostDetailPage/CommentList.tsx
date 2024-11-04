import { CommentEditDelete } from "@components/PostDetailPage";
import useInfiniteCommentsQuery from "@hooks/useInfiniteComment";
import Avatar from "boring-avatars";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
import { EditableCodeViewer } from "./EditableCodeViewer";

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
    return (
      <div className="flex flex-col gap-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="animate-pulse rounded-lg border border-solid border-gray px-3 py-4">
            <div className="mb-4 flex gap-4">
              <div className="bg-gray-200 h-12 w-12 rounded-full" />
              <div className="bg-gray-200 h-4 w-24 rounded" />
            </div>
            <div className="bg-gray-200 h-20 w-full rounded" />
          </div>
        ))}
      </div>
    );
  }

  // 에러 상태
  if (error) {
    return (
      <div className="text-red-500 rounded-lg border border-solid border-gray px-3 py-4">
        댓글을 불러오는 중 오류가 발생했습니다.
      </div>
    );
  }

  // 데이터가 없는 경우
  if (!data?.pages[0]) {
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
                <span className="flex text-12 font-medium flex-center md:text-16">{comment.author.userId}</span>
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
              />
            </section>
          </section>
        ))}

        {/* 옵저버 요소를 댓글 목록 바깥에 배치 */}
        <div ref={ref} className="h-4 w-full" />
      </div>

      {/* 추가 댓글 로딩 상태 */}
      {isFetchingNextPage && (
        <div className="flex justify-center p-4">
          <div className="border-gray-900 h-6 w-6 animate-spin rounded-full border-b-2" />
        </div>
      )}

      {/* 댓글이 없는 경우 */}
      {!isLoading && allComments.length === 0 && (
        <div className="text-gray-500 p-4 text-center">아직 작성된 댓글이 없습니다.</div>
      )}
    </div>
  );
};

export default CommentList;
