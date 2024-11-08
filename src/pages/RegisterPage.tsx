import { Logo } from "@components/Common/Logo";
import { IdInput } from "@components/Common/IdInput";
import { PasswordInput } from "@components/Common/PasswordInput";
import { ConfirmPasswordInput } from "@components/RegisterPage/ConfirmPasswordInput";
import { AUTH_INPUT_VALIDATION } from "@constants/authInputValidation";
import { NameInput } from "@components/Common/NameInput";
import { Link, useNavigate } from "react-router-dom";
import { register } from "@services/auth/register";
import { UserInfo } from "@customTypes/userInfo";
import { Radio } from "@components/Common/Radio";
import { errorAlert } from "@utils/sweetAlert/alerts";

export default function RegisterPage() {
  const navigate = useNavigate();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const [userId, password, confirmPassword, username, group] = [
      formData.get("userId") as UserInfo["userId"],
      formData.get("password") as string,
      formData.get("confirm_password") as string,
      formData.get("name") as UserInfo["username"],
      formData.get("group") as UserInfo["group"]
    ];

    const isIdValid = AUTH_INPUT_VALIDATION.id.regexp.test(userId);
    const isPasswordValid = AUTH_INPUT_VALIDATION.password.regexp.test(password);
    const isConfirmPasswordValid = password === confirmPassword;
    const isNameValid = AUTH_INPUT_VALIDATION.name.regexp.test(username);

    const isValid = isIdValid && isPasswordValid && isConfirmPasswordValid && isNameValid;

    const errorTitle = "회원 가입에 실패했습니다.";

    if (isValid) {
      register({
        group,
        userId,
        password,
        username,
        role: "user"
      })
        .then(() => {
          navigate("/login"); // 성공 시 로그인 페이지로 리다이렉트
        })
        .catch((error) => {
          console.error(error);
          errorAlert({ title: errorTitle, text: error.message });
        });
    } else {
      if (!isIdValid) errorAlert({ title: errorTitle, text: AUTH_INPUT_VALIDATION.id.errorMessage });
      else if (!isPasswordValid) errorAlert({ title: errorTitle, text: AUTH_INPUT_VALIDATION.password.errorMessage });
      else if (!isConfirmPasswordValid) errorAlert({ title: errorTitle, text: "비밀번호가 일치하지 않습니다." });
      else if (!isNameValid) errorAlert({ title: errorTitle, text: AUTH_INPUT_VALIDATION.name.errorMessage });
    }
  };
  return (
    <div className="mx-auto h-[100vh] max-w-sm p-4">
      <form className="flex h-full flex-col justify-center" onSubmit={onSubmit}>
        <Link to="/" className="mb-5 self-center">
          <Logo />
        </Link>
        <IdInput />
        <PasswordInput />
        <ConfirmPasswordInput />
        <NameInput />

        <div className="mb-5 flex items-center justify-between gap-5 md:gap-10">
          <Radio id="student" name="group" text="학생" value="학생" defaultChecked />
          <Radio id="seeker" name="group" text="취준생" value="취준생" />
          <Radio id="developer" name="group" text="개발자" value="개발자" />
          <Radio id="etc" name="group" text="기타" value="기타" />
        </div>

        <button className="primary-btn mb-5">회원가입</button>
      </form>
    </div>
  );
}
