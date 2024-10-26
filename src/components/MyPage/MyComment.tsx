import { useNavigate } from "react-router-dom";

type MyCommentProps = {
  comment: {
    _id: string;
    post_id: string;
    author: string;
    content: string;
    created_at: string;
    recommend: number;
    post_title?: string;
  };
};

export const MyComment = ({ comment }: MyCommentProps) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/post/${comment.post_id}`);
  };
  return (
    <div
      className="group flex cursor-pointer flex-col gap-2 border-b-2 border-solid border-gray py-2 md:gap-4 md:py-4"
      onClick={onClick}
    >
      <p className="truncate text-justify text-14 text-black md:text-20">{comment.content}</p>
      <p>
        <span className="text-16 text-secondary group-hover:underline md:text-24">{comment.post_title}</span>
        <span className="text-14 text-black md:text-20"> 에 남긴 댓글</span>
      </p>
      <p className="text-12 text-gray md:text-16">{comment.created_at}</p>
    </div>
  );
};
