import { Loading } from "@components/Common/Loading";
import { PostListItem } from "@components/Common/PostListItem";
import { NoContent } from "@components/Common/NoContent";
import { CommonPostResponseProps } from "@customTypes/post";
import { getMyPosts } from "@services/post/getMyPosts";
import React, { useCallback, useRef } from "react";
import useInfinite from "@hooks/useInfinite";

export const PostsContent = () => {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfinite<CommonPostResponseProps>({ key: "userPosts", fetchFunc: getMyPosts, limit: 10 });

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostElementRef = useCallback(
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

  if (!data || data.pages[0].posts.length === 0) return <NoContent type="post" />;

  return (
    <div className="">
      {data.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          <p className="p-2 py-8 text-16 md:text-20">{page.totalPosts}개의 게시글</p>
          {page.posts.map((post, postIndex) => (
            <div
              key={post._id}
              ref={
                pageIndex === data.pages.length - 1 && postIndex === page.posts.length - 1 ? lastPostElementRef : null
              }
            >
              <PostListItem postItem={post} />
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
