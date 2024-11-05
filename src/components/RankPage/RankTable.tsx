import { RankHeader } from "@components/RankPage/RankHeader";
import { RankListItem } from "@components/RankPage/RankListItem";
import { TRank } from "@customTypes/rank";

type RankTableProps = {
  data: TRank[];
};

export const RankTable = ({ data }: RankTableProps) => {
  return (
    <div className="mx-auto w-full rounded border border-solid border-lightgray px-4 pb-0 pt-4 md:px-8 md:pb-2 md:pt-8">
      <RankHeader />

      <div>
        {data.map((item, index) => (
          <RankListItem
            key={index}
            _id={item._id}
            rank={item.rank}
            userId={item.userId}
            team={item.team}
            recommend={item.recommend}
          />
        ))}
      </div>
    </div>
  );
};
