import { getMostViewedPosts, GetMostViewedPostsResponseProps } from "@services/post/getMostViewedPosts";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export const MostViewedPostBanner = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["mostViewedPosts"],
    queryFn: () => getMostViewedPosts({ limit: 1 }),
    select: (data: GetMostViewedPostsResponseProps) => data[0]
  });
  return (
    <Link to={`/post/${data._id}`} className="flex h-full w-full flex-col gap-7 p-5 pb-10">
      <div className="text-16">역대 최다 조회수!</div>
      <div className="w-full whitespace-normal break-words break-all text-20">{data.title}</div>
    </Link>
  );
};
