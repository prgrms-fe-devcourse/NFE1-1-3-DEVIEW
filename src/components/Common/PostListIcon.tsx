import { DevDependency } from "@customTypes/post";
import { devIconsDocs } from "@constants/devIconUrls";
type PostListIconProps = {
  devDependencies: DevDependency;
};
export const PostListIcon = ({ devDependencies }: PostListIconProps) => {
  return <div className={`h-14 w-14 bg-contain ${devIconsDocs[devDependencies].iconUrl}`}></div>;
};
