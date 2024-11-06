import { PostList } from "@components/Common/PostList";
import { getPosts } from "@services/post/getPosts";
import { useSuspenseQuery } from "@tanstack/react-query";
export const RecentPostListwrap = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts({ page: 1, limit: 3 })
  });
  return (
    <div className="py-2 md:px-4">
      <PostList posts={data.posts} />
    </div>
  );
};
