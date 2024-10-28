import { MyComment } from "@components/MyPage/MyComment";
import { TComment } from "@customTypes/comment";

type CommentsContentProps = {
  data: TComment[];
};

export const CommentsContent = ({ data }: CommentsContentProps) => {
  return (
    <div className="">
      {data.map((comment) => (
        <MyComment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};
