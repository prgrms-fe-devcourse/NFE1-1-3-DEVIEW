import { LanVersionTagList, PostMetaList } from "@components/PostDetailPage";
import { TPostDetail } from "@customTypes/post";

type PostDetailHeaderProps = {
  title: string;
  post: TPostDetail;
};
//updateAt -> createdAt
//조회수 -> viewsCount
//답변수 -> commentCount
//id -> userId
export const PostDetailHeader = ({ title, post }: PostDetailHeaderProps) => {
  return (
    <div className="flex flex-col gap-[0.625rem]">
      <h1 className="text-20 font-medium">{title}</h1>
      <PostMetaList
        createdAt={post.createdAt}
        viewsCount={post.viewsCount}
        commentCount={post.commentsCount}
        userId={post.author.userId}
      />
      <LanVersionTagList devDependencies={post.devDependencies} devVersions={post.devVersions} />
    </div>
  );
};

export default PostDetailHeader;
