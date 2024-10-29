import { Link } from "react-router-dom";
import { useUserStore } from "@stores/userStore";

type HeaderMenuProps = {
  onClick: () => void;
};

export const HeaderMenu = ({ onClick }: HeaderMenuProps) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-64 bg-white-pure p-4">
      <nav className="fixed left-0 top-0 z-50 flex h-full w-64 flex-col items-center justify-center">
        <Link
          className="text-lg m-4 text-black"
          to="/post"
          onClick={() => {
            onClick();
          }}
        >
          게시글
        </Link>
        <Link
          className="text-lg m-4 text-black"
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
            <Link className="lightgray-btn m-4 h-10 w-24 p-1 flex-center" to="/login">
              로그인
            </Link>
            <Link className="primary-btn m-4 h-10 w-24 p-1 flex-center" to="/register">
              회원가입
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
