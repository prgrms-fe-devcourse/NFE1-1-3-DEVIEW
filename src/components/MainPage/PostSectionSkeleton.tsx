import { PostItemSkeleton } from "@components/Common/PostItemSkeleton";

type PostSectionSkeletonProps = {
  isError?: boolean;
};
export const PostSectionSkeleton = ({ isError }: PostSectionSkeletonProps) => {
  const bgColor = isError ? "bg-pink opacity-40" : "bg-lightgray";

  return (
    <div className={`px-3 py-5 ${isError ? "" : "animate-pulse"}`}>
      {[1, 2, 3].map((v) => (
        <div key={v} className="p-2.5">
          <PostItemSkeleton bgColor={bgColor} />
        </div>
      ))}
    </div>
  );
};
