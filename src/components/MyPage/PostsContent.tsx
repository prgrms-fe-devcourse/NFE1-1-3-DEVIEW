import { PostListItem } from "@components/Common/PostListItem";
import { PostInfo } from "@customTypes/postInfo";

type PostsContentProps = {
  data: PostInfo[];
};

export const PostsContent = ({ data }: PostsContentProps) => {
  return (
    <div className="">
      {data.map((post) => (
        <PostListItem key={post._id} postItem={post} />
      ))}
    </div>
  );
};
