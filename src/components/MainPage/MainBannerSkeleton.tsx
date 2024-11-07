type MainBannerSkeletonProps = { isError?: boolean; error?: string };

export const MainBannerSkeleton = ({ isError = false, error }: MainBannerSkeletonProps) => {
  const bgColor = isError ? "bg-pink " : "bg-lightgray animate-pulse";
  return <div className={`flex h-52 rounded-lg ${bgColor} p-4 text-16 text-white-sub shadow`}>{error}</div>;
};
