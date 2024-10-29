import { Loading } from "@components/Common/Loading";
import { NoContent } from "@components/Common/NoContent";
import { MyComment } from "@components/MyPage/MyComment";
import { CommonCommentResponseProps } from "@customTypes/comment";
import { getUserComments } from "@services/comment/getUserComments";
import { useQuery } from "@tanstack/react-query";

export const CommentsContent = () => {
  const { data, isLoading, error } = useQuery<CommonCommentResponseProps, Error>({
    queryKey: ["userComments"],
    queryFn: () => getUserComments({ page: 1, limit: 10 })
  });

  if (isLoading)
    return (
      <div className="flex">
        <Loading />
      </div>
    );

  if (error) return <div>Error: {(error as Error).message}</div>;

  if (!data || data.comments.length === 0) return <NoContent type="comment" />;

  return (
    <div className="">
      {data.comments.map((comment) => (
        <MyComment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};
