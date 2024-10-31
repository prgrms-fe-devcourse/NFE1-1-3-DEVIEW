import { DevDependency } from "@customTypes/post";
import { devIconsDocs } from "@constants/devIconUrls";
type PostListIconProps = {
  devDependencies: DevDependency;
};
export const PostListIcon = ({ devDependencies }: PostListIconProps) => {
  const iconUrl = devIconsDocs[devDependencies]?.iconUrl || "bg-[url(/assets/dev_icons/Default.svg)]";
  return (
    <>
      <div className={`h-14 w-14 bg-contain ${iconUrl}`}></div>
    </>
  );
};
