import { CommentEditor } from "@/components/PostDetailPage";
type CommentWriteProps = {};

export const CommentWrite = ({}: CommentWriteProps) => {
  return (
    <form className="flex flex-col gap-12 border-t border-solid border-gray">
      <h2 className="mt-12 text-20 font-medium">Answer</h2>
      <div className="flex h-52 gap-7">
        <figure className="hidden h-12 w-12 overflow-hidden rounded-full md:block md:h-16 md:w-16">
          <img
            className="h-auto w-full"
            src="https://media.istockphoto.com/id/1012645084/ko/%EB%B2%A1%ED%84%B0/%EC%99%84%EB%B2%BD-%ED%95%9C-%EB%9E%9C%EB%8D%A4-%ED%8C%A8%ED%84%B4-%EB%B2%A1%ED%84%B0.jpg?s=170667a&w=0&k=20&c=_fZKK0-ZyFFLungr9E06AOz8r_M4h8aHYLtU2cEJ-yA="
            alt="프로필 이미지"
          />
        </figure>
        <CommentEditor />
      </div>
    </form>
  );
};
