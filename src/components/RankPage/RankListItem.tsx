import { TRank } from "@customTypes/rank";
import Avatar from "boring-avatars";
import { useNavigate } from "react-router-dom";

type RankListItemProps = TRank;

export const RankListItem = ({ rank, userId, _id, team, recommend }: RankListItemProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 text-12 leading-10 md:text-16">
      <span className="flex-shrink-0 flex-grow-0 basis-1/12 text-left font-bold text-primary">{rank}</span>
      <div className="flex flex-shrink-0 flex-grow-0 basis-3/12 items-center space-x-2 overflow-hidden">
        <Avatar name={userId ?? ""} variant="beam" className="h-4 w-4 sm:h-8 sm:w-8 md:h-12 md:w-12" />
        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-center">{userId}</span>
      </div>
      <span className="flex-shrink-0 flex-grow-0 basis-2/12 text-center font-bold text-gray">{team}</span>
      <span className="flex-shrink-0 flex-grow-0 basis-2/12 text-right font-bold text-gray">추천수 {recommend}</span>
      <button
        className="flex-shrink-0 flex-grow-0 basis-3/12 text-right font-bold text-primary hover:text-secondary hover:underline"
        onClick={() => navigate(`/post/user/${_id}`)}
      >
        게시글 보기
      </button>
    </div>
  );
};
