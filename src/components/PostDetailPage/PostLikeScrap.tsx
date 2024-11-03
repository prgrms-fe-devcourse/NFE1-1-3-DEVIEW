import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { TPostDetail } from "@customTypes/post";
import { usePostLikeScrap } from "@hooks/usePostLikeScrap";
import { likePost } from "@services/post/likePost";
import { scrapPost } from "@services/post/scrapPost";

type PostLikeScrapProps = {
  postId: string;
  post: TPostDetail;
};

export const PostLikeScrap = ({ postId, post }: PostLikeScrapProps) => {
  const { mutate: likeMutate } = usePostLikeScrap({
    actionKey: "liked",
    countKey: "likesCount",
    mutationFn: likePost
  });

  const { mutate: scrapMutate } = usePostLikeScrap({
    actionKey: "scraped",
    countKey: "scrapsCount",
    mutationFn: scrapPost
  });

  const onLikeClick = () => {
    likeMutate({ postId });
  };

  const onScrapClick = () => {
    scrapMutate({ postId });
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
            <AiFillHeart className="h-[17px] w-[22px] flex-shrink-0 fill-pink transition-transform duration-200 ease-in-out hover:scale-110" />
          ) : (
            <AiOutlineHeart className="h-[17px] w-[22px] flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-110" />
          )}
          <span className={`min-w-[20px] text-center ${post.liked && "text-red-500"}`}>{post.likesCount}</span>
        </button>
        <button
          onClick={onScrapClick}
          className={`flex items-center gap-[0.03rem] hover:opacity-70 ${
            post.scraped ? "text-blue-500 hover:text-blue-600" : "text-gray-500 hover:text-gray-600"
          }`}
        >
          {post.scraped ? (
            <IoBookmark className="h-[17px] w-[22px] flex-shrink-0 fill-secondary transition-transform duration-200 ease-in-out hover:scale-110" />
          ) : (
            <IoBookmarkOutline className="h-[17px] w-[22px] flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-110" />
          )}
          <span className={`min-w-[20px] text-center ${post.scraped && "text-blue-500"}`}>{post.scrapsCount}</span>
        </button>
      </div>
    </section>
  );
};
