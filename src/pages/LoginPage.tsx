import { Logo } from "@components/Common/Logo";
import { IdInput } from "@components/LoginPage/IdInput";
import { PasswordInput } from "@components/LoginPage/PasswordInput";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto h-[100vh]">
      <form className="flex h-full flex-col justify-center">
        <Logo className="mb-5 self-center" />
        <IdInput />
        <PasswordInput />
        <button className="primary-btn mb-5">로그인</button>
        <Link className="text-btn mx-auto w-fit" type="button" to="/assign">
          회원가입
        </Link>
      </form>
    </div>
  );
}
