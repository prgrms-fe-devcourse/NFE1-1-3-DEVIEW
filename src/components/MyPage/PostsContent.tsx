import { Loading } from "@components/Common/Loading";
import { PostListItem } from "@components/Common/PostListItem";
import { NoContent } from "@components/Common/NoContent";
import { TPost } from "@customTypes/post";
import { getMyPosts } from "@services/post/getMyPosts";
import { useQuery } from "@tanstack/react-query";

export const PostsContent = () => {
  const { data, isLoading, error } = useQuery<{ posts: TPost[] }, Error>({
    queryKey: ["userPosts"],
    queryFn: () =>
      getMyPosts({
        page: 1,
        limit: 10,
        title: "",
        content: "",
        devDependencies: []
      })
  });
  if (isLoading)
    return (
      <div className="flex">
        <Loading />
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  if (!data || data.posts.length === 0) return <NoContent type="post" />;

  return (
    <div className="">
      {data.posts.map((post) => (
        <PostListItem key={post._id} postItem={post} />
      ))}
    </div>
  );
};
