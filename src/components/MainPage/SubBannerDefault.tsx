import { Link } from "react-router-dom";

type SubBannerProps = {
  color: "secondary" | "lightgreen";
};
export const SubBannerDefault = ({ color }: SubBannerProps) => {
  const bgColors = {
    secondary: "bg-secondary",
    lightgreen: "bg-lightgreen"
  };
  return (
    <Link
      to={`/post/create`}
      className={`relative flex break-words ${bgColors[color]} h-52 flex-col justify-between rounded-lg p-5 pb-10 text-white-pure shadow`}
    >
      <div className="h-14 truncate text-28">답변을 기다리는 게시글이 없습니다.</div>
      <div className="flex w-full justify-end text-28">지금 질문하기-&gt;</div>
    </Link>
  );
};
