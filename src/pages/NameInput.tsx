import { Input } from "@components/Common/Input";
import { AUTH_INPUT_VALIDATION } from "@constants/authInputValidation";
export const NameInput = () => {
  return (
    <Input
      name="name"
      text="이름"
      errorMessage={AUTH_INPUT_VALIDATION.name.errorMessage}
      pattern={AUTH_INPUT_VALIDATION.name.regexp}
      required
    />
  );
};
