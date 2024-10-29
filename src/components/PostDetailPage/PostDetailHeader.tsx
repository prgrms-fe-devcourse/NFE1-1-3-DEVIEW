import { LanVersionTagList, PostMetaList } from "@components/PostDetailPage";
import { PostMeta, TechVersion } from "@customTypes/postDetail";

type PostDetailHeaderProps = {
  title: string;
  meta: PostMeta;
};
// 더미데이터 - 모든 필수 필드 포함
const dummyTechLists: TechVersion[] = [
  {
    id: "1", // id 필수
    lan: "React", // lan 필수
    version: "18.2.0" // version 필수
  },
  {
    id: "2",
    lan: "TypeScript",
    version: "5.0.0"
  },
  {
    id: "3",
    lan: "Next.js",
    version: "14.0.0"
  }
];
export const PostDetailHeader = ({ title, meta }: PostDetailHeaderProps) => (
  <div className="flex flex-col gap-[0.625rem]">
    <h1 className="text-20 font-medium">{title}</h1>
    <PostMetaList meta={meta} />
    <LanVersionTagList techLists={dummyTechLists} />
  </div>
);

export default PostDetailHeader;
