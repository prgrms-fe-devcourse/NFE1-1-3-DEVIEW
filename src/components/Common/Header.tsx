import { Logo } from "@components/Common/Logo";
import { SearchBar } from "@components/Common/SearchBar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="shadow">
      <header className="mx-auto flex h-28 max-w items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/">
            <Logo />
          </Link>

          <nav className="ml-8 flex space-x-8">
            <Link className="text-lg text-gray" type="button" to="/post">
              게시글
            </Link>
            <Link className="text-lg text-gray" type="button" to="/rank">
              유저랭킹
            </Link>
          </nav>
        </div>
        <div className="mx-16 flex-grow">
          <SearchBar />
        </div>
        <div className="flex space-x-2">
          <Link className="lightgray-btn h-10 w-24 p-1 flex-center" type="button" to="/login">
            로그인
          </Link>
          <Link className="primary-btn h-10 w-24 p-1 flex-center" type="button" to="/assign">
            회원가입
          </Link>
        </div>
      </header>
    </div>
  );
};
