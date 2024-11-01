import { DevDependency } from "@customTypes/postCreate";
import { DEV_DEPENDENCIES_LIST } from "@constants/devDependenciesList";
import { PostFormState, PostFormAction, initialState } from "@customTypes/postCreate";

// 유틸리티 함수들
const versionUtils = {
  canRemoveVersion: (versions: string[]) => versions.length > 1,
  canRemoveDependency: (dependencies: DevDependency[]) => dependencies.length > 1,
  isValidDevDependency: (value: string): value is DevDependency => {
    return DEV_DEPENDENCIES_LIST.includes(value as DevDependency);
  }
};

// 각 액션에 대한 핸들러
const handlers = {
  SET_TITLE: (state: PostFormState, payload: string): PostFormState => ({
    ...state,
    title: payload
  }),

  SET_DETAIL: (state: PostFormState, payload: string): PostFormState => ({
    ...state,
    detail: payload
  }),

  SET_CODE: (state: PostFormState, payload: string): PostFormState => ({
    ...state,
    code: payload
  }),

  ADD_DEPENDENCY: (state: PostFormState): PostFormState => ({
    ...state,
    devDependencies: [...state.devDependencies, DEV_DEPENDENCIES_LIST[0]],
    devVersions: [...state.devVersions, ""]
  }),

  REMOVE_DEPENDENCY: (state: PostFormState, payload: number): PostFormState => {
    if (!versionUtils.canRemoveDependency(state.devDependencies)) {
      return state;
    }
    return {
      ...state,
      devDependencies: state.devDependencies.filter((_, index) => index !== payload),
      devVersions: state.devVersions.filter((_, index) => index !== payload)
    };
  },

  UPDATE_DEPENDENCY: (state: PostFormState, payload: { index: number; value: DevDependency }): PostFormState => ({
    ...state,
    devDependencies: state.devDependencies.map((dep, index) => (index === payload.index ? payload.value : dep))
  }),

  UPDATE_VERSION: (state: PostFormState, payload: { index: number; value: string }): PostFormState => ({
    ...state,
    devVersions: state.devVersions.map((version, index) => (index === payload.index ? payload.value : version))
  }),

  RESET_FORM: (): PostFormState => initialState
};

// 메인 리듀서 함수
export const postFormReducer = (state: PostFormState, action: PostFormAction): PostFormState => {
  switch (action.type) {
    case "SET_TITLE":
      return handlers.SET_TITLE(state, action.payload);
    case "SET_DETAIL":
      return handlers.SET_DETAIL(state, action.payload);
    case "SET_CODE":
      return handlers.SET_CODE(state, action.payload);
    case "ADD_DEPENDENCY":
      return handlers.ADD_DEPENDENCY(state);
    case "REMOVE_DEPENDENCY":
      return handlers.REMOVE_DEPENDENCY(state, action.payload);
    case "UPDATE_DEPENDENCY":
      return handlers.UPDATE_DEPENDENCY(state, action.payload);
    case "UPDATE_VERSION":
      return handlers.UPDATE_VERSION(state, action.payload);
    case "RESET_FORM":
      return handlers.RESET_FORM();
    default:
      return state;
  }
};

// 폼 유효성 검사 함수
export const validateForm = (state: PostFormState) => {
  const errors: Partial<Record<keyof PostFormState, string>> = {};

  if (!state.title.trim()) {
    errors.title = "제목을 입력해주세요.";
  }

  if (!state.detail.trim()) {
    errors.detail = "내용을 입력해주세요.";
  }

  if (!state.code.trim()) {
    errors.code = "코드를 입력해주세요.";
  }

  const hasEmptyDependency = state.devDependencies.some((dep) => !dep);
  const hasEmptyVersion = state.devVersions.some((version) => !version.trim());

  if (hasEmptyDependency || hasEmptyVersion) {
    errors.devDependencies = "모든 의존성과 버전 정보를 입력해주세요.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// 의존성 관련 액션 타입 가드
export const isDependencyAction = (
  action: PostFormAction
): action is Extract<
  PostFormAction,
  { type: "ADD_DEPENDENCY" | "REMOVE_DEPENDENCY" | "UPDATE_DEPENDENCY" | "UPDATE_VERSION" }
> => {
  return ["ADD_DEPENDENCY", "REMOVE_DEPENDENCY", "UPDATE_DEPENDENCY", "UPDATE_VERSION"].includes(action.type);
};
