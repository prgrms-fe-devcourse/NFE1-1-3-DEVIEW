type PostsContentProps = {
  data: { id: number; post: string }[];
};

export const PostsContent = ({ data }: PostsContentProps) => {
  return (
    <div className="">
      {data.map((post) => (
        <div key={post.id}>
          <p>post: {post.post}</p>
        </div>
      ))}
    </div>
  );
};
