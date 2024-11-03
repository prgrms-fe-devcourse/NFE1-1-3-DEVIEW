import DeleteBtn from "@components/Common/DeleteBtn";
import EditBtn from "@components/Common/EditBtn";

type CommentEditDeleteProps = {
  commentId: string;
};

export const CommentEditDelete = ({ commentId }: CommentEditDeleteProps) => {
  return (
    <div className="flex gap-8">
      <EditBtn />
      <DeleteBtn />
    </div>
  );
};

export default CommentEditDelete;
