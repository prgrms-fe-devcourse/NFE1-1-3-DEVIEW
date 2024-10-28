import { PostListItem } from "@components/Common/PostListItem";
import { PostInfo } from "@customTypes/postInfo";

type LikesContentProps = {
  data: PostInfo[];
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
