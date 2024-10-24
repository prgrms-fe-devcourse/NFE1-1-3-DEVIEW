import { Input } from "@components/Common/Input";
import { AUTH_INPUT_VALIDATION } from "@constants/authInputValidation";

export const IdInput = () => {
  return (
    <Input
      name="id"
      text="아이디"
      errorMessage={AUTH_INPUT_VALIDATION.id.errorMessage}
      pattern={AUTH_INPUT_VALIDATION.id.regexp}
      maxLength={15}
      autoFocus
      required
    />
  );
};
