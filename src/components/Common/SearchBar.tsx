import { useState, ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFilterStore } from "@stores/searchFiltersStore";
import { IoCloseSharp } from "react-icons/io5";

type SearchBarProps = {
  onFocus: () => void;
  onCloseFilter: () => void;
};

export const SearchBar = ({ onFocus, onCloseFilter }: SearchBarProps) => {
  {
    const { selectedFilters, deleteFilter, clearFilters } = useFilterStore();
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const displayedFilters = selectedFilters.slice(0, 3);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
    const onClick = (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
    };

    const handleFocus = () => {
      onFocus();
    };

    const onSearch = () => {
      const filters =
        selectedFilters.length > 0
          ? `&filters=${selectedFilters.map((filter) => (filter === "C#" ? encodeURIComponent(filter) : filter)).join(",")}`
          : "";

      if (query.trim() || selectedFilters.length > 0) {
        navigate(`/search/${encodeURIComponent(query)}${filters}`);
        onCloseFilter();
        setQuery("");
        clearFilters();
      } else {
        alert("검색어 입력 또는 필터를 선택해주세요.");
      }
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSearch();
      }
    };

    return (
      <div className="w-full">
        <div className="relative flex w-full items-center">
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            className="h-11 flex-1 rounded-[50px] border border-lightgray pr-10 text-12 md:text-16"
            onFocus={handleFocus}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onClick={onClick}
            value={query}
          />
          <button
            onClick={() => {
              onSearch();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform"
          >
            <IoMdSearch className="h-6 w-6 text-gray hover:text-primary" />
          </button>
        </div>

        <div className="absolute mb-2 flex flex-wrap">
          {displayedFilters.map((filter) => (
            <button
              key={filter}
              onClick={(event) => {
                event.stopPropagation();
                deleteFilter(filter);
              }}
              className="mr-2 mt-1 cursor-pointer rounded bg-lightgray py-1 pl-2 pr-1 text-12 flex-center md:mt-[6px]"
            >
              <span>{filter}</span>
              <IoCloseSharp className="ml-3" />
            </button>
          ))}
        </div>
      </div>
    );
  }
};
