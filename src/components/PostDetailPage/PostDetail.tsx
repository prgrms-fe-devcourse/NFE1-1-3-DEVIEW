import { CodeViewer, PostDetailEditDelete, PostDetailHeader } from "@components/PostDetailPage";
import { usePostDetailStore } from "@stores/postDetailStore";
import { useUserStore } from "@stores/userStore";

export const PostDetail = () => {
  const postDetail = usePostDetailStore((state) => state.post);
  const { userInfo } = useUserStore();
  // early return으로 안전하게 처리
  if (!postDetail) {
    return null; // 빈 화면으로 처리
  }

  return (
    <>
      <section className="flex justify-between border-b border-solid border-gray pb-3 pr-3">
        <PostDetailHeader />
        {(postDetail.isAuthor || userInfo?.role === "admin") && <PostDetailEditDelete />}
      </section>
      <article className="text-16 font-medium">{postDetail.detail}</article>
      <section>
        <CodeViewer content={postDetail.code} />
      </section>
    </>
  );
};
