import { Loading } from "@components/Common/Loading";
import { NoContent } from "@components/Common/NoContent";
import { PostListItem } from "@components/Common/PostListItem";
import { useInfinite } from "@hooks/useInfinite";
import { getHiddenPosts, GetHiddenPostsResponseProps } from "@services/post/getHiddenPosts";
import React, { useCallback, useRef } from "react";

export default function AdminPage() {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfinite<GetHiddenPostsResponseProps>({
      fetchFunc: getHiddenPosts,
      key: "hiddenPosts",
      limit: 10
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
      <div className="h-[calc(100vh-112px)] flex-center">
        <Loading />
      </div>
    );

  if (error) return <div>Error: {(error as Error).message}</div>;

  if (!data || data.pages[0].posts?.length === 0) return <NoContent type="post" />;

  return (
    <div className="mx-auto max-w px-4 py-12">
      <h2 className="mb-4 text-24">관리자 페이지</h2>
      <h3 className="mb-4 text-20">숨겨진 게시물 목록</h3>
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          <div>
            {page.posts?.map((post, postIndex) => (
              <PostListItem
                postItem={post}
                ref={
                  pageIndex === data.pages.length - 1 && postIndex === page.posts.length - 1
                    ? lastCommentElementRef
                    : null
                }
              />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
