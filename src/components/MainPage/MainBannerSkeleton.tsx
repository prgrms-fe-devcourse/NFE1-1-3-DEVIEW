import { Loading } from "@components/Common/Loading";

export const MainBannerSkeleton = ({ type, error = "" }: { type: "loading" | "error"; error?: string }) => {
  return (
    <>
      {type === "loading" ? (
        [1, 2, 3, 4].map((v) => (
          <div key={v} className="flex h-52 w-80 rounded-lg bg-black opacity-20 shadow">
            <Loading />
          </div>
        ))
      ) : (
        <div className="h-52 w-[50rem] flex-col gap-6 rounded-lg bg-secondary p-5 pb-10 text-24 text-white-pure shadow flex-center">
          <div className="text-28">{error ? error : "API 서버에 문제가 발생했습니다."}</div>
          <div> 잠시 후 다시 시도해주세요.</div>
        </div>
      )}
    </>
  );
};
