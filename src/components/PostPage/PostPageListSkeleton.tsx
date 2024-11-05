import { PostItemSkeleton } from "@components/Common/PostItemSkeleton";

type PostPageSkeletonProps = {
  isError?: boolean;
};
export const PostPageSkeleton = ({ isError = false }: PostPageSkeletonProps) => {
  const bgColor = isError ? "bg-pink opacity-40" : "bg-lightgray animate-pulse";

  return (
    <div>
      <div className="flex w-full items-center justify-between p-8">
        <div className={`h-5 w-24 rounded ${bgColor} `}></div>
      </div>

      <div className="min-h-screen px-3 py-5">
        <div className="p-2.5">
          <PostItemSkeleton bgColor={bgColor} />
        </div>
      </div>
    </div>
  );
};
