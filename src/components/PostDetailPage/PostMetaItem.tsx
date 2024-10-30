type PostMetaItemProps = {
  label?: string;
  value: string | number | undefined;
};

export const PostMetaItem = ({ label, value }: PostMetaItemProps) => (
  <span className="font-light text-gray">
    {label && label !== "작성자" && `${label} `}
    <span className={label === "작성자" ? "text-secondary" : "text-black"}>{value}</span>
  </span>
);
export default PostMetaItem;
