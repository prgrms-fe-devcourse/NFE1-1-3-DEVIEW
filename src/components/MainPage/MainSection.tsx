import { Suspense } from "react";
import { MainBannerSkeleton } from "@components/MainPage/MainBannerSkeleton";
import { ErrorBoundary } from "react-error-boundary";
import MainBanner from "@components/MainPage/MainBanner";
import { BestReviewerBanner } from "@components/MainPage/BestReviewerBanner";
import { MostViewedPostBanner } from "@components/MainPage/MostViewedPostBanner";
import { QuestionBanner } from "@components/MainPage/QuestionBanner";
import { MostViewedTodayPostsBanner } from "@components/MainPage/MostViewedTodayPostsBanner";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type bannersType = {
  banner: React.ComponentType;
  color: "bg-secondary" | "bg-purple" | "bg-skyblue" | "bg-lightgreen";
};
export const MainSection = () => {
  const banners: bannersType[] = [
    { banner: QuestionBanner, color: "bg-secondary" },
    { banner: MostViewedPostBanner, color: "bg-purple" },
    { banner: MostViewedTodayPostsBanner, color: "bg-skyblue" },
    { banner: BestReviewerBanner, color: "bg-lightgreen" }
  ];
  return (
    <div className="bg-lightpurple">
      <Swiper
        className="w-full max-w px-10 py-12"
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          },
          1280: {
            slidesPerView: 4
          }
        }}
      >
        {banners.map(({ banner, color }, i) => (
          <SwiperSlide key={i} className="transition-transform hover:scale-105">
            <ErrorBoundary fallback={<MainBannerSkeleton isError={true} />}>
              <Suspense fallback={<MainBannerSkeleton />}>
                <MainBanner color={color}>{React.createElement(banner)}</MainBanner>
              </Suspense>
            </ErrorBoundary>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
