export const RankHeader = () => {
  return (
    <thead>
      <tr className="text-12 font-bold leading-10 md:text-16">
        <th className="items-center justify-center border-b border-solid border-black px-8 py-4 text-left">Rank</th>
        <th className="items-center justify-center border-b border-solid border-black px-4 py-4">아이디</th>
        <th className="items-center justify-center border-b border-solid border-black px-4 py-4">소속</th>
        <th className="items-center justify-center border-b border-solid border-black px-4 py-4 text-right md:px-8">
          추천수
        </th>
      </tr>
    </thead>
  );
};
