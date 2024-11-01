type MainBannerSkeletonProps = { isError?: boolean };

export const MainBannerSkeleton = ({ isError = false }: MainBannerSkeletonProps) => {
  const bgColor = isError ? "bg-pink " : "bg-lightgray animate-pulse";
  return <div className={`flex h-52 rounded-lg ${bgColor} shadow`}></div>;
};
