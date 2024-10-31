import { EditDelete, PostDetailHeader, CodeViewer } from "@components/PostDetailPage";
import { TPostDetail } from "@customTypes/post";
type PostDetailProps = {
  post: TPostDetail;
};
export const PostDetail = ({ post }: PostDetailProps) => {
  return (
    <>
      <section className="flex justify-between border-b border-solid border-gray pb-3 pr-3">
        <PostDetailHeader title={post.title} post={post} />
        <EditDelete />
      </section>
      <article className="text-16 font-medium">{post.detail}</article>
      <section>
        <CodeViewer content={post.code} />
      </section>
    </>
  );
};
