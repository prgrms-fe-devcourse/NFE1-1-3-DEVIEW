import { SubBanner } from "@components/MainPage/SubBanner";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecentUnansweredPosts } from "@services/post/getRecentUnansweredPosts";
import { SubBannerDefault } from "@components/MainPage/SubBannerDefault";
import { SubBannerSlide } from "@components/MainPage/SubBannerSlide";
export const SubBannerWrap = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["subBanners"],
    queryFn: getRecentUnansweredPosts
  });
  return (
    <SubBannerSlide>
      <SwiperSlide className="transition-transform md:hover:scale-105">
        {data[0] ? <SubBanner color="secondary" data={data[0]} /> : <SubBannerDefault color="secondary" />}
      </SwiperSlide>

      <SwiperSlide className="transition-transform md:hover:scale-105">
        {data[1] ? <SubBanner color="lightgreen" data={data[1]} /> : <SubBannerDefault color="lightgreen" />}
      </SwiperSlide>
    </SubBannerSlide>
  );
};
