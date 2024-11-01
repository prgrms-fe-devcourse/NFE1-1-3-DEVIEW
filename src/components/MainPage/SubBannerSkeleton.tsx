type SubBannerProps = {
  isError?: boolean;
};

export const SubBannerSkeleton = ({ isError = false }: SubBannerProps) => {
  const bgColors = isError ? "bg-pink" : "bg-lightgray animate-pulse";
  return (
    <div className="flex w-full gap-12">
      <div
        className={`relative flex w-[calc(50%-24px)] break-words ${bgColors} h-52 flex-col justify-between rounded-lg p-5 pb-10 text-white-pure shadow`}
      ></div>
      <div
        className={`relative flex w-[calc(50%-24px)] break-words ${bgColors} h-52 flex-col justify-between rounded-lg p-5 pb-10 text-white-pure shadow`}
      ></div>
    </div>
  );
};
