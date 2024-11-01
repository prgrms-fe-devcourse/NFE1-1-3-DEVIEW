import { SubBannerWrap } from "@components/MainPage/SubBannerWrap";
import { SubBannerSkeleton } from "@components/MainPage/SubBannerSkeleton";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const SubSection = () => {
  return (
    <div className="bg-lightyellow flex-center">
      <div className="flex w-full max-w flex-col gap-10 px-10 py-10">
        <div className="text-28 font-semibold">답변을 기다리는 질문</div>
        <ErrorBoundary fallback={<SubBannerSkeleton isError={true} />}>
          <Suspense fallback={<SubBannerSkeleton />}>
            <SubBannerWrap />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
