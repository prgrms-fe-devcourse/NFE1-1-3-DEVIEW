import { Logo } from "@components/Common/Logo";
import { IdInput } from "@components/LoginPage/IdInput";
import { PasswordInput } from "@components/LoginPage/PasswordInput";
import { INPUT_REGEX } from "@constants/regexList";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const [id, password] = [formData.get("id") as string, formData.get("password") as string];

    const isValid = INPUT_REGEX.id.test(id) && INPUT_REGEX.password.test(password);
    if (isValid) {
      console.log("Valid");
      /*
      todo BackEnd로 요청 전송
      ? 성공 시 -> 로그인 정보 저장(로컬 스토리지? 쿠키?) 및 메인으로 리다이렉트
      * 실패 시 -> "아이디 또는 비밀번호가 잘못되었습니다!" 알림 및 form reset
      */
    } else console.log("Invalid");
  };
  return (
    <div className="max-w-sm mx-auto h-[100vh]">
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
