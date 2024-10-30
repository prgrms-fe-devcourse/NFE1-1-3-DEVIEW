import { ActionBtn } from "@/components/Common/ActionBtn";
import { DetailContainer, EditorContainer, TitleContainer, VersionContainer } from "@components/PostCreatePage";
import { initialState, postFormReducer, validateForm } from "@utils/postCreate";
import { FormEvent, useCallback, useReducer } from "react";
import { useCreatePost } from "../hooks/useCreatePost";
import { useNavigate } from "react-router-dom";
import { DEV_DEPENDENCIES_LIST } from "@constants/devDependenciesList";
import { DevDependency, DevDependencies } from "@customTypes/post";

type CreatePostRequestProps = {
  title: string;
  detail: string;
  code: string;
  devDependencies: DevDependencies; // 이미 배열 타입임
};

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
        // FormVersionData[] -> DevDependencies로 변환
        const validDependencies: DevDependencies = state.devDependencies
          .filter((item) => item.dependency && DEV_DEPENDENCIES_LIST.includes(item.dependency as DevDependency))
          .map((item) => ({
            dependency: item.dependency as DevDependency,
            version: item.version
          }));

        const postData: CreatePostRequestProps = {
          title: state.title,
          detail: state.detail,
          code: state.code,
          devDependencies: validDependencies
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

  const onVersionChange = useCallback((id: string, field: "dependency" | "version", value: string) => {
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
        onRemove={onRemoveVersion}
        onChange={onVersionChange}
      />

      <EditorContainer value={state.code} onChange={(newValue) => dispatch({ type: "SET_CODE", payload: newValue })} />

      <div className="flex w-full justify-end gap-6">
        <ActionBtn
          content="내용 초기화하기"
          type="reset"
          onClick={onReset}
          // disabled={createPostMutation.isPending}
        />
        <ActionBtn
          color="primary"
          content={createPostMutation.isPending ? "등록 중..." : "질문하기"}
          type="submit"
          // disabled={createPostMutation.isPending}
        />
      </div>
    </form>
  );
}
