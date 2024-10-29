import { useState } from "react";
import { Logo } from "@components/Common/Logo";
import { SearchBar } from "@components/Common/SearchBar";
import { Link, useLocation } from "react-router-dom";
import { HeaderMenu } from "@components/Common/HeaderMenu";
import { SearchFilter } from "@components/Common/SearchFilter";
import { HeaderLoginMenu } from "@components/Common/HeaderLoginMenu";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const location = useLocation();

  const onClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const onSelectFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters((prev) => [...prev, filter]);
    }
    setIsFilterVisible(true);
  };

  const onDeleteFilter = (filter: string) => {
    setSelectedFilters((prev) => prev.filter((f) => f !== filter));
  };

  const onClearFilters = () => {
    setSelectedFilters([]);
  };

  const onFocus = () => {
    setIsFilterVisible(true);
    document.body.classList.add("overflow-hidden");
  };
  const onCloseFilter = () => {
    setIsFilterVisible(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className="shadow">
      <header
        className="relative mx-auto flex h-36 max-w flex-col items-center justify-between p-4 md:h-28 md:flex-row"
        onClick={onCloseFilter}
      >
        <div className="flex w-full items-center md:w-auto">
          <button className="mr-4 md:hidden" onClick={onClick}>
            <GiHamburgerMenu className="h- w-8" />
          </button>
          <div className="flex-grow text-center">
            <Link to="/" className="flex justify-center">
              <Logo className="h-10 w-44 md:h-auto md:w-auto" />
            </Link>
          </div>
          <nav className="hidden md:ml-8 md:flex md:space-x-8">
            <Link
              to="/post"
              className={`text-lg ${
                location.pathname === "/post"
                  ? "border-b border-solid border-primary font-bold text-primary"
                  : "text-gray"
              } hover:border-b hover:border-solid hover:border-primary hover:font-bold hover:text-primary`}
            >
              게시글
            </Link>
            <Link
              to="/rank"
              className={`text-lg ${
                location.pathname === "/rank"
                  ? "border-b border-solid border-primary font-bold text-primary"
                  : "text-gray"
              } hover:border-b hover:border-solid hover:border-primary hover:font-bold hover:text-primary`}
            >
              유저랭킹
            </Link>
          </nav>
        </div>
        <div className="w-full md:mx-16 md:w-auto md:flex-grow">
          <SearchBar
            onCloseFilter={() => {
              onCloseFilter();
            }}
            selectedFilters={selectedFilters}
            onDeleteFilter={onDeleteFilter}
            onFocus={onFocus}
          />
        </div>
        <HeaderLoginMenu />
      </header>

      {isFilterVisible && (
        <>
          <SearchFilter onSelectFilter={onSelectFilter} onClearFilters={onClearFilters} />
          <div
            className="fixed inset-x-0 top-36 z-10 h-[calc(100vh-9rem)] bg-black bg-opacity-10 backdrop-blur-sm md:top-36"
            onClick={onCloseFilter}
          />
        </>
      )}

      {isMenuOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-20 backdrop-blur-sm" onClick={onClick} />
          <HeaderMenu onClick={onClick} />
        </>
      )}
    </div>
  );
}
