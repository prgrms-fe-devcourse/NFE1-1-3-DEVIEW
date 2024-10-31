import { DevDependency } from "@customTypes/post";
import { devIconsDocs } from "@constants/devIconUrls";
type PostListIconProps = {
  devDependencies: DevDependency;
};
export const PostListIcon = ({ devDependencies }: PostListIconProps) => {
  const iconUrl = devIconsDocs[devDependencies]?.iconUrl || "bg-[url(/assets/dev_icons/Default.svg)]";
  return (
    <div className="flex-shrink-0">
      <div className={`h-10 w-10 bg-cover bg-center bg-no-repeat md:h-14 md:w-14 ${iconUrl}`}></div>
    </div>
  );
};
