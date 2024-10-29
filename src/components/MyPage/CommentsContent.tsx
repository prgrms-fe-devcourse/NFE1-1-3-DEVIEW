import { Loading } from "@components/Common/Loading";
import { MyComment } from "@components/MyPage/MyComment";
import { NoUserContent } from "@components/MyPage/NoUserContent";
import { TComment } from "@customTypes/comment";
import { getUserComments } from "@services/comment/getUserComments";
import { useEffect, useState } from "react";

export const CommentsContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [commentList, setCommentList] = useState<TComment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getUserComments();
        setCommentList(response.comments);
      } catch (err) {
        setError(err instanceof Error ? err.message : "댓글 정보를 불러올 수 없습니다");
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (isLoading)
    return (
      <div className="flex">
        <Loading />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  if (commentList.length === 0) return <NoUserContent type="comment" />;

  return (
    <div className="">
      {commentList.map((comment) => (
        <MyComment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};
