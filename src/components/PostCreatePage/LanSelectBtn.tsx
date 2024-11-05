import { DEV_DEPENDENCIES_LIST } from "@/constants";
import { DevDependency } from "@customTypes/post";
import React from "react";

type LanSelectBtnProps = {
  value: DevDependency;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const LanSelectBtn = ({ value, onChange }: LanSelectBtnProps) => {
  return (
    <select
      value={value || "default"}
      className="h-12 w-[20%] min-w-24 rounded-lg border border-secondary text-center text-14 font-medium leading-none text-secondary md:h-auto"
      onChange={onChange}
    >
      <option value="default" disabled>
        개발 언어를 선택해주세요
      </option>
      {DEV_DEPENDENCIES_LIST.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default LanSelectBtn;
