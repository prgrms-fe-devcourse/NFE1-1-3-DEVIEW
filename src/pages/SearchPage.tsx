import { PostListItem } from "@components/Common/PostListItem";
import { Link, useParams } from "react-router-dom";
import { DEV_DEPENDENCIES_LIST } from "@constants/devDependenciesList";
export type DevDependencies = (typeof DEV_DEPENDENCIES_LIST)[number];

export default function SearchPage() {
  const postData = {
    _id: "1",
    title: "제목",
    content: "댓글",
    author: {
      _id: "1",
      username: "mmjjaa"
    },
    devDependencies: ["C++", "Css"] as DevDependencies[],
    likesCount: 23,
    viewsCount: 34,
    scrapsCount: 4,
    commentsCount: 3,
    createdAt: "2024-10-28T02:13:20.475+00:00",
    updatedAt: "2024-10-28T02:13:20.475+00:00",
    __v: 500
  };

  const { query } = useParams<{ query: string }>();
  const safeQuery = query || "";
  const filteredQuery = safeQuery.split("&")[0];
  const filtersFromUrl = query ? query.split("&")[1] : "";
  const filters = filtersFromUrl ? filtersFromUrl.split(",") : [];
  return (
    <>
      <div className="mx-auto max-w p-8">
        <div className="flex items-center justify-between">
          <p className="mb-6 flex text-20 md:mb-0 md:text-20">
            <span className="mr-4">검색 조건</span>

            {filters.length > 0 &&
              filters.map((filter) => (
                <div key={filter} className="mr-2 items-center rounded bg-lightgray px-2 py-1 text-12">
                  <span>{filter}</span>
                </div>
              ))}
          </p>
          <Link className="primary-btn hidden p-1 md:m-4 md:h-10 md:w-44 md:flex-center" to="/post/create">
            코드 질문하기
          </Link>
        </div>

        <p className="mb-6 text-16 md:text-20">
          <span>‘</span>
          <span className="font-bold">{filteredQuery}</span>
          <span>’에 대한 검색 결과입니다.</span>
        </p>
        <p className="text-14 md:text-16">123,456개의 질문</p>
      </div>
      <div className="mx-auto max-w p-8">
        <PostListItem postItem={postData} />
        <PostListItem postItem={postData} />
        <PostListItem postItem={postData} />
        <PostListItem postItem={postData} />
      </div>
    </>
  );
}
