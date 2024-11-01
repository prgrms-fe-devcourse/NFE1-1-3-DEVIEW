import { Link } from "react-router-dom";

export const QuestionBanner = () => {
  return (
    <>
      <Link to={`/post/create`} className="flex h-full w-full flex-col justify-between gap-7 p-5 pb-8">
        <div className="flex flex-col gap-7">
          <div className="text-16">궁금한 것 질문하기!</div>
          <div className="w-full whitespace-normal break-words break-all text-20">
            궁금한 내용이 있다면
            <br />
            지금 바로 물어보세요
          </div>
        </div>
        <div className="flex justify-end text-20 font-bold">질문하기-&gt;</div>
      </Link>
    </>
  );
};
