import { Loading } from "@components/Common/Loading";
import { NoContent } from "@components/Common/NoContent";
import { MyComment } from "@components/MyPage/MyComment";
import { CommonCommentResponseProps } from "@customTypes/comment";
import { getMyComments } from "@services/comment/getMyComments";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useCallback, useRef } from "react";

export const CommentsContent = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } = useInfiniteQuery<
    CommonCommentResponseProps,
    Error
  >({
    queryKey: ["userComments"],
    queryFn: ({ pageParam = 1 }) => getMyComments({ page: pageParam as number, limit: 10 }),
    getNextPageParam: (lastPage) => (lastPage.currentPage < lastPage.totalPages ? lastPage.currentPage + 1 : undefined),
    initialPageParam: 1
  });

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

  if (error) return <div>Error: {(error as Error).message}</div>;

  if (!data || data.pages[0].comments.length === 0) return <NoContent type="comment" />;

  return (
    <div className="">
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
