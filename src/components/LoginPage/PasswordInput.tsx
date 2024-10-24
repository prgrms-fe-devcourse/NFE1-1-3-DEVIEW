import { Input } from "@components/Common/Input";

export const PasswordInput = () => {
  return (
    <Input
      text="비밀번호"
      name="password"
      type="password"
      errorMessage="비밀번호는 8자 이상이어야 하며, 영문과 숫자로만 이루어져야 합니다."
      pattern={/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/}
    />
  );
};
