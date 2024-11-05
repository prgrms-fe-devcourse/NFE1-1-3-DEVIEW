import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "@stores/userStore";

type HeaderMenuProps = {
  onClick: () => void;
};

export const HeaderMenu = ({ onClick }: HeaderMenuProps) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const location = useLocation();
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-64 bg-white-pure p-4">
      <nav className="fixed left-0 top-0 z-50 flex h-full w-64 flex-col items-center justify-center">
        <Link
          className={`m-4 text-16 text-black ${
            location.pathname === "/post" ? "border-b border-solid border-primary font-bold text-primary" : ""
          } hover:border-b hover:border-solid hover:border-primary hover:font-bold hover:text-primary`}
          to="/post"
          onClick={() => {
            onClick();
          }}
        >
          게시글
        </Link>
        <Link
          className={`m-4 text-16 text-black ${
            location.pathname === "/rank" ? "border-b border-solid border-primary font-bold text-primary" : ""
          } hover:border-b hover:border-solid hover:border-primary hover:font-bold hover:text-primary`}
          to="/rank"
          onClick={() => {
            onClick();
          }}
        >
          유저랭킹
        </Link>
        <div />
        {isLoggedIn ? (
          ""
        ) : (
          <>
            <Link
              className="lightgray-btn m-4 h-8 w-16 p-1 text-14 flex-center 2md:h-10 2md:w-24 2md:text-16"
              to="/login"
            >
              로그인
            </Link>
            <Link
              className="primary-btn m-4 h-8 w-16 p-1 text-14 flex-center 2md:h-10 2md:w-24 2md:text-16"
              to="/register"
            >
              회원가입
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
