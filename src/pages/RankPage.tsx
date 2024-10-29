import { Loading } from "@components/Common/Loading";
import { RankTable } from "@components/RankPage/RankTable";
import { getUserRankings } from "@services/user/getUserRankings";
import { useQuery } from "@tanstack/react-query";
import { GROUP_LIST } from "@constants/groupList";
import { TRank } from "@customTypes/rank";

export default function RankPage() {
  const page = 1;
  const limit = 10;

  const { data, isLoading, error } = useQuery({
    queryKey: ["UserRankings", page],
    queryFn: () => getUserRankings({ page, limit })
  });

  if (isLoading)
    return (
      <div className="flex">
        <Loading />
      </div>
    );
  if (error) return <div>Error: {(error as Error).message}</div>;

  const rankData: TRank[] =
    data?.userRanking.map((user, index) => ({
      rank: index + 1,
      name: user.username,
      team: user.group as (typeof GROUP_LIST)[number],
      recommend: user.totalThumbsCount
    })) || [];

  return (
    <div className="mx-auto max-w p-16">
      {rankData.length > 0 ? (
        <RankTable data={rankData} />
      ) : (
        <div className="text-gray flex-center">아직 유저 랭킹이 없습니다.</div>
      )}
    </div>
  );
}
