import { Loading } from "@components/Common/Loading";
import { NoContent } from "@components/Common/NoContent";
import PostListItem from "@components/Common/PostListItem";
import { CommonPostResponseProps, TPost } from "@customTypes/post";
import useInfinite from "@hooks/useInfinite";
import { getScrapedPost } from "@services/post/getScrapedPost";
import React, { useCallback, useRef } from "react";

export const ScrapContent = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } =
    useInfinite<CommonPostResponseProps>({ key: "userScraps", fetchFunc: getScrapedPost, limit: 10 });
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

  if (!data || data.pages[0].posts.length === 0) return <NoContent type="scrap" />;

  return (
    <div className="">
      {data.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          <p className="p-2 py-8 text-16 md:text-20">{page.totalScraps}개의 스크랩</p>
          {page.posts
            .filter((post): post is TPost => post !== null)
            .map((post, postIndex) => (
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
