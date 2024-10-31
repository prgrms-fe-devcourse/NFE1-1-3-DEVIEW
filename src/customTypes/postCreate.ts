import { DEV_DEPENDENCIES_LIST } from "@constants/devDependenciesList";
export type DevDependency = (typeof DEV_DEPENDENCIES_LIST)[number];
// API 요청 시 사용할 타입 수정
export type CreatePostRequestProps = {
  title: string;
  detail: string;
  code: string;
  devDependencies: DevDependency[]; // 언어 배열
  devVersions: string[]; // 버전 배열
};
export type PostFormState = {
  title: string;
  detail: string;
  code: string;
  devDependencies: DevDependency[];
  codeVersions: string[];
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

export type AddDependencyAction = {
  type: "ADD_DEPENDENCY";
};

export type RemoveDependencyAction = {
  type: "REMOVE_DEPENDENCY";
  payload: number; // index
};

export type UpdateDependencyAction = {
  type: "UPDATE_DEPENDENCY";
  payload: {
    index: number;
    value: string;
  };
};

export type UpdateVersionAction = {
  type: "UPDATE_VERSION";
  payload: {
    index: number;
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
  | AddDependencyAction
  | RemoveDependencyAction
  | UpdateDependencyAction
  | UpdateVersionAction
  | ResetFormAction;

// 초기 상태
export const initialState: PostFormState = {
  title: "",
  detail: "",
  code: "",
  devDependencies: [],
  codeVersions: []
};

// 타입 가드 함수들
export const isDependencyAction = (
  action: PostFormAction
): action is AddDependencyAction | RemoveDependencyAction | UpdateDependencyAction | UpdateVersionAction => {
  return ["ADD_DEPENDENCY", "REMOVE_DEPENDENCY", "UPDATE_DEPENDENCY", "UPDATE_VERSION"].includes(action.type);
};
