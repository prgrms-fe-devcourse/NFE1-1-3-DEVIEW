import { RankHeader } from "@components/RankPage/RankHeader";
import { RankListItem } from "@components/RankPage/RankListItem";

interface RankData {
  rank: number;
  name: string;
  team: string;
  recommend: number;
}

interface RankTableProps {
  data: RankData[];
}

export const RankTable = ({ data }: RankTableProps) => {
  return (
    <table className="mx-auto w-full table-fixed border-separate rounded-lg border border-solid border-lightgray shadow md:w-3/4">
      <RankHeader />
      <tbody>
        {data.map((item, index) => (
          <RankListItem key={index} rank={item.rank} name={item.name} team={item.team} recommend={item.recommend} />
        ))}
      </tbody>
    </table>
  );
};
