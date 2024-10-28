import { PostListItem } from "@components/Common/PostListItem";
import { TPost } from "@customTypes/post";

type PostsContentProps = {
  data: TPost[];
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
