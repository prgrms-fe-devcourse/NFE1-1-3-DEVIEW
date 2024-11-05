import { CgArrowsExchangeAltV } from "react-icons/cg";
type PostPageHeaderProps = {
  sort: "latest" | "views";
  setSort: React.Dispatch<React.SetStateAction<"latest" | "views">>;
  id?: string;
};
export const PostPageHeader = ({ sort, setSort, id }: PostPageHeaderProps) => {
  const handleClick = () => {
    const value = sort === "latest" ? "views" : "latest";
    setSort(value);
  };
  const headerText = { latest: "최신", views: "인기" };
  return (
    <div className="flex w-full flex-col md:p-8 md:pb-0">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-4 text-24">
          {id === undefined ? (
            ""
          ) : id === "" ? (
            <div className="h-6 w-20"> </div>
          ) : (
            <div className="flex">
              <div className="font-bold text-secondary">{id}</div>님의
            </div>
          )}
          {headerText[sort]} 게시글
        </div>
        <button
          onClick={handleClick}
          className="relative rounded px-8 py-2 text-secondary ring-2 ring-primary transition-all flex-center hover:ring-secondary"
        >
          {`${headerText[sort]}순`}

          <CgArrowsExchangeAltV size={24} className="absolute right-1" />
        </button>
      </div>
    </div>
  );
};
