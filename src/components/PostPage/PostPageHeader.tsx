type PostPageHeaderProps = {
  sort: "latest" | "views";
  id?: string;
};
export const PostPageHeader = ({ sort, id }: PostPageHeaderProps) => {
  const headerText = { latest: "최신", views: "인기" };
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-4 text-20 md:text-24">
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
      </div>
    </div>
  );
};
