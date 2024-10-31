type PostItemSkeletonProps = {
  bgColor: string;
};

export const PostItemSkeleton = ({ bgColor }: PostItemSkeletonProps) => {
  return (
    <div className="flex gap-3 border-b-2 border-solid border-lightgray border-opacity-40 px-1 py-2.5">
      <div className={`h-14 w-14 rounded ${bgColor}`}></div>
      <div className="flex flex-col gap-2.5">
        <div className={`h-6 w-80 rounded ${bgColor} decoration-black`}></div>
        <div className="flex gap-2.5">
          <div className={`h-6 w-24 rounded ${bgColor}`}></div>
          <div className={`h-6 w-24 rounded ${bgColor}`}></div>
        </div>
        <div className="flex h-4 gap-2.5">
          <div className={`w-8 rounded ${bgColor}`}></div>
          <div className={`w-8 rounded ${bgColor}`}></div>
          <div className={`w-8 rounded ${bgColor}`}></div>
          <div className={`w-8 rounded ${bgColor}`}></div>
        </div>
      </div>
    </div>
  );
};
