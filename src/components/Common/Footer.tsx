import { Link } from "react-router-dom";
import { Logo } from "@components/Common/Logo";

export const Footer = () => {
  return (
    <footer className="h-auto bg-black py-7">
      <div className="my-auto max-w p-4 2xl:m-auto">
        <Link to="/">
          <Logo className="w-36 md:h-auto md:w-auto" />
        </Link>
        <p className="mt-8 text-12 text-white-sub">ⓒ2024. deview all rights reserved</p>
      </div>
    </footer>
  );
};
