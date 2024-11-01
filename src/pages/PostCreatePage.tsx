import { ActionBtn } from "@/components/Common/ActionBtn";
import { useCreatePost } from "@/hooks/useCreatePost";
import { DetailContainer, EditorContainer, TitleContainer, VersionContainer } from "@components/PostCreatePage";
import { DEV_DEPENDENCIES_LIST } from "@constants/devDependenciesList";
import { DevDependency } from "@customTypes/post";
import { CreatePostRequestProps, initialState } from "@customTypes/postCreate";
import { postFormReducer, validateForm } from "@utils/postCreate";
import { FormEvent, useCallback, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export default function PostCreatePage() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(postFormReducer, initialState);
  const createPostMutation = useCreatePost();

  const onValidation = useCallback(() => {
    const validation = validateForm(state);
    if (!validation.isValid) {
      const firstError = Object.values(validation.errors)[0];
      alert(firstError);
      return false;
    }
    return true;
  }, [state]);

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!onValidation()) return;

      try {
        // 유효한 디펜던시와 버전만 필터링
        const validIndices = state.devDependencies
          .map((dep, index) => ({
            dependency: dep,
            version: state.devVersions[index],
            index
          }))
          .filter(
            (item) => item.dependency && DEV_DEPENDENCIES_LIST.includes(item.dependency) && item.version.trim() !== ""
          )
          .map((item) => item.index);

        const postData: CreatePostRequestProps = {
          title: state.title,
          detail: state.detail,
          code: state.code,
          devDependencies: validIndices.map((index) => state.devDependencies[index]),
          devVersions: validIndices.map((index) => state.devVersions[index])
        };

        console.log("Request Data:", postData);
        await createPostMutation.mutateAsync(postData);
        alert("질문이 성공적으로 등록되었습니다.");
        navigate("/");
      } catch (error) {
        console.error("Submit Error:", error);
        if (error instanceof Error) {
          alert(`질문 등록 실패: ${error.message}`);
        } else {
          alert("질문 등록 중 오류가 발생했습니다.");
        }
      }
    },
    [state, onValidation, createPostMutation, navigate]
  );

  const onReset = useCallback(() => {
    if (window.confirm("작성 중인 내용이 모두 초기화됩니다. 계속하시겠습니까?")) {
      dispatch({ type: "RESET_FORM" });
    }
  }, []);

  const onVersionChange = useCallback((index: number, field: "dependency" | "version", value: string) => {
    if (field === "dependency") {
      // dependency 필드일 때는 타입 검증 후 dispatch
      if (DEV_DEPENDENCIES_LIST.includes(value as DevDependency)) {
        dispatch({
          type: "UPDATE_DEPENDENCY",
          payload: { index, value: value as DevDependency }
        });
      }
    } else {
      // version 필드일 때는 문자열 그대로 dispatch
      dispatch({
        type: "UPDATE_VERSION",
        payload: { index, value }
      });
    }
  }, []);

  const onRemoveVersion = useCallback((index: number) => {
    dispatch({ type: "REMOVE_DEPENDENCY", payload: index });
  }, []);

  const onAddVersion = useCallback(() => {
    dispatch({ type: "ADD_DEPENDENCY" });
  }, []);

  return (
    <form onSubmit={onSubmit} className="m-auto my-[5.313rem] flex max-w-[1240px] flex-col gap-12 px-5">
      <h1 className="text-24 font-semibold">공개 질문하기</h1>

      {createPostMutation.isPending && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-4">질문을 등록하는 중...</div>
        </div>
      )}

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
        value={state.detail}
        maxLength={1000}
        onChange={(e) => dispatch({ type: "SET_DETAIL", payload: e.target.value })}
      />

      <VersionContainer
        state={state}
        onAddVersion={onAddVersion}
        onRemoveVersion={onRemoveVersion}
        onVersionChange={onVersionChange}
      />

      <EditorContainer value={state.code} onChange={(newValue) => dispatch({ type: "SET_CODE", payload: newValue })} />

      <div className="flex w-full justify-end gap-6">
        <ActionBtn content="내용 초기화하기" type="reset" onClick={onReset} />
        <ActionBtn color="primary" content={createPostMutation.isPending ? "등록 중..." : "질문하기"} type="submit" />
      </div>
    </form>
  );
}
