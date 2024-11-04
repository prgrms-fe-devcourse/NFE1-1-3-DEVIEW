import { Loading } from "@components/Common/Loading";
import { PostList } from "@components/Common/PostList";
import { CommonPostResponseProps } from "@customTypes/post";
import useSuspenseInfinite from "@hooks/useSuspenseInfinite";
import { getPopularPosts } from "@services/post/getPopularPosts";
import { getPosts } from "@services/post/getPosts";
import { getUserPosts } from "@services/user/getUserPosts";
import { useCallback, useRef } from "react";
type PostPageUserPostListProps = {
  sort: "latest" | "views";
  id?: string;
  setUserId?: React.Dispatch<React.SetStateAction<string>>;
};

export const PostPageList = ({ sort, id, setUserId }: PostPageUserPostListProps) => {
  const fc = sort === "views" ? getPopularPosts : getPosts;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSuspenseInfinite<
    CommonPostResponseProps & { userId?: string }
  >({
    key: ["PostPage", sort, id],
    fetchFunc: id
      ? ({ page, limit }) => getUserPosts({ page, limit, sort: sort, userId: id })
      : ({ page, limit }) => fc({ page, limit }),
    limit: 10
  });
  if (data.pages[0]?.userId && setUserId) {
    setUserId(data.pages[0].userId);
  }
  const posts = data.pages.flatMap((page) => page.posts);

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

  return (
    <div>
      <div className="flex w-full items-center justify-between p-8">
        <div className="flex text-20">
          <div className="font-bold text-secondary">{data?.pages[0].totalPosts}</div>개의 질문
        </div>
      </div>
      {posts && (
        <>
          <PostList posts={posts} />
          <div ref={lastPostElementRef}></div>
        </>
      )}
      {isFetchingNextPage && (
        <div className="flex">
          <Loading />
        </div>
      )}
    </div>
  );
};
