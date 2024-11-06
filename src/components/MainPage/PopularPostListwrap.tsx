import { PostList } from "@components/Common/PostList";
import { getPopularPosts } from "@services/post/getPopularPosts";
import { useSuspenseQuery } from "@tanstack/react-query";
export const PopularPostListwrap = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["popularPosts"],
    queryFn: () => getPopularPosts({ page: 1, limit: 3 })
  });

  return (
    <div className="py-2 md:px-4">
      <PostList posts={data.posts} isRankedList={true} />
    </div>
  );
};
