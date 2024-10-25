import InputContainer from "@components/PostCreatePage/InputContainer";
import { VersionContainer } from "@components/PostCreatePage/VersionContainer";
export default function PostCreatePage() {
  return (
    <form className="mx-auto my-[4.69rem] flex max-w flex-col gap-12 px-4" action="">
      <h1 className="text-28 font-bold">공개 질문하기</h1>
      <InputContainer
        category="제목"
        explain="질문하시고 싶은 내용을 잘 전달할 수 있는 제목을 선택해주세요."
        placeholder="제목을 입력해주세요"
      />
      <InputContainer
        category="문제의 세부사항은 무엇입니까?"
        explain="질문하시고 싶은 내용, 이유, 배경 등을 자세하게 작성해주세요."
        placeholder="내용을 입력해주세요"
      />
      <VersionContainer />
      <div className="flex w-full justify-end gap-2">
        <button className="min-w-44 max-w-[12.5rem] rounded-lg bg-gray px-3 py-4 text-20 font-semibold text-white-pure">
          초기화하기
        </button>
        <button className="min-w-44 max-w-[12.5rem] rounded-lg bg-primary px-3 py-4 text-20 font-semibold text-white-pure">
          질문하기
        </button>
      </div>
    </form>
  );
}
