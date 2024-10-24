import { Input } from "@components/Common/Input";

export const ConfirmPasswordInput = () => {
  return <Input type="password" name="confirm_password" text="비밀번호 확인" required />;
};
