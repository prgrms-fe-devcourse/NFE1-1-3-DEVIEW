import { Loading } from "@components/Common/Loading";
import { NoContent } from "@components/Common/NoContent";
import { PostListItem } from "@components/Common/PostListItem";
import { CommonPostResponseProps, TPost } from "@customTypes/post";
import { useInfinite } from "@hooks/useInfinite";
import ErrorPage from "@pages/ErrorPage";
import { getScrapedPost } from "@services/post/getScrapedPost";
import { errorAlert } from "@utils/sweetAlert/alerts";
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

  if (error) {
    errorAlert({ title: "스크랩한 글을 불러오는 중 오류가 발생했습니다.", text: error.message });
    return <ErrorPage />;
  }

  if (!data || data.pages[0].posts.length === 0) return <NoContent type="scrap" />;
  
  return (
    <div className="">
      <p className="p-2 py-4 text-16 md:text-20">{data.pages[0].totalPosts}개의 스크랩</p>
      {data.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
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
