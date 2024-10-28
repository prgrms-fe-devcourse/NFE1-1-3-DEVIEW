import { LanSelectBtn, VersionCountBtn } from "@components/PostCreatePage";

type VersionContainerProps = {
  id: string; // id를 string으로 변경
  lan: string;
  version: string;
  onRemove: () => void;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeVersion: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddVersion: () => void; // 버전 추가를 위한 prop 추가
};

export const VersionContainer = ({
  id,
  lan,
  version,
  onRemove,
  onChange,
  onChangeVersion,
  onAddVersion
}: VersionContainerProps) => {
  return (
    <div className="relative flex w-full flex-col gap-4 rounded-lg border-2 border-solid border-gray py-7 pl-3 pr-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-24 font-semibold">언어와 버전을 입력해주세요</h2>
        <p className="text-20 font-medium text-primary">답변자가 더 좋은 답변을 할 수 있게 정확히 기입해주세요.</p>
        <p className="text-20 font-medium text-primary">첫번째 언어의 아이콘이 해당 게시글의 아이콘으로 지정됩니다.</p>
        <div className="flex gap-3 sm:relative sm:right-0 sm:top-0 md:absolute md:right-5 md:top-3">
          <VersionCountBtn addOrMinus="+" onClick={onAddVersion} />
          <VersionCountBtn addOrMinus="-" onClick={onRemove} />
        </div>
        {
          //버전 삭제 추가 할 시 버전 추가 버튼을 누르면 버전 삭제 버튼이 나타나게 하기 위해 버전 삭제 버튼을 버전 추가 버튼과 함께 렌더링
          <div className="flex gap-[3%]">
            <LanSelectBtn value={lan} onChange={onChange} />
            <input
              value={version}
              onChange={onChangeVersion}
              className="h-16 w-[77%] text-gray"
              type="text"
              placeholder="버전을 입력해주세요"
            />
          </div>
        }
      </div>
    </div>
  );
};

export default VersionContainer;
