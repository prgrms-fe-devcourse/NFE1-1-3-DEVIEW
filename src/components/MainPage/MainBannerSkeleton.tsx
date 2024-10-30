import { Loading } from "@components/Common/Loading";

export const MainBannerSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4].map((v) => (
        <div key={v} className={`flex h-52 w-80 rounded-lg bg-black opacity-20 shadow`}>
          <Loading />
        </div>
      ))}
    </>
  );
};
