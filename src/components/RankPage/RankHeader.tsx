export const RankHeader = () => {
  return (
    <thead>
      <tr className="h-10 font-bold leading-10">
        <th className="items-center justify-center border-b border-solid border-black px-8 py-4 text-left">Rank</th>
        <th className="items-center justify-center border-b border-solid border-black px-4 py-4">이름</th>
        <th className="items-center justify-center border-b border-solid border-black px-4 py-4">소속</th>
        <th className="items-center justify-center border-b border-solid border-black px-8 py-4 text-right">추천수</th>
      </tr>
    </thead>
  );
};
