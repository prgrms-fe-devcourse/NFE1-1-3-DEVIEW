import { TPostDetail } from "@customTypes/post";
import { usePostLikeScrap } from "@hooks/usePostLikeScrap";
import { usePostReport } from "@hooks/usePostReport";
import { likePost } from "@services/post/likePost";
import { scrapPost } from "@services/post/scrapPost";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { PiSiren } from "react-icons/pi";
import { customPrompt, successAlert } from "@utils/sweetAlert/alerts";
type PostLikeScrapProps = {
  postId: string;
  post: TPostDetail;
};

export const PostDetailInteraction = ({ postId, post }: PostLikeScrapProps) => {
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

  const { mutate: reportMutate } = usePostReport({
    onSuccess: () => {}
  });

  const onLikeClick = () => {
    likeMutate({ postId });
  };

  const onScrapClick = () => {
    scrapMutate({ postId });
  };

  const onReportClick = async () => {
    const { value: reason } = await customPrompt({
      title: "신고 사유",

      inputPlaceholder: "신고된 게시물은 관리자가 확인 후 조치를 취하게 됩니다."
    });
    if (reason?.trim() && reason.length > 0) {
      reportMutate({ postId, reason });
      successAlert({ title: "신고가 접수되었습니다." });
    }
  };
  return (
    <section className="w-full flex-center">
      <div className="m-auto flex justify-around gap-2 rounded-[30px] px-4 py-4 shadow">
        <button onClick={onLikeClick} className={`flex items-center gap-[0.03rem] hover:opacity-70`}>
          {post.liked ? (
            <AiFillHeart className="h-[17px] w-[22px] flex-shrink-0 fill-pink transition-transform duration-200 ease-in-out hover:scale-110" />
          ) : (
            <AiOutlineHeart className="h-[17px] w-[22px] flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-110" />
          )}
          <span
            className={`${post.liked && "min-w-[11px] flex-shrink-0 text-center transition-transform duration-200 ease-in-out hover:scale-110"}`}
          >
            {post.likesCount}
          </span>
        </button>
        <button onClick={onScrapClick} className={`flex items-center gap-[0.03rem] hover:opacity-70`}>
          {post.scraped ? (
            <IoBookmark className="h-[17px] w-[22px] flex-shrink-0 fill-secondary transition-transform duration-200 ease-in-out hover:scale-110" />
          ) : (
            <IoBookmarkOutline className="h-[17px] w-[22px] flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-110" />
          )}
          <span
            className={`${post.scraped && "min-w-[11px] flex-shrink-0 text-center transition-transform duration-200 ease-in-out hover:scale-110"}`}
          >
            {post.scrapsCount}
          </span>
        </button>
        <button onClick={onReportClick} className="flex items-center gap-[0.03rem] hover:opacity-70">
          <PiSiren className="h-[19px] w-[22px] flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-110 hover:fill-pink" />
        </button>
      </div>
    </section>
  );
};
