import Question from "@components/PostCreate/Question";

export default function PostCreatePage() {
  return (
    <form className="mx-auto my-[4.69rem] flex max-w flex-col gap-12 px-4" action="">
      <h1 className="text-28 font-bold">공개 질문하기</h1>
      <Question
        category="제목"
        explain="질문하시고 싶은 내용을 잘 전달할 수 있는 제목을 선택해주세요."
        placeholder="제목을 입력해주세요"
      />
      <Question
        category="내용"
        explain="질문하시고 싶은 내용을 자세하게 작성해주세요."
        placeholder="내용을 입력해주세요"
      />
      <Question category="태그" explain="해당 질문에 대한 태그를 입력해주세요." placeholder="버전을 알려주세요" />
      <div className="flex w-full justify-end gap-2">
        <button className="rounded-lg bg-primary py-4 text-20 font-semibold text-white-pure">질문하기</button>
        <button className="rounded-lg bg-gray py-4 text-20 font-semibold text-white-pure">초기화하기</button>
      </div>
    </form>
  );
}
