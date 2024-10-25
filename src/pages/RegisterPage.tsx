import { Logo } from "@components/Common/Logo";
import { IdInput } from "@components/Common/IdInput";
import { PasswordInput } from "@components/Common/PasswordInput";
import { Radio } from "@components/RegisterPage/Radio";
import { ConfirmPasswordInput } from "@components/RegisterPage/ConfirmPasswordInput";
import { NameInput } from "@pages/NameInput";
import { AUTH_INPUT_VALIDATION } from "@constants/authInputValidation";

export default function RegisterPage() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const [id, password, confirmPassword, name, group] = [
      formData.get("id") as string,
      formData.get("password") as string,
      formData.get("confirm_password") as string,
      formData.get("name") as string,
      formData.get("group") as string
    ];

    const isIdValid = AUTH_INPUT_VALIDATION.id.regexp.test(id);
    const isPasswordValid = AUTH_INPUT_VALIDATION.password.regexp.test(password);
    const isConfirmPasswordValid = password === confirmPassword;
    const isNameValid = AUTH_INPUT_VALIDATION.name.regexp.test(name);

    const isValid = isIdValid && isPasswordValid && isConfirmPasswordValid && isNameValid;

    if (isValid) {
      console.log("Valid");
      console.log({ id, password, confirmPassword, name, group });
      /*
      todo BackEnd로 회원가입 요청 전송
      ? 성공 시 -> 로그인 페이지로 리다이렉트
      * 실패 시 -> "회원 가입에 실패했습니다."
      */
    } else {
      if (!isIdValid) alert(AUTH_INPUT_VALIDATION.id.errorMessage);
      else if (!isPasswordValid) alert(AUTH_INPUT_VALIDATION.password.errorMessage);
      else if (!isConfirmPasswordValid) alert("비밀번호가 일치하지 않습니다.");
      else if (!isNameValid) alert(AUTH_INPUT_VALIDATION.name.errorMessage);
    }
  };
  return (
    <div className="max-w-sm mx-auto h-[100vh]">
      <form className="flex h-full flex-col justify-center" onSubmit={onSubmit}>
        <Logo className="mb-5 self-center" />
        <IdInput />
        <PasswordInput />
        <ConfirmPasswordInput />
        <NameInput />

        <div className="mb-5 flex items-center justify-between gap-10">
          <Radio id="student" name="group" text="학생" value="학생" />
          <Radio id="seeker" name="group" text="취준생" value="취준생" />
          <Radio id="developer" name="group" text="개발자" value="개발자" />
          <Radio id="etc" name="group" text="기타" value="기타" />
        </div>

        <button className="primary-btn mb-5">로그인</button>
      </form>
    </div>
  );
}
