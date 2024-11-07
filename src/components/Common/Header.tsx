import { useState } from "react";
import { Logo } from "@components/Common/Logo";
import { SearchBar } from "@components/Common/SearchBar";
import { Link, useLocation } from "react-router-dom";
import { HeaderMenu } from "@components/Common/HeaderMenu";
import { SearchFilter } from "@components/Common/SearchFilter";
import { HeaderLoginMenu } from "@components/Common/HeaderLoginMenu";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const location = useLocation();

  const openModal = () => setIsMenuOpen(true);
  const closeModal = () => setIsMenuOpen(false);

  const onFocus = () => {
    setIsFilterVisible(true);
    document.body.classList.add("overflow-hidden");
  };
  const onCloseFilter = () => {
    setIsFilterVisible(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-white-pure shadow">
      <header
        className="relative mx-auto flex h-36 max-w flex-col items-center justify-between p-4 md:h-28 md:flex-row"
        onClick={onCloseFilter}
      >
        <div className="relative flex h-14 w-full items-center md:w-auto">
          <div className="w-full md:hidden">
            <button className="absolute left-0 top-6 -translate-y-1/2 transform" onClick={openModal}>
              <GiHamburgerMenu className="h-5 w-8" />
            </button>
            <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <Logo className="h-10 w-44" />
            </Link>
          </div>

          <div className="hidden w-full items-center md:flex md:w-auto">
            <Link to="/" className="flex justify-center">
              <Logo />
            </Link>
            <nav className="ml-4 flex h-5 space-x-4 2md:ml-8 2md:space-x-8">
              <Link
                to="/post"
                className={`text-16 ${
                  location.pathname === "/post"
                    ? "border-b border-solid border-primary font-bold text-primary"
                    : "text-gray"
                } hover:border-b hover:border-solid hover:border-primary hover:font-bold hover:text-primary`}
              >
                게시글
              </Link>
              <Link
                to="/rank"
                className={`text-16 ${
                  location.pathname === "/rank"
                    ? "border-b border-solid border-primary font-bold text-primary"
                    : "text-gray"
                } hover:border-b hover:border-solid hover:border-primary hover:font-bold hover:text-primary`}
              >
                유저랭킹
              </Link>
            </nav>
          </div>
        </div>

        <div className="w-full flex-grow md:mx-4 md:w-auto 2md:mx-8">
          <SearchBar onCloseFilter={onCloseFilter} onFocus={onFocus} />
        </div>

        <HeaderLoginMenu />
      </header>

      {isFilterVisible && (
        <>
          <SearchFilter />
          <div
            className="fixed inset-x-0 top-36 z-10 h-[calc(100vh-9rem)] bg-black bg-opacity-10 backdrop-blur-sm md:top-36"
            onClick={onCloseFilter}
          />
        </>
      )}

      {isMenuOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-20 backdrop-blur-sm" onClick={closeModal} />
          <HeaderMenu closeModal={closeModal} />
        </>
      )}
    </div>
  );
};
