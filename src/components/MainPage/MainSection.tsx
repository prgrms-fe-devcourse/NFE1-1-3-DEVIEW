import { MainBannerWrap } from "@components/MainPage/MainBannerWrap";
import { Suspense } from "react";
import { MainBannerSkeleton } from "@components/MainPage/MainBannerSkeleton";
import { ErrorBoundary } from "react-error-boundary";
export const MainSection = () => {
  return (
    <div className="bg-lightpurple flex-center">
      <div className="flex max-w gap-10 px-10 py-12">
        <ErrorBoundary fallbackRender={({ error }) => <MainBannerSkeleton type="error" error={error.message} />}>
          <Suspense fallback={<MainBannerSkeleton type="loading" />}>
            <MainBannerWrap />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
