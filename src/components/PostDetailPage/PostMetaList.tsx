import { useNavigate } from "react-router-dom";

type PostMetaProps = {
  userId: string;
  viewsCount: number;
  commentCount: number;
  createdAt: string;
  _id: string;
  updatedAt: string;
};

export const PostMetaList = ({ userId, viewsCount, commentCount, createdAt, _id, updatedAt }: PostMetaProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
  };

  const navigate = useNavigate();

  const metaItems = [
    {
      label: "작성일",
      value: formatDate(createdAt)
    },
    {
      label: "조회수",
      value: viewsCount.toLocaleString()
    },
    {
      label: "답변",
      value: commentCount.toLocaleString()
    },
    {
      label: "작성자",
      value: userId
    }
  ];
  const updatedTime = formatDate(updatedAt);
  return (
    <div className="flex flex-col gap-4 text-12 sm:flex-row">
      {metaItems.map(({ label, value }) => (
        <span key={label} className="font-light text-gray">
          {label !== "작성자" && `${label} `}
          {label === "작성자" ? (
            <span
              className="cursor-pointer text-secondary hover:underline"
              onClick={() => navigate(`/post/user/${_id}`)}
            >
              {value}
            </span>
          ) : (
            <span className="text-black">{value}</span>
          )}
          {label === "작성일" && value !== updatedTime && ` (수정됨: ${updatedTime})`}
        </span>
      ))}
    </div>
  );
};
