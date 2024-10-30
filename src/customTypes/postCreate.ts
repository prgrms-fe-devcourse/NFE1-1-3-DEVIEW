import { DEV_DEPENDENCIES_LIST } from "@constants/devDependenciesList";
// types/post.ts
// 폼에서 사용하는 버전 데이터 타입
export type DevDependencies = {
  id: string;
  dependency: string;
  version: string;
};

// API 요청 시 사용할 버전 데이터 타입
export type DevDependencyRequest = {
  dependency: (typeof DEV_DEPENDENCIES_LIST)[number];
  version: string;
};

// 폼 상태 타입
export type PostFormState = {
  title: string;
  detail: string;
  code: string;
  devDependencies: DevDependencies[];
};

// API 요청 타입
export type CreatePostRequestProps = {
  title: string;
  detail: string;
  code: string;
  devDependencies: DevDependencyRequest[];
};

// 각 액션별 페이로드 타입 정의
export type SetTitleAction = {
  type: "SET_TITLE";
  payload: string;
};

export type SetDetailAction = {
  type: "SET_DETAIL";
  payload: string;
};

export type SetCodeAction = {
  type: "SET_CODE";
  payload: string;
};

export type AddVersionAction = {
  type: "ADD_VERSION";
};

export type RemoveVersionAction = {
  type: "REMOVE_VERSION";
  payload: string; // version id
};

export type UpdateVersionAction = {
  type: "UPDATE_VERSION";
  payload: {
    id: string;
    field: "dependency" | "version";
    value: string;
  };
};

export type ResetFormAction = {
  type: "RESET_FORM";
};

// 모든 가능한 액션 타입 통합
export type PostFormAction =
  | SetTitleAction
  | SetDetailAction
  | SetCodeAction
  | AddVersionAction
  | RemoveVersionAction
  | UpdateVersionAction
  | ResetFormAction;

// 초기 상태
export const initialState: PostFormState = {
  title: "",
  detail: "",
  code: "",
  devDependencies: [{ id: "1", dependency: "", version: "" }]
};

// 타입 가드 함수들
export const isVersionUpdateAction = (action: PostFormAction): action is UpdateVersionAction => {
  return action.type === "UPDATE_VERSION";
};

export const isVersionRemoveAction = (action: PostFormAction): action is RemoveVersionAction => {
  return action.type === "REMOVE_VERSION";
};
