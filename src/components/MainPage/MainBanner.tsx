import { ReactNode } from "react";
import { Link } from "react-router-dom";

type MainBannerProps = {
  bannerPreset: {
    type: string;
    color: string;
    bannerTitle: string;
    defaultContent: ReactNode;
  };
  bannerData: {
    content: ReactNode;
    link: string;
  };
};

const MainBanner = ({ bannerPreset, bannerData }: MainBannerProps) => {
  const inner = bannerData.content === "" ? bannerPreset.defaultContent : bannerData.content;
  return (
    <Link
      to={bannerData.link}
      className={`flex h-52 w-80 flex-col justify-between rounded-lg p-5 pb-10 text-white-pure shadow transition-all hover:scale-105 ${bannerPreset.color}`}
    >
      <div className="flex flex-col gap-7">
        <div className="text-16">{bannerPreset.bannerTitle}</div>
        <div className="text-24">{inner}</div>
      </div>
      {bannerPreset.type === "Question" && <div className="flex justify-end text-24">질문하기-&gt;</div>}
      {bannerPreset.type === "BestReviewer" && <div className="flex justify-start text-24">작성글 확인하기</div>}
    </Link>
  );
};

export default MainBanner;
