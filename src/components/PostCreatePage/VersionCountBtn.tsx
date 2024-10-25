// import { useState } from "react";
type VersionAddBtnProps = {
  addOrMinus: string;
  versionCount: number;
  setVersionCount: (count: number) => void;
};

export const VersionCountBtn = ({ addOrMinus, versionCount, setVersionCount }: VersionAddBtnProps) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (addOrMinus === "+") {
      setVersionCount(versionCount + 1);
    } else {
      setVersionCount(versionCount - 1);
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="size-[3.125rem] rounded-full bg-primary p-[0.60rem] text-28 text-white-sub"
    >
      {addOrMinus}
    </button>
  );
};
export default VersionCountBtn;
