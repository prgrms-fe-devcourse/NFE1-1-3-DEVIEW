type LikesContentProps = {
  data: { id: number; likedItem: string }[];
};

export const LikesContent = ({ data }: LikesContentProps) => {
  return (
    <div className="">
      {data.map((like) => (
        <div key={like.id}>
          <p>likes: {like.likedItem}</p>
        </div>
      ))}
    </div>
  );
};
