import { IoWarningOutline } from "react-icons/io5";

export const NoResult = () => {
  return (
    <div className="m-auto flex flex-col items-center gap-4">
      <IoWarningOutline className="h-11 w-11 text-secondary" />
      <p className="text-14 text-secondary md:text-20">검색 결과가 없습니다</p>
    </div>
  );
};
