import { customToast, errorAlert } from "@utils/sweetAlert/alerts";
import { Logo } from "@components/Common/Logo";
import { IdInput } from "@components/Common/IdInput";
import { PasswordInput } from "@components/Common/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_INPUT_VALIDATION } from "@constants/authInputValidation";
import { login } from "@services/auth/login";
import { AccessTokenStorage } from "@utils/localStorage";
import { useUserStore } from "@stores/userStore";
import { useSocketStore } from "@stores/socketStore";

export default function LoginPage() {
  const { setUserInfo } = useUserStore();
  const navigate = useNavigate();
  const { socket } = useSocketStore();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const $form = e.target as HTMLFormElement;
    const formData = new FormData($form);
    const [userId, password] = [formData.get("userId") as string, formData.get("password") as string];
    const isIdValid = AUTH_INPUT_VALIDATION.id.regexp.test(userId);
    const isPasswordValid = AUTH_INPUT_VALIDATION.password.regexp.test(password);
    const isValid = isIdValid && isPasswordValid;
    const socketId = socket!.id as string;

    if (isValid) {
      login({ userId, password, socketId })
        .then((data) => {
          AccessTokenStorage.setToken(data.accessToken);
          setUserInfo(data.userInfo);
          navigate("/");
          customToast({ title: "로그인에 성공했습니다." });
        })
        .catch((error) => errorAlert({ title: "로그인 중 오류가 발생했습니다.", text: error.message }));
    } else if (!isIdValid) {
      errorAlert({ title: "로그인 중 오류가 발생했습니다.", text: AUTH_INPUT_VALIDATION.id.errorMessage });
      ($form["userId"] as HTMLInputElement).focus();
    } else if (!isPasswordValid) {
      errorAlert({ title: "로그인 중 오류가 발생했습니다.", text: AUTH_INPUT_VALIDATION.password.errorMessage });
      ($form["password"] as HTMLInputElement).focus();
    }
  };

  return (
    <div className="mx-auto h-[100vh] max-w-sm p-4 md:p-0">
      <form className="flex h-full flex-col justify-center" onSubmit={onSubmit}>
        <Link to="/" className="mb-5 self-center">
          <Logo />
        </Link>
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
