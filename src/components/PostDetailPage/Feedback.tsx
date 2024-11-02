// Feedback.tsx
// 변경: debounce 제거하여 즉시 반응하도록 수정
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PiSiren } from "react-icons/pi";
import { usePostLike } from "@hooks/usePostLike";
import { TPostDetail } from "@customTypes/post";

type FeedbackProps = {
  postId: string;
  post: TPostDetail;
};

export const Feedback = ({ postId, post }: FeedbackProps) => {
  const { mutate } = usePostLike();

  const onLikeClick = () => {
    mutate({ postId });
  };

  return (
    <section className="w-full flex-center">
      <div className="m-auto flex w-36 gap-2 rounded-[30px] px-7 py-4 shadow">
        <button
          onClick={onLikeClick}
          className={`flex items-center gap-[0.03rem] transition-colors duration-200 ease-in-out hover:opacity-70 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${
            post.liked ? "text-red-500 hover:text-red-600" : "text-gray-500 hover:text-gray-600"
          }`}
        >
          {post.liked ? (
            <AiFillHeart className="h-[17px] w-[22px] flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-110 fill-pink" />
          ) : (
            <AiOutlineHeart className="h-[17px] w-[22px] flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-110" />
          )}
          <span className={`min-w-[20px] text-center ${post.liked && "text-red-500"}`}>{post.likesCount}</span>
        </button>
        <button className="hover:opacity-70">
          <PiSiren className="h-[17px] w-[22px] flex-shrink-0" />
        </button>
      </div>
    </section>
  );
};
