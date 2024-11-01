import { devIconsDocs } from "@constants/devIconUrls";
import { TPost } from "@customTypes/post";
import { Link } from "react-router-dom";

type SubBannerProps = {
  color: "secondary" | "lightgreen";
  data: TPost;
};
export const SubBanner = ({ color, data }: SubBannerProps) => {
  const bgUrl = devIconsDocs[data.devDependencies[0]]?.bgUrl || "bg-[url(/assets/dev_bgIcons/Default.svg)]";
  const bgColors = {
    secondary: "bg-secondary",
    lightgreen: "bg-lightgreen"
  };
  return (
    <Link
      to={`/post/${data._id}`}
      className={`relative flex break-words ${bgColors[color]} h-52 flex-col justify-between rounded-lg p-5 pb-10 text-white-pure shadow`}
    >
      <div className={`${bgUrl} absolute bottom-0 left-0 h-32 w-32 bg-contain bg-center bg-no-repeat`}></div>

      <div className="h-14 truncate text-28">{data.title}</div>
      <div className="flex w-full justify-end text-28">답변하기-&gt;</div>
    </Link>
  );
};
