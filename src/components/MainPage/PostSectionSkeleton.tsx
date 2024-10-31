import { PostItemSkeleton } from "@components/Common/PostItemSkeleton";

type PostSectionSkeletonProps = {
  isError?: boolean;
};
export const PostSectionSkeleton = ({ isError }: PostSectionSkeletonProps) => {
  const bgColor = isError ? "bg-pink opacity-40" : "bg-lightgray";

  return (
    <div className={`h-[26rem] px-3 py-5 ${isError ? "" : "animate-pulse"}`}>
      <div className="p-2.5">
        {[1, 2, 3].map((v) => (
          <PostItemSkeleton bgColor={bgColor} key={v} />
        ))}
      </div>
    </div>
  );
};
