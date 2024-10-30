import { useSuspenseQueries } from "@tanstack/react-query";
import MainBanner from "@components/MainPage/MainBanner";
import { getMostViewedPosts, GetMostViewedPostsResponseProps } from "@services/post/getMostViewedPosts";
import { getMostViewedTodayPosts } from "@services/post/getMostViewedTodayPosts";
import { getUserRankings, GetUserRankingsResponseProps } from "@services/user/getUserRankings";

type BannerPreset = {
  type: string;
  color: string;
  bannerTitle: string;
  defaultContent: React.ReactNode;
};

const bannerPreset: BannerPreset[] = [
  {
    type: "Question",
    color: "bg-secondary",
    bannerTitle: "궁금한 것 질문하기!",
    defaultContent: (
      <>
        궁금한 내용이 있다면
        <br />
        지금 바로 물어보세요
      </>
    )
  },
  {
    type: "MostViewedPosts",
    color: "bg-purple",
    bannerTitle: "역대 최다 조회수!",
    defaultContent: ""
  },
  {
    type: "MostViewedTodayPosts",
    color: "bg-skyblue",
    bannerTitle: "오늘의 인기 질문",
    defaultContent: ""
  },
  { type: "BestReviewer", color: "bg-lightgreen", bannerTitle: "베스트 리뷰어!", defaultContent: "" }
];

export const MainBannerWrap = () => {
  const [mostViewedPosts, mostViewedTodayPosts, bestReviewer] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["mostViewedPosts"],
        queryFn: () => getMostViewedPosts({ limit: 1 }),
        select: (data: GetMostViewedPostsResponseProps) => data[0]
      },
      {
        queryKey: ["mostViewedTodayPosts"],
        queryFn: getMostViewedTodayPosts
      },
      {
        queryKey: ["bestReviewer"],
        queryFn: () => getUserRankings({ page: 1, limit: 1 }),
        select: (data: GetUserRankingsResponseProps) => data.userRanking[0]
      }
    ]
  });

  if (mostViewedPosts.isError || mostViewedTodayPosts.isError || bestReviewer.isError) {
    return <div>에러발생</div>;
  }

  type BannerData = {
    content: React.ReactNode;
    link: string;
  };

  const bannerData: BannerData[] = [
    { content: "", link: "/post/create" },
    { content: mostViewedPosts.data.title, link: `/post/${mostViewedPosts.data._id}` },
    { content: mostViewedTodayPosts.data.title, link: `/post/${mostViewedTodayPosts.data._id}` },
    {
      content: (
        <>
          받은 추천 수 {bestReviewer.data.totalThumbsCount}회 <br />
          {bestReviewer.data.totalThumbsCount}님
        </>
      ),
      link: `/post/user/${bestReviewer.data.userId}`
    }
  ];
  {
    bannerPreset.map((preset, i) => <MainBanner key={preset.type} bannerPreset={preset} bannerData={bannerData[i]} />);
  }
  return (
    <>
      {bannerPreset.map((type, i) => (
        <MainBanner key={i} bannerPreset={type} bannerData={bannerData[i]} />
      ))}
    </>
  );
};
