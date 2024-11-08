import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

type SubBannerSlideProps = {
  children: React.ReactNode;
};

export const SubBannerSlide = ({ children }: SubBannerSlideProps) => {
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
        {children}
      </Swiper>
    </div>
  );
};
