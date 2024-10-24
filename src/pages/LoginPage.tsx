import { Logo } from "@components/Common/Logo";
import { IdInput } from "@components/LoginPage/IdInput";
import { PasswordInput } from "@components/LoginPage/PasswordInput";

export default function LoginPage() {
  return (
    <div className="mx-auto flex h-[100vh] max-w flex-col justify-center">
      <Logo className="mb-5 self-center" />
      <div className="mb-5">
        <p className="mb-3 text-20 text-secondary">아이디</p>
        <IdInput />
      </div>
      <div className="mb-5">
        <p className="mb-3 text-20 text-secondary">비밀번호</p>
        <PasswordInput />
      </div>
      <button className="primary-btn mb-5">로그인</button>
      <button className="text-btn">회원가입</button>
    </div>
  );
}
