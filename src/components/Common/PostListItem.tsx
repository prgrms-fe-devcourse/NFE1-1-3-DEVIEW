import { TPost } from "@customTypes/post";
import { PostListIcon } from "@components/Common/PostListIcon";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

type PostListItemProps = {
  postItem: TPost;
  ranked?: number;
};

const PostListItem = forwardRef<HTMLDivElement, PostListItemProps>(({ postItem, ranked }, ref) => {
  // 숫자 포맷함수
  // 1000이상일 경우 '만','천' 단위로 표시
  // 소수점 한자리 이후로 내림처리
  const formatNumber = (num: number) => {
    const digit = 10 ** (`${num}`.length - 1);
    let unit = "";
    if (digit >= 10000) {
      unit = "만";
    } else if (digit === 1000) {
      unit = "천";
    } else {
      return num;
    }
    return (Math.floor(num / (digit / 10)) / 10).toFixed(1) + unit;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };
  return (
    <div className="relative p-2.5" ref={ref}>
      {ranked && (
        <div
          className={`absolute left-0 top-2 h-6 w-6 bg-ranked bg-contain bg-center bg-no-repeat text-12 flex-center md:top-0 md:h-8 md:w-8 md:text-14`}
        >
          {ranked}
        </div>
      )}
      <div className="flex w-full gap-3 border-b-2 border-solid border-primary border-opacity-40 px-1 py-2.5">
        <PostListIcon devDependencies={postItem.devDependencies[0]} />
        <div className="flex min-w-0 flex-grow flex-col gap-2.5">
          <Link to={`/post/${postItem._id}`} className="flex w-full flex-col md:flex-row md:items-baseline md:gap-2">
            <h3 className="w-full whitespace-normal break-words break-all text-14 decoration-black hover:underline md:text-20">
              {postItem.title}
            </h3>
            <div className="mt-1 flex-shrink-0 whitespace-nowrap text-12 text-gray md:mt-0 md:text-14">
              {formatDate(postItem.createdAt)}
            </div>
          </Link>
          <div className="flex gap-2.5">
            {postItem.devDependencies.map((v, i) => {
              return (
                <div className="rounded bg-lightgray px-2 py-1 text-12 text-black md:text-14" key={i}>
                  {v}
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2.5">
            <div className="flex flex-wrap items-center gap-2.5 2xs:flex-nowrap">
              <div className="flex gap-1 text-12 font-bold md:text-14">
                <div className="text-pink">♥</div>
                <div>{postItem.likesCount}</div>
              </div>
              <div className="flex gap-1 text-12 font-bold md:text-14">
                <div>답변</div>
                <div>{postItem.commentsCount}</div>
              </div>
              <div className="flex gap-1 text-12 text-gray md:text-14">
                <div>조회수</div>
                <div>{formatNumber(postItem.viewsCount)}</div>
              </div>
            </div>
            <Link
              to={`/post/user/${postItem.author?._id}`}
              className="flex w-full gap-1 text-12 text-primary 2xs:w-auto md:text-14"
            >
              <div className="underline">{postItem.author?.userId}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PostListItem;
