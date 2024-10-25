import { useState } from "react";
import { Logo } from "@components/Common/Logo";
import { SearchBar } from "@components/Common/SearchBar";
import { Link } from "react-router-dom";
import { HeaderMenu } from "@components/Common/HeaderMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="shadow">
      <header className="mx-auto flex h-36 max-w flex-col items-center justify-between p-4 md:h-28 md:flex-row">
        <div className="flex w-full items-center md:w-auto">
          <button className="mr-4 md:hidden" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" fill="none">
              <path fill="#000" d="M0 12.5v-2h18v2H0Zm0-5v-2h18v2H0Zm0-5v-2h18v2H0Z" />
            </svg>
          </button>
          <div className="flex-grow text-center">
            <Link to="/" className="flex justify-center">
              <Logo />
            </Link>
          </div>
          <nav className="hidden md:ml-8 md:flex md:space-x-8">
            <Link className="text-lg text-gray" type="button" to="/post">
              게시글
            </Link>
            <Link className="text-lg text-gray" type="button" to="/rank">
              유저랭킹
            </Link>
          </nav>
        </div>
        <div className="w-full md:mx-16 md:w-auto md:flex-grow">
          <SearchBar />
        </div>
        <div className="hidden md:flex md:space-x-2">
          <Link className="lightgray-btn h-10 w-24 p-1 flex-center" type="button" to="/login">
            로그인
          </Link>
          <Link className="primary-btn h-10 w-24 p-1 flex-center" type="button" to="/assign">
            회원가입
          </Link>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-20 backdrop-blur-sm" onClick={onClick} />
          <HeaderMenu />
        </>
      )}
    </div>
  );
};
