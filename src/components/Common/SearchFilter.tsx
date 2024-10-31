import { DEV_DEPENDENCIES_LIST } from "@/constants";
import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";

type SearchFilterProps = {
  onSelectFilter: (filter: string) => void;
  onClearFilters: () => void;
};

export const SearchFilter = ({ onSelectFilter, onClearFilters }: SearchFilterProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterSelect = (item: string) => {
    if (selectedFilters.includes(item)) {
      const newFilters = selectedFilters.filter((filter) => filter !== item);
      setSelectedFilters(newFilters);
      onSelectFilter(item);
    } else if (selectedFilters.length < 3) {
      setSelectedFilters([...selectedFilters, item]);
      onSelectFilter(item);
    }
  };

  return (
    <>
      <div className="absolute top-36 z-30 w-full bg-white-sub p-4 md:top-28">
        <div className="mx-auto max-w">
          <ul className="flex flex-wrap md:ml-8">
            {DEV_DEPENDENCIES_LIST.map((item) => (
              <li className="mb-2 mr-2" key={item}>
                <button
                  className={`lightgray-btn w-auto px-4 py-2 text-12 md:text-14 ${selectedFilters.includes(item) ? "opacity-90" : ""} ${selectedFilters.length >= 3 && !selectedFilters.includes(item) ? "cursor-not-allowed opacity-50" : "hover:opacity-80"}`}
                  onClick={() => handleFilterSelect(item)}
                  disabled={selectedFilters.length >= 3 && !selectedFilters.includes(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex md:ml-8">
            <button
              className="gray-btn mr-4 flex w-auto items-center px-4 py-2 text-12 hover:opacity-90 md:text-14"
              onClick={onClearFilters}
            >
              <GrPowerReset className="mr-2" />
              초기화
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
