import { PopularPostListwrap } from "@components/MainPage/PopularPostListwrap";
import { PostSectionSkeleton } from "@components/MainPage/PostSectionSkeleton";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

export const PopularPostSection = () => {
  // API로 교체 에정

  return (
    <div className="m-auto max-w px-10 md:py-3">
      <div className="flex items-center justify-between border-b-2 border-solid border-lightgray py-4">
        <div className="text-16 md:text-24">⭐ 인기 게시글 TOP 3</div>
        <Link to="/post/popular" className="text-12 text-secondary md:text-16">
          더보기-&gt;
        </Link>
      </div>
      <ErrorBoundary fallback={<PostSectionSkeleton isError={true} />}>
        <Suspense fallback={<PostSectionSkeleton />}>
          <PopularPostListwrap />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
