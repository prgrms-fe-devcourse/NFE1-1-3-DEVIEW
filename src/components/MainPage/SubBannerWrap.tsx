import { SubBanner } from "@components/MainPage/SubBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecentUnansweredPosts } from "@services/post/getRecentUnansweredPosts";
import { SubBannerDefault } from "@components/MainPage/SubBannerDefault";
export const SubBannerWrap = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["subBanners"],
    queryFn: getRecentUnansweredPosts
  });
  return (
    <div className="flex w-full">
      <Swiper
        className="w-full p-4"
        spaceBetween={48}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2
          }
        }}
      >
        <SwiperSlide className="transition-transform hover:scale-105">
          {data[0] ? <SubBanner color="secondary" data={data[0]} /> : <SubBannerDefault color="secondary" />}
        </SwiperSlide>

        <SwiperSlide className="transition-transform hover:scale-105">
          {data[1] ? <SubBanner color="lightgreen" data={data[1]} /> : <SubBannerDefault color="lightgreen" />}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
