import { useState } from "react";
import LanSelectBtn from "@components/PostCreatePage/LanSelectBtn";
// import VersionCountBtn from "@components/PostCreatePage/VersionCountBtn";
export const VersionContainer = () => {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border-2 border-solid border-gray py-7 pl-3 pr-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-24 font-semibold">언어와 버전을 입력해주세요</h2>
        <p className="text-20 font-medium text-primary">답변자가 더 좋은 답변을 할 수 있게 정확히 기입해주세요.</p>
        <p className="text-20 font-medium text-primary">첫번째 언어의 아이콘이 해당 게시글의 아이콘으로 지정됩니다.</p>
        {/* <div className="flex gap-3">
          <VersionCountBtn addOrMinus="+" versionCount={} />
          <VersionCountBtn addOrMinus="-" />
        </div> */}
        <div className="flex gap-[3%]">
          <LanSelectBtn />
          <input
            value={value}
            onChange={onChange}
            className="h-16 text-gray w-[77%]"
            type="text"
            placeholder="버전을 입력해주세요"
            defaultChecked
          />
        </div>
      </div>
    </div>
  );
};
export default VersionContainer;
