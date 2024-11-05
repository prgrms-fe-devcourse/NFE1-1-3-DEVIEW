import { TRank } from "@customTypes/rank";
import Avatar from "boring-avatars";
import { useNavigate } from "react-router-dom";

type RankListItemProps = TRank;

export const RankListItem = ({ rank, userId, _id, team, recommend }: RankListItemProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between border-b border-solid border-b-lightgray px-4 py-4 text-12 leading-10 last-of-type:border-none md:text-16">
      <span className="flex-shrink-0 flex-grow-0 basis-1/12 text-left font-bold text-primary">{rank}</span>
      <div className="flex flex-shrink-0 flex-grow-0 basis-3/12 items-center space-x-2 overflow-hidden">
        <Avatar name={userId ?? ""} variant="beam" className="mr-4 h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12" />
        <span className="w-28 overflow-hidden text-ellipsis whitespace-nowrap">{userId}</span>
      </div>
      <span className="hidden flex-shrink-0 flex-grow-0 basis-2/12 text-center font-bold text-gray md:block">
        {team}
      </span>
      <span className="flex-shrink-0 flex-grow-0 basis-2/12 text-right font-bold text-gray">추천수 {recommend}</span>
      <div className="flex-shrink-0 flex-grow-0 basis-3/12 text-right">
        <button
          className="font-bold text-primary hover:text-secondary hover:underline focus:outline-none"
          onClick={() => navigate(`/post/user/${_id}`)}
        >
          게시글 보기
        </button>
      </div>
    </div>
  );
};
