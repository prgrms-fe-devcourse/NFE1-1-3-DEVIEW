import { DEV_DEPENDENCIES_LIST } from "@/constants";

export const LanSelectBtn = () => {
  return (
    <select className="w-[20%] min-w-24 rounded-lg border-[1px] border-solid text-center text-20 font-medium leading-none text-secondary">
      {DEV_DEPENDENCIES_LIST.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default LanSelectBtn;
