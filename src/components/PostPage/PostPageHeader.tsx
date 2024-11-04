import Select from "react-select";

type PostPageHeaderProps = {
  sort: "latest" | "views";
  setSort: React.Dispatch<React.SetStateAction<"latest" | "views">>;
  id?: string;
};
export const PostPageHeader = ({ sort, setSort, id }: PostPageHeaderProps) => {
  const options = [
    { value: "latest", label: "최신순" },
    { value: "views", label: "인기순" }
  ];
  const headerText = { latest: "최신", views: "인기" };
  console.log(id);
  return (
    <div className="flex w-full flex-col p-8 pb-0">
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
        <Select
          options={options}
          isSearchable={false}
          defaultValue={options[0]}
          unstyled
          onChange={(selectedOption) =>
            setSort(selectedOption ? (selectedOption.value as "latest" | "views") : "latest")
          }
          classNames={{
            container: ({ isFocused }) =>
              `rounded border-2 border-solid border-primary gap-4 z-10 transition-shadow ${isFocused && "shadow"}`,
            menu: () => " rounded mt-2 shadow  text-20 text-secondary bg-white-pure",
            option: () => "p-4 hover:bg-primary hover:text-white-sub",
            control: () => "h-[3.125rem] w-[12.5rem] border-none rounded-[10px] px-4 text-20 text-secondary"
          }}
        />
      </div>
    </div>
  );
};
