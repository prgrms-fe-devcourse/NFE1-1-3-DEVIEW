import { Input } from "@components/Common/Input";
import { AUTH_INPUT_VALIDATION } from "@constants/authInputValidation";

export const PasswordInput = () => {
  return (
    <Input
      autoComplete="off"
      text="비밀번호"
      name="password"
      type="password"
      errorMessage={AUTH_INPUT_VALIDATION.password.errorMessage}
      pattern={AUTH_INPUT_VALIDATION.password.regexp}
      required
    />
  );
};
