import { LuThumbsUp } from "react-icons/lu";
import { useThumbComment } from "@hooks/useThumbComment";
import { useQueryClient } from "@tanstack/react-query";
import { COMMENTS_QUERY_KEY } from "@constants/queryKey";
import { CommonCommentResponseProps } from "@customTypes/comment";
import { InfiniteData } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

type CommentInteractionProps = {
  commentId: string;
};

export const CommentInteraction = ({ commentId }: CommentInteractionProps) => {
  const { id: postId } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const { mutate: thumbMutation, isPending } = useThumbComment();

  // 현재 댓글의 추천 상태와 개수를 가져옴
  const commentsData = queryClient.getQueryData<InfiniteData<CommonCommentResponseProps>>([COMMENTS_QUERY_KEY, postId]);

  const currentComment = commentsData?.pages
    .flatMap((page) => page.comments)
    .find((comment) => comment._id === commentId);

  const isThumbed = currentComment?.thumbed ?? false;
  const thumbsCount = currentComment?.thumbsCount ?? 0;

  const handleThumbClick = () => {
    thumbMutation({ commentId });
  };

  return (
    <section className="w-full flex-center">
      <div className="m-auto flex w-36 gap-2 rounded-[30px] px-7 py-4 shadow">
        <button
          className={`flex items-center gap-[0.03rem] ${isThumbed && "fill-pink"} ${isPending ? "opacity-50" : ""}`}
          onClick={handleThumbClick}
          disabled={isPending}
        >
          <LuThumbsUp
            className={`h-[17px] w-[22px] flex-shrink-0 transition-transform duration-200 ease-in-out ${
              !isPending && "hover:scale-110"
            } ${isThumbed && "fill-pink"} `}
          />
          <span className="min-w-[20px] text-center">{thumbsCount}</span>
        </button>
      </div>
    </section>
  );
};
