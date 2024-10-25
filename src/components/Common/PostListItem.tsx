import { PostInfo } from "@customTypes/postInfo";
import { PostListIcon } from "@components/Common/PostListIcon";

export const PostListItem = ({ postItem, ranked }: { postItem: PostInfo; ranked?: number }) => {
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

  const formatDate = (create_at: Date) => {
    return `${create_at.getFullYear()}년 ${create_at.getMonth()}월 ${create_at.getDate()}일`;
  };

  return (
    <div className="relative p-2.5">
      {ranked && (
        <div className={`absolute left-0 top-0 h-8 w-8 bg-ranked bg-contain bg-center bg-no-repeat flex-center`}>
          {ranked}
        </div>
      )}
      <div className="flex w-full gap-3 border-b-2 border-solid border-primary border-opacity-40 px-1 py-2.5">
        <PostListIcon devDependencies={"React"} />
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-2">
            <div className="text-24">{postItem.title}</div>
            <div className="flex items-end text-14 text-gray">{formatDate(postItem.created_at)}</div>
          </div>
          <div className="flex gap-2.5">
            {postItem.devDependencies.map((v, i) => {
              return (
                <div className="rounded bg-lightgray px-2 py-1 text-14 text-black" key={i}>
                  {v}
                </div>
              );
            })}
          </div>
          <div className="flex gap-2.5">
            <div className="flex gap-1 font-bold">
              <div className="text-pink">♥</div>
              <div>{postItem.recommend}</div>
            </div>
            <div className="flex gap-1 font-bold">
              <div>답변</div>
              <div>{postItem.comment}</div>
            </div>
            <div className="flex gap-1 text-gray">
              <div>조회수</div>
              <div>{formatNumber(postItem.view)}</div>
            </div>
            <div className="flex gap-1 text-primary">
              <div className="underline">{postItem.author}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};