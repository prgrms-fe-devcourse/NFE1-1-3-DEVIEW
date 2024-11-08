import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { SubBannerDefault } from "@components/MainPage/SubBannerDefault";
import { SubBannerSlide } from "@components/MainPage/SubBannerSlide";

type SubBannerProps = {
  error?: string;
  isError?: boolean;
};

export const SubBannerSkeleton = ({ error, isError = false }: SubBannerProps) => {
  const bgColors = isError ? "bg-pink" : "bg-lightgray animate-pulse";
  const content =
    error === "답변이 없는 최근 게시물이 없습니다." ? (
      <SubBannerDefault color="secondary" />
    ) : (
      <div className={` ${bgColors} h-52 truncate rounded-lg text-20 shadow md:text-24`}>{error}</div>
    );
  return (
    <SubBannerSlide>
      <SwiperSlide className="transition-transform md:hover:scale-105">{content}</SwiperSlide>
      <SwiperSlide className="transition-transform md:hover:scale-105">{content}</SwiperSlide>
    </SubBannerSlide>
  );
};
