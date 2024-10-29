import { Loading } from "@components/Common/Loading";
import { PostListItem } from "@components/Common/PostListItem";
import { NoUserContent } from "@components/MyPage/NoUserContent";
import { DevDependencies, TPost } from "@customTypes/post";
import { getUserPosts } from "@services/post/getUserPosts";
import { useEffect, useState } from "react";

export const PostsContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [postList, setPostList] = useState<TPost[]>([]);

  // TODO: 파라미터 값 수정?
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getUserPosts({
          page: 1,
          limit: 10,
          title: "",
          content: "",
          devDependencies: [] as DevDependencies[]
        });
        setPostList(response.posts);
      } catch (err) {
        setError(err instanceof Error ? err.message : "게시글 정보를 불러올 수 없습니다");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading)
    return (
      <div className="flex">
        <Loading />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  if (postList.length === 0) return <NoUserContent type="post" />;

  return (
    <div className="">
      {postList.map((post) => (
        <PostListItem key={post._id} postItem={post} />
      ))}
    </div>
  );
};
