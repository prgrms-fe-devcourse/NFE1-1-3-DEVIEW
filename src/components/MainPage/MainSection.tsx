import MainBanner from "@components/MainPage/MainBanner";
import { Suspense } from "react";

export const MainSection = () => {
  const bannerType = ["Question", "MostViewedPosts", "MostViewedTodayPosts", "BestReviewer"];

  return (
    <div className="bg-lightpurple flex-center">
      <div className="flex max-w gap-10 px-10 py-12">
        <Suspense fallback={<div>Loading...</div>}>
          {bannerType.map((type, i) => (
            <MainBanner key={i} bannerType={type} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};
