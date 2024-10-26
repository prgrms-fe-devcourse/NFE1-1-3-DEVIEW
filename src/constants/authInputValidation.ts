export const AUTH_INPUT_VALIDATION = {
  id: {
    regexp: /^[a-zA-Z0-9._%+-]{5,15}$/,
    errorMessage: "아이디는 5자 이상 15자 이하여야 하며 영문자, 숫자, 특수문자(._%+-)만 사용해야 합니다."
  },
  password: {
    regexp: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
    errorMessage: "비밀번호는 8자 이상이어야 하며, 영문과 숫자로만 이루어져야 합니다."
  },
  name: {
    regexp: /^[가-힣]{2,4}$/,
    errorMessage: "이름은 2~4자의 한글로 이루어져야 합니다."
  }
};
