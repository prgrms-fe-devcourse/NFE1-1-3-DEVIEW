import { PostFormState, PostFormAction } from "@/customTypes/postCreate";

// 초기 상태
export const initialState: PostFormState = {
  title: "",
  content: "",
  code: "",
  versions: [{ id: "1", lan: "", version: "" }]
};

// 버전 관련 유틸리티 함수들
const versionUtils = {
  createNewVersion: (currentVersions: PostFormState["versions"]) => ({
    id: String(currentVersions.length + 1),
    lan: "",
    version: ""
  }),

  canRemoveVersion: (versions: PostFormState["versions"]) => versions.length > 1,

  updateVersion: (versions: PostFormState["versions"], id: string, field: "lan" | "version", value: string) =>
    versions.map((v) => (v.id === id ? { ...v, [field]: value } : v))
};

// Reducer 액션 핸들러
const handlers = {
  SET_TITLE: (state: PostFormState, payload: string): PostFormState => ({
    ...state,
    title: payload
  }),

  SET_CONTENT: (state: PostFormState, payload: string): PostFormState => ({
    ...state,
    content: payload
  }),

  SET_CODE: (state: PostFormState, payload: string): PostFormState => ({
    ...state,
    code: payload
  }),

  ADD_VERSION: (state: PostFormState): PostFormState => ({
    ...state,
    versions: [...state.versions, versionUtils.createNewVersion(state.versions)]
  }),

  REMOVE_VERSION: (state: PostFormState, payload: string): PostFormState => {
    if (!versionUtils.canRemoveVersion(state.versions)) {
      return state;
    }
    return {
      ...state,
      versions: state.versions.filter((v) => v.id !== payload)
    };
  },

  UPDATE_VERSION: (
    state: PostFormState,
    payload: { id: string; field: "lan" | "version"; value: string }
  ): PostFormState => ({
    ...state,
    versions: versionUtils.updateVersion(state.versions, payload.id, payload.field, payload.value)
  }),

  RESET_FORM: (): PostFormState => initialState
};

// Reducer
export const postFormReducer = (state: PostFormState, action: PostFormAction): PostFormState => {
  switch (action.type) {
    case "SET_TITLE":
      return handlers.SET_TITLE(state, action.payload);

    case "SET_CONTENT":
      return handlers.SET_CONTENT(state, action.payload);

    case "SET_CODE":
      return handlers.SET_CODE(state, action.payload);

    case "ADD_VERSION":
      return handlers.ADD_VERSION(state);

    case "REMOVE_VERSION":
      return handlers.REMOVE_VERSION(state, action.payload);

    case "UPDATE_VERSION":
      return handlers.UPDATE_VERSION(state, action.payload);

    case "RESET_FORM":
      return handlers.RESET_FORM();

    default:
      return state;
  }
};

// 타입 가드
export const isVersionAction = (
  action: PostFormAction
): action is Extract<PostFormAction, { type: "ADD_VERSION" | "REMOVE_VERSION" | "UPDATE_VERSION" }> => {
  return ["ADD_VERSION", "REMOVE_VERSION", "UPDATE_VERSION"].includes(action.type);
};

// 폼 유효성 검사 유틸리티
export const validateForm = (state: PostFormState) => {
  const errors: Partial<Record<keyof PostFormState, string>> = {};

  if (!state.title.trim()) {
    errors.title = "제목을 입력해주세요.";
  }

  if (!state.content.trim()) {
    errors.content = "내용을 입력해주세요.";
  }

  if (!state.code.trim()) {
    errors.code = "코드를 입력해주세요.";
  }

  const hasEmptyVersion = state.versions.some((v) => !v.lan || !v.version.trim());
  if (hasEmptyVersion) {
    errors.versions = "모든 버전 정보를 입력해주세요.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
