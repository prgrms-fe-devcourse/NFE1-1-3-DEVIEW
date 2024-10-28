import { DEV_DEPENDENCIES_LIST } from "@/constants";
import React from "react";

type LanSelectBtnProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const LanSelectBtn = ({ value, onChange }: LanSelectBtnProps) => {
  return (
    <select
      value={value || "default"}
      className="w-[20%] min-w-24 rounded-lg border-[1px] border-solid text-center text-20 font-medium leading-none text-secondary "
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
