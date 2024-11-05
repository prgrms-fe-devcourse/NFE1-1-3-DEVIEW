import { useParams } from "react-router-dom";
import { DEV_DEPENDENCIES_LIST } from "@constants/devDependenciesList";
import { useQuery } from "@tanstack/react-query";
import { searchPosts } from "@services/post/searchPosts";
import { Loading } from "@components/Common/Loading";
import PostListItem from "@components/Common/PostListItem";
import { NoContent } from "@components/Common/NoContent";

type DevDependencies = (typeof DEV_DEPENDENCIES_LIST)[number];

function isDevDependency(filter: string): filter is DevDependencies {
  return DEV_DEPENDENCIES_LIST.includes(filter as DevDependencies);
}

export default function SearchPage() {
  const formatNumber = (num: number) => {
    const digit = 10 ** (`${num}`.length - 1);
    let unit = "";
    if (digit >= 10000) {
      unit = "만";
    } else if (digit === 1000) {
      unit = "천";
    } else {
      return num;
    }
    return (Math.floor(num / (digit / 10)) / 10).toFixed(1) + unit;
  };
  const { query = "" } = useParams();
  const [filteredQuery, filtersFromUrl] = query.split("&");

  const filters: DevDependencies[] = filtersFromUrl?.includes("filters=")
    ? decodeURIComponent(filtersFromUrl.split("filters=")[1].split("&")[0]).split(",").filter(isDevDependency)
    : [];

  const { data, isLoading, error } = useQuery({
    queryKey: ["searchPosts", filteredQuery, filters],

    queryFn: () =>
      searchPosts({
        keyword: filteredQuery,
        devDependencies: filters.length > 0 ? filters : [],
        page: 1,
        limit: 10
      }),
    enabled: true
  });

  if (isLoading)
    return (
      <div className="flex">
        <Loading />
      </div>
    );
  if (error) return <div>Error: {(error as Error).message}</div>;
  if (!data || data.posts.length === 0) return <NoContent type="search" />;
  return (
    <>
      <div className="mx-auto mt-2 max-w p-4 md:mt-12">
        <p className="mb-6 flex text-16 md:text-20">
          <span className="mr-4">검색 조건</span>
          {filters.length > 0 &&
            filters.map((filter) => (
              <div key={filter} className="mr-2 items-center rounded bg-lightgray px-2 py-1 text-10 md:text-12">
                <span>{filter}</span>
              </div>
            ))}
        </p>

        <p className="mb-6 text-16 md:text-20">
          <span>‘</span>
          <span className="font-bold">{filteredQuery}</span>
          <span>’에 대한 검색 결과입니다.</span>
        </p>
        <p className="text-14 md:text-16">
          <span className="font-bold text-secondary">{formatNumber(data.totalPosts)}</span>개의 질문
        </p>
      </div>
      <div className="mx-auto max-w p-4">
        {data.posts.map((postItem) => (
          <PostListItem key={postItem._id} postItem={postItem} />
        ))}
      </div>
    </>
  );
}
