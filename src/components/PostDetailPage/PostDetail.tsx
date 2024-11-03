import { EditDelete, PostDetailHeader, CodeViewer } from "@components/PostDetailPage";
import { TPostDetail } from "@customTypes/post";
import { usePostDetailStore } from "@stores/postDetailStore";
type PostDetailProps = {
  post: TPostDetail;
};

export const PostDetail = ({ post }: PostDetailProps) => {
  const postDetail = usePostDetailStore((state) => state.post);

  // early return으로 안전하게 처리
  if (!postDetail) {
    return null; // 빈 화면으로 처리
  }

  console.log("PostDetailstore: ", postDetail);
  return (
    <>
      <section className="flex justify-between border-b border-solid border-gray pb-3 pr-3">
        <PostDetailHeader title={post.title} post={post} />
        {postDetail.isAuthor && <EditDelete />}
      </section>
      <article className="text-16 font-medium">{post.detail}</article>
      <section>
        <CodeViewer content={postDetail.code} />
      </section>
    </>
  );
};
