import { COMMENTS_QUERY_KEY } from "@constants/queryKey";
import { CommonCommentResponseProps } from "@customTypes/comment";
import { useThumbComment } from "@hooks/useThumbComment";
import { useUserStore } from "@stores/userStore";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { errorAlert } from "@utils/sweetAlert/alerts";
import { FaRegThumbsUp } from "react-icons/fa6";
import { useParams } from "react-router-dom";
type CommentInteractionProps = {
  commentId: string;
};

export const CommentInteraction = ({ commentId }: CommentInteractionProps) => {
  const { isLoggedIn } = useUserStore();
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
    if (!isLoggedIn) {
      errorAlert({ title: "댓글 따봉 오류 발생", text: "로그인 해야 댓글에 따봉을 날릴 수 있어요!" });
      return;
    }
    thumbMutation({ commentId });
  };

  return (
    <section className="w-full flex-center">
      <div className="m-auto flex rounded-[30px] px-6 py-4 shadow">
        <button
          className={`flex items-center gap-[0.03rem] ${isThumbed && "fill-pink"} ${isPending && "opacity-50"}`}
          onClick={handleThumbClick}
          disabled={isPending}
        >
          <FaRegThumbsUp
            className={`flex-shrink-0 transition-transform duration-200 ease-in-out ${
              !isPending && "hover:scale-110"
            } ${isThumbed && "fill-pink"} `}
          />
          <span className="min-w-[20px] text-center text-14 md:text-16">{thumbsCount}</span>
        </button>
      </div>
    </section>
  );
};
