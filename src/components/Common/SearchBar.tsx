import { useState, ChangeEvent, KeyboardEvent, useRef, MouseEvent } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type SearchBarProps = {
  selectedFilters: string[];
  onDeleteFilter: (filter: string) => void;
  onFocus: () => void;
  onCloseFilter: () => void;
};

export const SearchBar = ({ selectedFilters, onDeleteFilter, onFocus, onCloseFilter }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleFocus = () => {
    onFocus();
  };

  const onSearch = () => {
    if (query.trim()) {
      navigate(`/search/${query}&${selectedFilters}`);
      onCloseFilter();
    } else {
      alert("검색어를 입력해주세요.");
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="w-full">
      <div className="relative mb-2 flex w-full items-center">
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          className="h-11 flex-1 rounded border pr-10 text-12 md:text-16"
          onFocus={handleFocus}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={inputRef}
          onClick={onClick}
        />
        <button
          onClick={() => {
            onSearch();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 transform"
        >
          <IoMdSearch className="h-6 w-6" />
        </button>
      </div>

      <div className="flex flex-wrap">
        {selectedFilters.map((filter) => (
          <div key={filter} className="mr-2 flex items-center rounded bg-lightgray px-2 py-1 text-12">
            <span>{filter}</span>
            <button onClick={() => onDeleteFilter(filter)} className="ml-2">
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
