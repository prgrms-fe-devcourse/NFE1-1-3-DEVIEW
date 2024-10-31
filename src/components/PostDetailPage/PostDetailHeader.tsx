import { LanVersionTagList, PostMetaList } from "@components/PostDetailPage";
import { PostMeta } from "@customTypes/postDetail";
import { DevDependenciesList } from "@customTypes/post";

type PostDetailHeaderProps = {
  title: string;
  meta: PostMeta;
};
// 더미데이터 - 모든 필수 필드 포함
const dummyTechLists: DevDependenciesList = [
  {
    dependency: "React", // dependency 필수
    version: "18.2.0" // version 필수
  },
  {
    dependency: "Css",
    version: "5.0.0"
  },
  {
    dependency: "Html",
    version: "14.0.0"
  }
];
export const PostDetailHeader = ({ title, meta }: PostDetailHeaderProps) => (
  <div className="flex flex-col gap-[0.625rem]">
    <h1 className="text-20 font-medium">{title}</h1>
    <PostMetaList meta={meta} />
    <LanVersionTagList dependencyList={dummyTechLists} />
  </div>
);

export default PostDetailHeader;
