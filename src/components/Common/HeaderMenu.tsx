import { Link } from "react-router-dom";

export const HeaderMenu = () => {
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-64 bg-white-pure p-4">
      <nav className="fixed left-0 top-0 z-50 flex h-full w-64 flex-col items-center justify-center">
        <Link className="text-lg m-4 text-black" to="/post">
          게시글
        </Link>
        <Link className="text-lg m-4 text-black" to="/rank">
          유저랭킹
        </Link>
        <div />
        <Link className="lightgray-btn m-4 h-10 w-24 p-1 flex-center" to="/login">
          로그인
        </Link>
        <Link className="primary-btn m-4 h-10 w-24 p-1 flex-center" to="/assign">
          회원가입
        </Link>
      </nav>
    </div>
  );
};
