import { Loading } from "@components/Common/Loading";
import { MyComment } from "@components/MyPage/MyComment";
import { NoUserContent } from "@components/MyPage/NoUserContent";
import { getUserComments } from "@services/comment/getUserComments";
import { useQuery } from "@tanstack/react-query";

export const CommentsContent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userComments"],
    queryFn: getUserComments
  });

  if (isLoading)
    return (
      <div className="flex">
        <Loading />
      </div>
    );

  if (error) return <div>Error: {(error as Error).message}</div>;

  if (!data || data.comments.length === 0) return <NoUserContent type="comment" />;

  return (
    <div className="">
      {data.comments.map((comment) => (
        <MyComment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};
