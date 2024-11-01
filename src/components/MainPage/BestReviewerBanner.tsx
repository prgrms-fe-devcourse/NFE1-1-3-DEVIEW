import { getUserRankings, GetUserRankingsResponseProps } from "@services/user/getUserRankings";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export const BestReviewerBanner = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["bestReviewer"],
    queryFn: () => getUserRankings({ page: 1, limit: 1 }),
    select: (data: GetUserRankingsResponseProps) => data.userRanking[0]
  });
  return (
    <>
      <Link to={`/post/user/${data.userId}`} className="flex h-full w-full flex-col justify-between gap-7 p-5 pb-10">
        <div className="flex flex-col gap-7">
          <div className="text-16">베스트 리뷰어!</div>
          <div className="w-full whitespace-normal break-words break-all text-20">
            받은 추천 수 {data.totalThumbsCount}회 <br />
            {data.userId}님
          </div>
        </div>
        <div className="flex justify-end text-20 font-bold">작성글 확인하기</div>
      </Link>
    </>
  );
};
