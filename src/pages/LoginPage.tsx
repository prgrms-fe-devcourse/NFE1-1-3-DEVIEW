import { Logo } from "@components/Common/Logo";
import { IdInput } from "@components/Common/IdInput";
import { PasswordInput } from "@components/Common/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_INPUT_VALIDATION } from "@constants/authInputValidation";
import { login } from "@services/auth/login";

export default function LoginPage() {
  const navigate = useNavigate();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const $form = e.target as HTMLFormElement;
    const formData = new FormData($form);
    const [id, password] = [formData.get("userId") as string, formData.get("password") as string];
    const isIdValid = AUTH_INPUT_VALIDATION.id.regexp.test(id);
    const isPasswordValid = AUTH_INPUT_VALIDATION.password.regexp.test(password);
    const isValid = isIdValid && isPasswordValid;

    if (isValid) {
      login({ id, password }).then((data) => {
        console.log(data);
        //todo axios interceptor 이용하여 토큰 헤더에 포함
        //todo userInfo localStorage 및 전역 상태에 저장
        navigate("/");
      });
    } else if (!isIdValid) {
      alert(AUTH_INPUT_VALIDATION.id.errorMessage);
      ($form["userId"] as HTMLInputElement).focus();
    } else if (isPasswordValid) {
      alert(AUTH_INPUT_VALIDATION.password.errorMessage);
      ($form["password"] as HTMLInputElement).focus();
    }
  };
  return (
    <div className="mx-auto h-[100vh] max-w-sm">
      <form className="flex h-full flex-col justify-center" onSubmit={onSubmit}>
        <Logo className="mb-5 self-center" />
        <IdInput />
        <PasswordInput />
        <button className="primary-btn mb-5">로그인</button>
        <Link className="text-btn mx-auto w-fit" type="button" to="/register">
          회원가입
        </Link>
      </form>
    </div>
  );
}
