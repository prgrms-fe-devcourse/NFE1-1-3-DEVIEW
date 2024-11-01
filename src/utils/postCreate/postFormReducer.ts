import { PostFormState, PostFormAction, initialState } from "@customTypes/postCreate";
import { DevDependency } from "@customTypes/postCreate";

const versionUtils = {
  canRemoveVersion: (versions: string[]) => versions.length > 1,
  canRemoveDependency: (dependencies: string[]) => dependencies.length > 1
};

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
    devDependencies: [...state.devDependencies],
    codeVersions: [...state.codeVersions, ""]
  }),

  REMOVE_DEPENDENCY: (state: PostFormState, payload: number): PostFormState => {
    if (!versionUtils.canRemoveDependency(state.devDependencies)) {
      return state;
    }
    return {
      ...state,
      devDependencies: state.devDependencies.filter((_, index) => index !== payload),
      codeVersions: state.codeVersions.filter((_, index) => index !== payload)
    };
  },

  UPDATE_DEPENDENCY: (state: PostFormState, payload: { index: number; value: DevDependency }): PostFormState => ({
    ...state,
    devDependencies: state.devDependencies.map((dep, index) => (index === payload.index ? payload.value : dep))
  }),

  UPDATE_VERSION: (state: PostFormState, payload: { index: number; value: string }): PostFormState => ({
    ...state,
    codeVersions: state.codeVersions.map((version, index) => (index === payload.index ? payload.value : version))
  }),

  RESET_FORM: (): PostFormState => initialState
};

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

export const isDependencyAction = (
  action: PostFormAction
): action is Extract<
  PostFormAction,
  { type: "ADD_DEPENDENCY" | "REMOVE_DEPENDENCY" | "UPDATE_DEPENDENCY" | "UPDATE_VERSION" }
> => {
  return ["ADD_DEPENDENCY", "REMOVE_DEPENDENCY", "UPDATE_DEPENDENCY", "UPDATE_VERSION"].includes(action.type);
};

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

  const hasEmptyDependency = state.devDependencies.some((dep) => !dep.trim());
  const hasEmptyVersion = state.codeVersions.some((version) => !version.trim());

  if (hasEmptyDependency || hasEmptyVersion) {
    errors.devDependencies = "모든 의존성과 버전 정보를 입력해주세요.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
