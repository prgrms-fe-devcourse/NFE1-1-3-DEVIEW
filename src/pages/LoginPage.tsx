import { Logo } from "@components/Common/Logo";
import { IdInput } from "@components/LoginPage/IdInput";
import { PasswordInput } from "@components/LoginPage/PasswordInput";

export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto h-[100vh]">
      <form className="flex h-full flex-col justify-center">
        <Logo className="mb-5 self-center" />
        <IdInput />
        <PasswordInput />
        <button className="primary-btn mb-5">로그인</button>
        <button className="text-btn">회원가입</button>
      </form>
    </div>
  );
}
