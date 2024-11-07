import { Loading } from "@components/Common/Loading";
import { NoContent } from "@components/Common/NoContent";
import { MyComment } from "@components/MyPage/MyComment";
import { CommonCommentResponseProps } from "@customTypes/comment";
import { useInfinite } from "@hooks/useInfinite";
import { getMyComments } from "@services/comment/getMyComments";
import React, { useCallback, useRef } from "react";
import { errorAlert } from "@utils/sweetAlert/alerts";
import ErrorPage from "@pages/ErrorPage";

export const CommentsContent = () => {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfinite<CommonCommentResponseProps>({ key: "userComments", fetchFunc: getMyComments, limit: 10 });
  const observer = useRef<IntersectionObserver | null>(null);
  const lastCommentElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (isLoading)
    return (
      <div className="flex">
        <Loading />
      </div>
    );

  if (error) {
    errorAlert({ title: "댓글을 불러오는 중 오류가 발생했습니다.", text: error.message });
    return <ErrorPage />;
  }

  if (!data || data.pages[0].comments.length === 0) return <NoContent type="comment" />;

  return (
    <div className="">
      <p className="p-2 py-4 text-16 md:text-20">{data.pages[0].totalComments}개의 댓글</p>
      {data.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.comments.map((comment, commentIndex) => (
            <div
              key={comment._id}
              ref={
                pageIndex === data.pages.length - 1 && commentIndex === page.comments.length - 1
                  ? lastCommentElementRef
                  : null
              }
            >
              <MyComment comment={comment} />
            </div>
          ))}
        </React.Fragment>
      ))}
      {isFetchingNextPage && (
        <div className="flex">
          <Loading />
        </div>
      )}
    </div>
  );
};
