import { MyComment } from "@components/MyPage/MyComment";

type CommentsContentProps = {
  data: {
    _id: string;
    post_id: string;
    author: string;
    content: string;
    created_at: string;
    recommend: number;
    post_title?: string;
  }[];
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
