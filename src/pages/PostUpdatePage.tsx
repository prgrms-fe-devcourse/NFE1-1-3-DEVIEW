import { ActionBtn } from "@/components/Common/ActionBtn";
import { usePostDetail } from "@hooks/usePostDetail";
import { usePostUpdate } from "@hooks/usePostUpdate";
import { DetailContainer, EditorContainer, TitleContainer, VersionContainer } from "@components/PostCreatePage";
import { DEV_DEPENDENCIES_LIST } from "@constants/devDependenciesList";
import { DevDependency, CommonPostRequestProps } from "@customTypes/post";
import { initialState } from "@customTypes/postCreate"; // PostFormState import 수정
import { postFormReducer, validateForm } from "@utils/postCreate";
import { FormEvent, useCallback, useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PostUpdatePage() {
  const { postId } = useParams<{ postId: string }>();

  console.log("PostUpdatePage: ", postId);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(postFormReducer, initialState);

  const {
    post: post,
    isLoading,
    error
  } = usePostDetail({
    postId,
    enabled: !!postId
  });

  const { mutate: updatePost, isPending } = usePostUpdate({
    onSuccess: () => {
      navigate(`/post/${postId}`);
    }
  });

  // 기존 데이터로 폼 초기화
  useEffect(() => {
    if (post) {
      dispatch({ type: "SET_TITLE", payload: post.title });
      dispatch({ type: "SET_DETAIL", payload: post.detail });
      dispatch({ type: "SET_CODE", payload: post.code });

      // devDependencies와 devVersions가 있을 때만 초기화
      if (post.devDependencies.length > 0) {
        post.devDependencies.forEach((dependency, index) => {
          dispatch({
            type: "UPDATE_DEPENDENCY",
            payload: { index, value: dependency }
          });
          dispatch({
            type: "UPDATE_VERSION",
            payload: { index, value: post.devVersions[index] }
          });
        });
      }
    }
  }, [post]);

  const onValidation = useCallback(() => {
    const validation = validateForm(state);
    if (!validation.isValid) {
      const firstError = Object.values(validation.errors)[0];
      alert(firstError);
      return false;
    }
    return true;
  }, [state]);

  const handleCancel = useCallback(() => {
    if (window.confirm("수정을 취소하시겠습니까?")) {
      navigate(`/post/${postId}`);
    }
  }, [navigate, postId]);

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

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!onValidation() || !postId) return;

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

      const postData: CommonPostRequestProps = {
        postId,
        title: state.title,
        detail: state.detail,
        code: state.code,
        devDependencies: validIndices.map((index) => state.devDependencies[index]),
        devVersions: validIndices.map((index) => state.devVersions[index])
      };

      updatePost(postData);
    },
    [state, postId, onValidation, updatePost]
  );

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;
  if (!post) return <div>게시글을 찾을 수 없습니다.</div>;
  if (!post.isAuthor) return <div>수정 권한이 없습니다.</div>;

  return (
    <form onSubmit={onSubmit} className="m-auto flex max-w-[1440px] flex-col gap-12 px-4 py-12">
      <h1 className="text-20 font-semibold md:text-24">게시글 수정하기</h1>

      {isPending && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-4">수정 중...</div>
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
        <ActionBtn content="수정 취소" type="reset" onClick={handleCancel} />
        <ActionBtn color="primary" content={isPending ? "수정 중..." : "수정하기"} type="submit" />
      </div>
    </form>
  );
}
