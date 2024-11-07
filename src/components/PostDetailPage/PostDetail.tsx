import { CodeViewer, PostDetailEditDelete, PostDetailHeader } from "@components/PostDetailPage";
import ErrorPage from "@pages/ErrorPage";
import { usePostDetailStore } from "@stores/postDetailStore";
import { useUserStore } from "@stores/userStore";

export const PostDetail = () => {
  const postDetail = usePostDetailStore((state) => state.post);
  const { userInfo } = useUserStore();

  if (!postDetail || !postDetail._id) {
    return <ErrorPage />;
  }

  return (
    <>
      <section className="flex justify-between border-b border-solid border-gray pb-3 pr-3">
        <PostDetailHeader />
        {(postDetail.isAuthor || userInfo?.role === "admin") && <PostDetailEditDelete />}
      </section>
      <article className="whitespace-pre-wrap break-words text-16 font-medium">{postDetail.detail}</article>
      <section>
        <CodeViewer content={postDetail.code} />
      </section>
    </>
  );
};
