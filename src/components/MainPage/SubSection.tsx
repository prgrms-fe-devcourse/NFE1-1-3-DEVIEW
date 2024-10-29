import { SubBanner } from "@components/MainPage/SubBanner";

export const SubSection = () => {
  return (
    <div className="bg-lightyellow flex-center">
      <div className="flex w-full max-w flex-col gap-10 px-10 py-10">
        <div className="text-28">답변을 기다리는 질문</div>
        <div className="flex justify-between">
          <SubBanner color="secondary" />
          <SubBanner color="lightgreen" />
        </div>
      </div>
    </div>
  );
};
