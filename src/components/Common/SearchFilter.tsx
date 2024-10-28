type SearchFilterProps = {
  onSelectFilter: (filter: string) => void;
  onClearFilters: () => void;
};

export const SearchFilter = ({ onSelectFilter, onClearFilters }: SearchFilterProps) => {
  return (
    <>
      <div className="absolute top-36 z-30 w-full bg-white-sub p-4 md:top-28">
        <div className="mx-auto max-w">
          <ul className="flex flex-wrap md:ml-8">
            {["Javascript", "Typescript", "Vue"].map((item, index) => (
              <li className="mb-2 mr-2" key={index}>
                <button
                  className="lightgray-btn w-auto px-4 py-2 text-12 hover:opacity-80 md:text-14"
                  onClick={() => onSelectFilter(item)}
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
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" fill="none">
                <path
                  fill="#000"
                  d="M6.417 11.375 5.133 10.15l1.604-1.575c-1.955-.248-3.567-.758-4.835-1.531C.634 6.27 0 5.38 0 4.375c0-1.21.882-2.242 2.647-3.095C4.41.427 6.585 0 9.167 0c2.582 0 4.755.427 6.52 1.28 1.764.853 2.646 1.885 2.646 3.095 0 .904-.508 1.714-1.524 2.428-1.016.715-2.34 1.247-3.976 1.597V6.606c1.177-.291 2.082-.652 2.716-1.083.634-.43.951-.813.951-1.148 0-.467-.653-1.02-1.96-1.663-1.306-.641-3.097-.962-5.373-.962-2.277 0-4.068.32-5.374.962-1.307.642-1.96 1.196-1.96 1.663 0 .35.39.77 1.17 1.258.778.488 1.886.857 3.322 1.104L5.133 5.6l1.284-1.225 3.666 3.5-3.666 3.5Z"
                />
              </svg>
              초기화
            </button>
            {/* <button className="primary-btn mr-4 w-auto px-4 py-2 text-14">적용</button>*/}
            {/* <button className="primary-btn mr-4 w-auto px-4 py-2 text-14" >닫기</button> */}
          </div>
        </div>
      </div>
    </>
  );
};
