import { Input } from "@components/Common/Input";
import { INPUT_REGEX } from "@constants/regexList";

export const IdInput = () => {
  return (
    <Input
      name="id"
      text="아이디"
      errorMessage="아이디는 5자 이상 15자 이하여야 하며 영문자, 숫자, 특수문자(._%+-)만 사용해야 합니다."
      pattern={INPUT_REGEX.id}
      maxLength={15}
      autoFocus
    />
  );
};
