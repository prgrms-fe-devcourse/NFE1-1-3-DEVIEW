import { TitleContainer, DetailContainer, VersionContainer, EditorContainer } from "@components/PostCreatePage";
import { ActionBtn } from "@/components/Common";
import { postFormReducer, initialState } from "@utils/postCreate";
import { useReducer, FormEvent, useCallback } from "react";

export default function PostCreatePage() {
  const [state, dispatch] = useReducer(postFormReducer, initialState);

  const validateForm = useCallback(() => {
    if (!state.title.trim()) {
      alert("제목을 입력해주세요.");
      return false;
    }
    if (!state.content.trim()) {
      alert("내용을 입력해주세요.");
      return false;
    }
    if (!state.code.trim()) {
      alert("코드를 입력해주세요.");
      return false;
    }
    const hasEmptyVersion = state.versions.some((v) => !v.lan || !v.version.trim());
    if (hasEmptyVersion) {
      alert("모든 버전 정보를 입력해주세요.");
      return false;
    }
    return true;
  }, [state.title, state.content, state.code, state.versions]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!validateForm()) {
        return;
      }
      try {
        // TODO: API 호출 로직 구현
        console.log("Submit Data:", state);
      } catch (error) {
        console.error("Submit Error:", error);
        alert("질문 등록 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    },
    [state, validateForm]
  );

  const onReset = useCallback(() => {
    if (window.confirm("작성 중인 내용이 모두 초기화됩니다. 계속하시겠습니까?")) {
      dispatch({ type: "RESET_FORM" });
    }
  }, []);

  const onVersionChange = useCallback((id: string, field: "lan" | "version", value: string) => {
    dispatch({
      type: "UPDATE_VERSION",
      payload: { id, field, value }
    });
  }, []);

  const onRemoveVersion = useCallback((id: string) => {
    dispatch({ type: "REMOVE_VERSION", payload: id });
  }, []);

  const onAddVersion = useCallback(() => {
    dispatch({ type: "ADD_VERSION" });
  }, []);

  return (
    <form onSubmit={onSubmit} className="m-auto my-[5.313rem] flex max-w-[1240px] flex-col gap-12 px-5">
      <h1 className="text-24 font-semibold">공개 질문하기</h1>

      <TitleContainer
        category="제목"
        explain="질문하시고 싶은 내용을 잘 전달할 수 있는 제목을 선택해주세요."
        placeholder="제목은 50자 이내로 작성해주세요."
        value={state.title}
        maxLength={50}
        onChange={(e) => dispatch({ type: "SET_TITLE", payload: e.target.value })}
      />

      <DetailContainer
        category="내용"
        explain="질문하시고 싶은 내용을 자세하게 작성해주세요."
        placeholder="1000자 이내로 자유롭게 내용을 작성해주세요."
        value={state.content}
        maxLength={1000}
        onChange={(e) => dispatch({ type: "SET_CONTENT", payload: e.target.value })}
      />

      <VersionContainer
        state={state}
        onAddVersion={onAddVersion}
        onRemove={onRemoveVersion}
        onChange={onVersionChange}
      />

      <EditorContainer value={state.code} onChange={(newValue) => dispatch({ type: "SET_CODE", payload: newValue })} />

      <div className="flex w-full justify-end gap-6">
        <ActionBtn content="내용 초기화하기" type="reset" onClick={onReset} />
        <ActionBtn color="primary" content="질문하기" type="submit" />
      </div>
    </form>
  );
}
