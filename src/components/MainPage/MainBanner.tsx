type MainBannerProps = { bannerType: "Question" | "MostViewedPosts" | "MostViewedTodayPosts" | "BestReviewer" };

const bannerPreset = {
  Question: {
    color: "bg-secondary",
    bannerTitle: "궁금한 것 질문하기!"
  },
  MostViewedPosts: {
    color: "bg-purple",
    bannerTitle: "역대 최다 조회수!"
  },
  MostViewedTodayPosts: {
    color: "bg-skyblue",
    bannerTitle: "오늘의 인기 질문"
  },
  BestReviewer: {
    color: "bg-lightgreen",
    bannerTitle: "베스트 리뷰어!"
  }
};

const MainBanner = ({ bannerType }: MainBannerProps) => {
  return (
    <div
      className={`flex h-52 w-80 flex-col justify-between rounded-lg p-5 pb-10 text-white-pure shadow ${bannerPreset[bannerType].color}`}
    >
      <div className="flex flex-col gap-7">
        <div className="text-16">{bannerPreset[bannerType].bannerTitle}</div>
        <div className="text-24">asdf</div>
      </div>
      {bannerType === "Question" && <div className="flex justify-end text-24">질문하기-&gt;</div>}
      {bannerType === "BestReviewer" && <div className="flex justify-start text-24">작성글 확인하기</div>}
    </div>
  );
};

export default MainBanner;
