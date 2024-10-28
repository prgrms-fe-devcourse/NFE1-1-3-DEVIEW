import { Link } from "react-router-dom";
import { Logo } from "@components/Common/Logo";

export default function Footer() {
  return (
    <footer className="h-40 bg-black px-16 py-7">
      <Link to="/">
        <Logo />
      </Link>
      <p className="mt-8 text-12 text-white-sub">ⓒ2024. deview all rights reserved</p>
    </footer>
  );
}
