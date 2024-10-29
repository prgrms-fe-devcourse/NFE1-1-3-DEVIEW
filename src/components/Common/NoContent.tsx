import { TbClipboardText, TbMessageCircleExclamation, TbBookmark, TbAlertTriangle } from "react-icons/tb";

type NoContentProps = {
  type: "post" | "comment" | "scrap" | "search";
};

export const NoContent = ({ type }: NoContentProps) => {
  const getIcon = () => {
    switch (type) {
      case "post":
        return <TbClipboardText className="h-11 w-11 text-secondary" />;
      case "comment":
        return <TbMessageCircleExclamation className="h-11 w-11 text-secondary" />;
      case "scrap":
        return <TbBookmark className="h-11 w-11 text-secondary" />;
      case "search":
        return <TbAlertTriangle className="h-11 w-11 text-secondary" />;
    }
  };

  const getMessage = () => {
    switch (type) {
      case "post":
        return "내 게시글이 없습니다";
      case "comment":
        return "내 댓글이 없습니다";
      case "scrap":
        return "스크랩한 게시글이 없습니다";
      case "search":
        return "검색 결과가 없습니다";
    }
  };
  return (
    <div className="m-auto flex flex-col items-center gap-4 py-5">
      {getIcon()}
      <p className="text-14 text-secondary md:text-16">{getMessage()}</p>
    </div>
  );
};
