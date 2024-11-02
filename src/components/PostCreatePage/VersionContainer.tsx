import { LanSelectBtn, VersionCountBtn } from "@components/PostCreatePage";
import { PostFormState } from "@customTypes/postCreate";
// import { useEffect } from "react";

type VersionContainerProps = {
  state: PostFormState;
  onAddVersion: () => void;
  onRemoveVersion: (index: number) => void;
  onVersionChange: (index: number, field: "dependency" | "version", value: string) => void;
};

export const VersionContainer = ({ state, onAddVersion, onRemoveVersion, onVersionChange }: VersionContainerProps) => {
  // // 컴포넌트 마운트 시에만 초기화 실행
  // useEffect(() => {
  //   if (state.devDependencies.length === 0) {
  //     onAddVersion();
  //   }
  // }, []); // 마운트 시에만 실행

  return (
    <section className="relative flex w-full flex-col gap-4 rounded-lg border border-solid border-gray py-7 pl-3 pr-6 shadow">
      <div className="flex flex-col gap-3">
        <h2 className="text-20 font-semibold">언어와 버전을 입력해주세요</h2>
        <p className="text-16 font-medium text-primary">답변자가 더 좋은 답변을 할 수 있게 정확히 기입해주세요.</p>
        <p className="text-16 font-medium text-primary">첫번째 언어의 아이콘이 해당 게시글의 아이콘으로 지정됩니다.</p>

        <div className="flex gap-3 sm:relative sm:right-0 sm:top-0 md:absolute md:right-5 md:top-3">
          <VersionCountBtn addOrMinus="+" onClick={onAddVersion} />
          {state.devDependencies.length > 1 && (
            <VersionCountBtn
              addOrMinus="-"
              onClick={() => onRemoveVersion(state.devDependencies.length - 1)}
              disabled={state.devDependencies.length <= 1}
            />
          )}
        </div>

        <div className="flex flex-col gap-4">
          {state.devDependencies.map((dependency, index) => (
            <div key={index} className="flex gap-[3%]">
              <LanSelectBtn value={dependency} onChange={(e) => onVersionChange(index, "dependency", e.target.value)} />
              <input
                value={state.devVersions[index]}
                onChange={(e) => onVersionChange(index, "version", e.target.value)}
                className="h-16 w-[77%] rounded-lg border-gray px-4 text-14 text-gray"
                type="text"
                placeholder="버전을 입력해주세요"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VersionContainer;
