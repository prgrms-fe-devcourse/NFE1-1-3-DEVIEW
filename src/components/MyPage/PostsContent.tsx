import { Loading } from "@components/Common/Loading";
import { NoContent } from "@components/Common/NoContent";
import { PostListItem } from "@components/Common/PostListItem";
import { CommonPostResponseProps } from "@customTypes/post";
import { useInfinite } from "@hooks/useInfinite";
import ErrorPage from "@pages/ErrorPage";
import { getMyPosts } from "@services/post/getMyPosts";
import { errorAlert } from "@utils/sweetAlert/alerts";
import React, { useCallback, useRef } from "react";

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
      <div className="flex h-[calc(100vh-20rem)] items-center justify-center">
        <Loading />
      </div>
    );

  if (error) {
    errorAlert({ title: "게시글을 불러오는 중 오류가 발생했습니다.", text: error.message });
    return <ErrorPage />;
  }

  if (!data || data.pages[0].posts.length === 0) return <NoContent type="post" />;

  return (
    <div className="">
      <p className="p-2 py-4 text-16 md:text-20">{data.pages[0].totalPosts}개의 게시글</p>
      {data.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
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
