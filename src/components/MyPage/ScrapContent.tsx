import { Loading } from "@components/Common/Loading";
import { NoContent } from "@components/Common/NoContent";
import { PostListItem } from "@components/Common/PostListItem";
import { CommonPostResponseProps, TPost } from "@customTypes/post";
import { getScrapedPost } from "@services/post/getScrapedPost";
import { useQuery } from "@tanstack/react-query";

export const ScrapContent = () => {
  const { data, isLoading, error } = useQuery<CommonPostResponseProps, Error>({
    queryKey: ["userScraps"],
    queryFn: () => getScrapedPost({ page: 1, limit: 10 })
  });

  if (isLoading)
    return (
      <div className="flex">
        <Loading />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  if (!data || !data.posts) return <NoContent type="scrap" />;
  const filteredPosts = data.posts.filter((post): post is TPost => post !== null);
  if (filteredPosts.length === 0) return <NoContent type="scrap" />;

  return (
    <div className="">
      {filteredPosts.map((post) => (
        <PostListItem key={post._id} postItem={post} />
      ))}
    </div>
  );
};
