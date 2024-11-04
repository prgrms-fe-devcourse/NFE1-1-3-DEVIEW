import Select from "react-select";

type PostPageHeaderProps = {
  order: "recent" | "popular";
  setOrder: React.Dispatch<React.SetStateAction<"recent" | "popular">>;
  id?: string;
};
export const PostPageHeader = ({ order, setOrder, id }: PostPageHeaderProps) => {
  const options = [
    { value: "recent", label: "최신순" },
    { value: "popular", label: "인기순" }
  ];
  const headerText = { recent: "최신", popular: "인기" };

  return (
    <div className="flex w-full flex-col p-8 pb-0">
      <div className="flex w-full items-center justify-between">
        <div className="text-24">
          {id && `${id}님의 `}
          {headerText[order]} 게시글
        </div>
        <Select
          options={options}
          isSearchable={false}
          defaultValue={options[0]}
          unstyled
          onChange={(selectedOption) =>
            setOrder(selectedOption ? (selectedOption.value as "recent" | "popular") : "recent")
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
