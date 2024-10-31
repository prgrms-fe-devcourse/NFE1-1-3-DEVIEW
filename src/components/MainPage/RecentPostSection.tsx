import { PostSectionSkeleton } from "@components/MainPage/PostSectionSkeleton";
import { RecentPostListwrap } from "@components/MainPage/RecentPostListWrap";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
export const RecentPostSection = () => {
  return (
    <div className="m-auto max-w px-10 py-3">
      <div className="flex items-center justify-between border-b-2 border-solid border-lightgray py-4">
        <div className="text-28">👀 최신 게시글 </div>
        <Link to="/post" className="text-16 text-secondary">
          더보기-&gt;
        </Link>
      </div>
      <ErrorBoundary fallback={<PostSectionSkeleton isError={true} />}>
        <Suspense fallback={<PostSectionSkeleton />}>
          <RecentPostListwrap />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
