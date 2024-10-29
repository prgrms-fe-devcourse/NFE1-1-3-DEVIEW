interface RankListItemProps {
  rank: number;
  name: string;
  team: string;
  recommend: number;
}

export const RankListItem = ({ rank, name, team, recommend }: RankListItemProps) => {
  return (
    <tr className="text-12 leading-10 md:text-16">
      <td className="items-center justify-center border-b border-solid border-lightgray px-10 py-7 text-left font-bold leading-4 text-primary">
        {rank}
      </td>
      <td className="items-center justify-center border-b border-solid border-lightgray px-4 py-7 text-center leading-4">
        {name}
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
