import { PostFormState, PostFormAction } from "@/customTypes/postCreate";

export const initialState: PostFormState = {
  title: "",
  detail: "",
  code: "",
  devDependencies: [{ id: "1", dependency: "", version: "" }]
};

const versionUtils = {
  createNewVersion: (currentVersions: PostFormState["devDependencies"]) => ({
    id: String(currentVersions.length + 1),
    dependency: "",
    version: ""
  }),
  canRemoveVersion: (devDependencies: PostFormState["devDependencies"]) => devDependencies.length > 1,
  updateVersion: (
    versions: PostFormState["devDependencies"],
    id: string,
    field: "dependency" | "version",
    value: string
  ) => versions.map((v) => (v.id === id ? { ...v, [field]: value } : v))
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
  ADD_VERSION: (state: PostFormState): PostFormState => ({
    ...state,
    devDependencies: [...state.devDependencies, versionUtils.createNewVersion(state.devDependencies)]
  }),
  REMOVE_VERSION: (state: PostFormState, payload: string): PostFormState => {
    if (!versionUtils.canRemoveVersion(state.devDependencies)) {
      return state;
    }
    return {
      ...state,
      devDependencies: state.devDependencies.filter((v) => v.id !== payload)
    };
  },
  UPDATE_VERSION: (
    state: PostFormState,
    payload: { id: string; field: "dependency" | "version"; value: string }
  ): PostFormState => ({
    ...state,
    devDependencies: versionUtils.updateVersion(state.devDependencies, payload.id, payload.field, payload.value)
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

export const isVersionAction = (
  action: PostFormAction
): action is Extract<PostFormAction, { type: "ADD_VERSION" | "REMOVE_VERSION" | "UPDATE_VERSION" }> => {
  return ["ADD_VERSION", "REMOVE_VERSION", "UPDATE_VERSION"].includes(action.type);
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
  const hasEmptyVersion = state.devDependencies.some((v) => !v.dependency || !v.version.trim());
  if (hasEmptyVersion) {
    errors.devDependencies = "모든 버전 정보를 입력해주세요.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
