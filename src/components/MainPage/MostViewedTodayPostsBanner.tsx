import { getMostViewedTodayPosts } from "@services/post/getMostViewedTodayPosts";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export const MostViewedTodayPostsBanner = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["mostViewedTodayPosts"],
    queryFn: getMostViewedTodayPosts
  });
  return (
    <Link to={`/post/${data._id}`} className="flex h-full w-full flex-col gap-7 p-5 pb-10">
      <div className="text-16">오늘의 인기 질문</div>
      <div className="w-full whitespace-normal break-words break-all text-20">{data.title}</div>
    </Link>
  );
};
