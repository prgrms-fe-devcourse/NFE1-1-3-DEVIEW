import { PostMetaItem } from "@components/PostDetailPage";
import { PostMeta } from "@customTypes/postDetail";

type PostMetaListProps = {
  meta: PostMeta;
};

export const PostMetaList = ({ meta }: PostMetaListProps) => {
  const metaItems = [
    { label: "작성일", value: meta.createdAt },
    { label: "조회수", value: meta.views },
    { label: "답변", value: meta.replies },
    { label: "작성자", value: meta.id }
  ];

  return (
    <div className="flex gap-4 text-12">
      {metaItems.map(({ label, value }) => (
        <PostMetaItem key={label} label={label} value={value} />
      ))}
    </div>
  );
};
export default PostMetaList;
