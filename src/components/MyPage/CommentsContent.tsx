type CommentsContentProps = {
  data: { id: number; comment: string }[];
};

export const CommentsContent = ({ data }: CommentsContentProps) => {
  return (
    <div className="">
      {data.map((comment) => (
        <div key={comment.id}>
          <p>comment: {comment.comment}</p>
        </div>
      ))}
    </div>
  );
};
