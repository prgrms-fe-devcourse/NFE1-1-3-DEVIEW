import { DEV_DEPENDENCIES_LIST } from "@/constants";
import { useFilterStore } from "@stores/searchFiltersStore";
export const SearchFilter = () => {
  const { selectedFilters, addFilter, deleteFilter } = useFilterStore();

  const onFilterSelect = (item: string) => {
    if (selectedFilters.includes(item)) {
      deleteFilter(item);
    } else if (selectedFilters.length < 3) {
      addFilter(item);
    }
  };

  return (
    <>
      <div className="top-33 absolute z-30 w-full bg-white-sub p-4 md:top-28">
        <div className="mx-auto max-w">
          <ul className="mx-auto flex w-fit flex-wrap">
            {DEV_DEPENDENCIES_LIST.map((item) => (
              <li className="mb-2 mr-2" key={item}>
                <button
                  className={`lightgray-btn w-auto px-4 py-2 text-12 md:text-14 ${
                    selectedFilters.includes(item) ? "opacity-90" : ""
                  } ${
                    selectedFilters.length >= 3 && !selectedFilters.includes(item)
                      ? "cursor-not-allowed opacity-50"
                      : "hover:opacity-80"
                  }`}
                  onClick={() => onFilterSelect(item)}
                  disabled={selectedFilters.length >= 3 && !selectedFilters.includes(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
