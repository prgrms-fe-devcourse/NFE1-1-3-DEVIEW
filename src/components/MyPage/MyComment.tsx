import { CodeViewer } from "@components/PostDetailPage";
import { TComment } from "@customTypes/comment";
import { useNavigate } from "react-router-dom";

type MyCommentProps = {
  comment: TComment;
};

export const MyComment = ({ comment }: MyCommentProps) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/post/${comment.postId}`);
  };
  return (
    <div
      className="group flex cursor-pointer flex-col gap-2 border-b-2 border-solid border-primary border-opacity-40 px-2 py-2 md:gap-4 md:py-4"
      onClick={onClick}
    >
      {/* <p className="truncate text-justify text-14 text-black md:text-16">{comment.content}</p> */}
      <CodeViewer content={comment.content} />
      <p>
        <span className="break-words text-16 text-secondary group-hover:underline md:text-20">{comment.postTitle}</span>
        <span className="text-14 text-black md:text-16"> 에 남긴 댓글</span>
      </p>
      <p className="text-12 text-gray md:text-16">{comment.createdAt}</p>
    </div>
  );
};
