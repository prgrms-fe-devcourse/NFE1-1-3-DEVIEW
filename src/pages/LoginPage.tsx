import { Logo } from "@components/Common/Logo";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w">
      <Logo />
      <input name="id" type="email" />
      <button className="primary-btn">asd</button>
      <button className="text-btn">비밀번호 찾기</button>
    </div>
  );
}
