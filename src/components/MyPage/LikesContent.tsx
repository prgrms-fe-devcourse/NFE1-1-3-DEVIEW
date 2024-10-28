import { PostListItem } from "@components/Common/PostListItem";
import { TPost } from "@customTypes/post";

type LikesContentProps = {
  data: TPost[];
};

export const LikesContent = ({ data }: LikesContentProps) => {
  return (
    <div className="">
      {data.map((post) => (
        <PostListItem key={post._id} postItem={post} />
      ))}
    </div>
  );
};
