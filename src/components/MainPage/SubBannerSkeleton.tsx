import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { SubBannerDefault } from "@components/MainPage/SubBannerDefault";

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
      <div className={` ${bgColors} h-52 rounded-lg shadow`}>{error}</div>
    );
  return (
    <div className="flex w-full">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="w-full px-4 py-10 md:px-10"
        spaceBetween={48}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        breakpoints={{
          768: {
            slidesPerView: 2
          }
        }}
      >
        <SwiperSlide className="transition-transform md:hover:scale-105">{content}</SwiperSlide>

        <SwiperSlide className="transition-transform md:hover:scale-105">{content}</SwiperSlide>
      </Swiper>
    </div>
  );
};
