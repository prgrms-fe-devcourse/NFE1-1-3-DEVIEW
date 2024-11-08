import { ActionBtn } from "@/components/Common/ActionBtn";
import { useCreatePost } from "@/hooks/useCreatePost";
import { customConfirm, customToast, errorAlert } from "@/utils/sweetAlert/alerts";
import { Loading } from "@components/Common/Loading";
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
      errorAlert({ title: "입력 오류", text: firstError });
      return false;
    }
    return true;
  }, [state]);

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!onValidation()) return;

      try {
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

        await createPostMutation.mutateAsync(postData);
        customToast({ title: "질문이 등록되었습니다." });
        navigate(-1);
      } catch (error) {
        if (error instanceof Error) {
          errorAlert({ title: "오류 발생", text: error.message });
        } else {
          errorAlert({ title: "오류 발생", text: "질문 등록 중 오류가 발생했습니다." });
        }
      }
    },
    [state, onValidation, createPostMutation, navigate]
  );

  const onReset = useCallback(async () => {
    const result = await customConfirm({ title: "내용 초기화", text: "작성 중인 내용을 초기화하시겠습니까?" });
    if (result.isConfirmed) {
      dispatch({ type: "RESET_FORM" });
    }
  }, []);

  const onVersionChange = useCallback((index: number, field: "dependency" | "version", value: string) => {
    if (field === "dependency") {
      if (DEV_DEPENDENCIES_LIST.includes(value as DevDependency)) {
        dispatch({
          type: "UPDATE_DEPENDENCY",
          payload: { index, value: value as DevDependency }
        });
      }
    } else {
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
    <form onSubmit={onSubmit} className="m-auto flex max-w flex-col gap-12 p-4 py-12">
      <h1 className="text-20 font-semibold md:text-24">공개 질문하기</h1>

      {createPostMutation.isPending && (
        <div className="flex h-[calc(100vh-20rem)] items-center justify-center">
          <Loading />
        </div>
      )}

      <TitleContainer
        category="제목"
        explain="질문하시고 싶은 내용을 잘 전달할 수 있는 제목을 선택해주세요."
        placeholder="제목은 50자 이내로 작성해주세요."
        value={state.title}
        maxLength={100}
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
        <ActionBtn content="질문 내용 초기화하기" type="reset" onClick={onReset} />
        <ActionBtn color="primary" content={createPostMutation.isPending ? "등록 중..." : "질문하기"} type="submit" />
      </div>
    </form>
  );
}
