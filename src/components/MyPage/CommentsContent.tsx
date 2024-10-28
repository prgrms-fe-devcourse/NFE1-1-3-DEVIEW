import { MyComment } from "@components/MyPage/MyComment";
import { CommentInfo } from "@customTypes/commentInfo";

type CommentsContentProps = {
  data: CommentInfo[];
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
