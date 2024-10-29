import PostMetaList from "@components/PostDetailPage/PostMetaList";
import { PostMeta } from "@customTypes/postDetail";

type PostDetailHeaderProps = {
  title: string;
  meta: PostMeta;
};

export const PostDetailHeader = ({ title, meta }: PostDetailHeaderProps) => (
  <div className="flex flex-col gap-[0.625rem]">
    <h1 className="text-20 font-medium">{title}</h1>
    <PostMetaList meta={meta} />
    <div>태그들~~</div>
  </div>
);

export default PostDetailHeader;
