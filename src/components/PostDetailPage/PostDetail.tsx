import { CodeViewer, EditDelete, PostDetailHeader } from "@components/PostDetailPage";
import { usePostDetailStore } from "@stores/postDetailStore";

export const PostDetail = () => {
  const postDetail = usePostDetailStore((state) => state.post);

  // early return으로 안전하게 처리
  if (!postDetail) {
    return null; // 빈 화면으로 처리
  }

  console.log("PostDetailstore: ", postDetail);
  return (
    <>
      <section className="flex justify-between border-b border-solid border-gray pb-3 pr-3">
        <PostDetailHeader />
        {postDetail.isAuthor && <EditDelete />}
      </section>
      <article className="text-16 font-medium">{postDetail.detail}</article>
      <section>
        <CodeViewer content={postDetail.code} />
      </section>
    </>
  );
};
