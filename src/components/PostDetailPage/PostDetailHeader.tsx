import { LanVersionTagList, PostMetaList } from "@components/PostDetailPage";
import { usePostDetailStore } from "@stores/postDetailStore";

export const PostDetailHeader = () => {
  const postDetail = usePostDetailStore((state) => state.post);

  // early return으로 null/undefined 처리
  if (!postDetail) return null;

  return (
    <div className="flex flex-col gap-[0.625rem]">
      <h1 className="text-16 font-medium md:text-20">{postDetail.title}</h1>
      <PostMetaList
        createdAt={postDetail.createdAt}
        viewsCount={postDetail.viewsCount}
        commentCount={postDetail.commentsCount}
        userId={postDetail.author.userId}
        _id={postDetail.author._id}
      />
      <LanVersionTagList devDependencies={postDetail.devDependencies} devVersions={postDetail.devVersions} />
    </div>
  );
};

export default PostDetailHeader;
