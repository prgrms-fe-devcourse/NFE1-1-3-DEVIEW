import { Loading } from "@components/Common/Loading";
import { RankTable } from "@components/RankPage/RankTable";
import { getUserRankings } from "@services/user/getUserRankings";
import { useQuery } from "@tanstack/react-query";
import { GROUP_LIST } from "@constants/groupList";
import { TRank } from "@customTypes/rank";
import { TbAlertTriangle } from "react-icons/tb";

export default function RankPage() {
  const page = 1;
  const limit = 10;

  const { data, isLoading, error } = useQuery({
    queryKey: ["UserRankings", page],
    queryFn: () => getUserRankings({ page, limit })
  });

  if (isLoading)
    return (
      <div className="flex h-[calc(100vh-20rem)] items-center justify-center">
        <Loading />
      </div>
    );
  if (error) return <div>Error: {(error as Error).message}</div>;

  const rankData: TRank[] =
    data?.userRanking.map((user, index) => ({
      rank: index + 1,
      userId: user.userId,
      _id: user._id,
      team: user.group as (typeof GROUP_LIST)[number],
      recommend: user.totalThumbsCount
    })) || [];

  return (
    <div className="mx-auto max-w p-4 py-12">
      {rankData.length > 0 ? (
        <RankTable data={rankData} />
      ) : (
        <div className="min-h-80 text-secondary flex-center">
          <TbAlertTriangle className="h-8 w-8 md:h-11 md:w-11" />
          아직 유저 랭킹이 없습니다.
        </div>
      )}
    </div>
  );
}
