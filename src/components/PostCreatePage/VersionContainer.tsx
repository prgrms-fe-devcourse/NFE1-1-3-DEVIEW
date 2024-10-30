import { LanSelectBtn, VersionCountBtn } from "@components/PostCreatePage";
import { PostFormState } from "@customTypes/postCreate";

type VersionContainerProps = {
  state: PostFormState;
  onAddVersion: () => void;
  onRemove: (id: string) => void;
  onChange: (id: string, field: "lan" | "version", value: string) => void;
};

export const VersionContainer = ({ state, onAddVersion, onRemove, onChange }: VersionContainerProps) => {
  return (
    <section className="relative flex w-full flex-col gap-4 rounded-lg border border-solid border-gray py-7 pl-3 pr-6 shadow">
      <div className="flex flex-col gap-3">
        <h2 className="text-20 font-semibold">언어와 버전을 입력해주세요</h2>
        <p className="text-16 font-medium text-primary">답변자가 더 좋은 답변을 할 수 있게 정확히 기입해주세요.</p>
        <p className="text-16 font-medium text-primary">첫번째 언어의 아이콘이 해당 게시글의 아이콘으로 지정됩니다.</p>

        <div className="flex gap-3 sm:relative sm:right-0 sm:top-0 md:absolute md:right-5 md:top-3">
          <VersionCountBtn addOrMinus="+" onClick={onAddVersion} />
          {state.versions.length > 1 && (
            <VersionCountBtn addOrMinus="-" onClick={() => onRemove(state.versions[state.versions.length - 1].id)} />
          )}
        </div>

        <div className="flex flex-col gap-4">
          {state.versions.map((version) => (
            <div key={version.id} className="flex gap-[3%]">
              <LanSelectBtn value={version.lan} onChange={(e) => onChange(version.id, "lan", e.target.value)} />
              <input
                value={version.version}
                onChange={(e) => onChange(version.id, "version", e.target.value)}
                className="h-16 w-[77%] rounded-lg border border-solid border-gray px-4 text-14 text-gray"
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
