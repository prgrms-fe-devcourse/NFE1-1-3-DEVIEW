import { SubBannerWrap } from "@components/MainPage/SubBannerWrap";
import { SubBannerSkeleton } from "@components/MainPage/SubBannerSkeleton";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const SubSection = () => {
  return (
    <div className="bg-lightyellow flex-center">
      <div className="flex w-full max-w flex-col">
        <div className="px-4 pt-10 text-24 font-semibold md:px-10">답변을 기다리는 질문</div>
        <ErrorBoundary fallback={<SubBannerSkeleton isError={true} />}>
          <Suspense fallback={<SubBannerSkeleton />}>
            <SubBannerWrap />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
