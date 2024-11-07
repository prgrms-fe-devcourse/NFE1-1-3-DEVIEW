import type { SweetAlertOptions } from "sweetalert2";

type SwalIconType = "warning" | "error" | "success" | "info" | "question";
type SwalPosition =
  | "top"
  | "top-start"
  | "top-end"
  | "center"
  | "center-start"
  | "center-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end";

export type SwalAlertOptions = Omit<SweetAlertOptions, "inputValidator"> & {
  inputValidator?: (value: any) => Promise<string | null> | string | null;
};

export const SWAL_OPTIONS = {
  confirm: {
    icon: "question" as SwalIconType,
    showCancelButton: true,
    confirmButtonColor: "#8889FF",
    cancelButtonColor: "#8C8C8C",
    confirmButtonText: "확인",
    cancelButtonText: "취소"
  },

  toast: {
    icon: "success" as SwalIconType,
    toast: true,
    position: "top-end" as SwalPosition,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  },

  error: {
    icon: "error" as SwalIconType,
    confirmButtonColor: "gray",
    confirmButtonText: "확인"
  },

  warning: {
    icon: "warning" as SwalIconType,
    showCancelButton: true,
    confirmButtonColor: "#8889FF",
    cancelButtonColor: "#8C8C8C",
    confirmButtonText: "확인",
    cancelButtonText: "취소"
  },

  success: {
    icon: "success" as SwalIconType,
    confirmButtonText: "확인"
  },

  prompt: {
    icon: "question" as SwalIconType,
    input: "textarea" as const,
    inputPlaceholder: "",
    showCancelButton: true,
    confirmButtonColor: "#8889FF",
    cancelButtonColor: "#8C8C8C",
    confirmButtonText: "신고 하기",
    cancelButtonText: "취소",
    inputValidator: (value: any) => {
      if (!value?.trim()) {
        return "내용을 입력해주세요";
      }
      return null;
    }
  }
} as const;
