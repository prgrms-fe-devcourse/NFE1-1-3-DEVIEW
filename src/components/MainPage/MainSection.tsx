import { MainBannerWrap } from "@components/MainPage/MainBannerWrap";
import { Suspense } from "react";
import { MainBannerSkeleton } from "@components/MainPage/MainBannerSkeleton";
export const MainSection = () => {
  return (
    <div className="bg-lightpurple flex-center">
      <div className="flex max-w gap-10 px-10 py-12">
        <Suspense fallback={<MainBannerSkeleton />}>
          <MainBannerWrap />
        </Suspense>
      </div>
    </div>
  );
};
