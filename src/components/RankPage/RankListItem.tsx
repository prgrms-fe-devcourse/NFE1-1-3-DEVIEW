import { TRank } from "@customTypes/rank";
import { useNavigate } from "react-router-dom";

type RankListItemProps = TRank;

export const RankListItem = ({ rank, userId, team, recommend }: RankListItemProps) => {
  const navigate = useNavigate();
  return (
    <tr className="text-12 leading-10 md:text-16">
      <td className="items-center justify-center border-b border-solid border-lightgray px-10 py-7 text-left font-bold leading-4 text-primary">
        {rank}
      </td>
      <td
        className="cursor-pointer items-center justify-center border-b border-solid border-lightgray px-4 py-7 text-center leading-4 hover:text-secondary hover:underline"
        onClick={() => navigate(`/post/user/${userId}`)}
      >
        {userId}
      </td>
      <td className="items-center justify-center border-b border-solid border-lightgray px-4 py-7 text-center font-bold leading-4 text-gray">
        {team}
      </td>
      <td className="items-center justify-end border-b border-solid border-lightgray px-5 py-7 text-right font-bold leading-4 text-gray md:px-10">
        {recommend}
      </td>
    </tr>
  );
};
