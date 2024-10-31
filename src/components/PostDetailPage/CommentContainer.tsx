import { EditDelete, Feedback } from "@components/PostDetailPage";
import { CodeViewer } from "./CodeViewer";

export const CommentContainer = () => {
  return (
    <section className="flex flex-col gap-9 rounded-lg border border-solid border-gray px-3 py-4">
      <section className="flex justify-between">
        {/* //! 댓글 작성자 정보 api연동하면서 컴포넌화 예정 */}
        <div className="flex gap-5">
          <figure className="h-12 w-12 overflow-hidden rounded-full md:h-16 md:w-16">
            <img
              className="h-auto w-full"
              src="https://media.istockphoto.com/id/1012645084/ko/%EB%B2%A1%ED%84%B0/%EC%99%84%EB%B2%BD-%ED%95%9C-%EB%9E%9C%EB%8D%A4-%ED%8C%A8%ED%84%B4-%EB%B2%A1%ED%84%B0.jpg?s=170667a&w=0&k=20&c=_fZKK0-ZyFFLungr9E06AOz8r_M4h8aHYLtU2cEJ-yA="
              alt="프로필 이미지"
            />
          </figure>
          <span className="flex text-12 font-medium flex-center md:text-16">작성자 이름</span>
        </div>
        <EditDelete />
      </section>
      <section className="px-1">
        {/* <CodeViewer /> */}
      </section>
      <Feedback />
    </section>
  );
};

export default CommentContainer;
