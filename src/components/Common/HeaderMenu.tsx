import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "@stores/userStore";
import Avatar from "boring-avatars";
import { IoCloseSharp } from "react-icons/io5";
import { logout } from "@services/auth/logout";

type HeaderMenuProps = {
  closeModal: () => void;
};

type NavLinkProps = {
  to: string;
  label: string;
  onClick?: () => void;
  currentPath: string;
};

const NavLink = ({ to, label, onClick, currentPath }: NavLinkProps) => {
  const isActive = currentPath === to;

  return (
    <Link
      className={`my-4 h-[18px] w-fit text-16 ${
        isActive
          ? "border-b border-solid border-primary font-bold text-primary"
          : "text-black hover:border-b hover:border-solid hover:border-primary hover:font-bold hover:text-primary"
      }`}
      to={to}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export const HeaderMenu = ({ closeModal }: HeaderMenuProps) => {
  const { isLoggedIn, userInfo, clearUserInfo } = useUserStore();
  const location = useLocation();

  const onClickLogout = async () => {
    try {
      await logout();
      clearUserInfo();
      closeModal();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navLinks = [
    { to: "/", label: "🏠 홈" },
    { to: "/post", label: "🌈 게시글" },
    { to: "/rank", label: "👑 유저랭킹" },
    ...(isLoggedIn ? [{ to: "/mypage", label: "📌 마이페이지" }] : [])
  ];

  return (
    <aside className="shadow-lg fixed left-0 top-0 z-50 h-full w-64 bg-white-pure pt-16">
      {/* Close Button */}
      <button
        className="hover:bg-gray-100 absolute right-4 top-4 rounded-full p-2 transition-colors"
        onClick={closeModal}
        aria-label="Close menu"
      >
        <IoCloseSharp className="text-24" />
      </button>
      <div className="flex w-full flex-col justify-between px-4">
        {/* User Profile Section */}
        <div className="mb-8">
          <Avatar name={userInfo?.userId || ""} variant="beam" size={50} />
          <div className="mb-2 mt-6 flex items-center gap-2">
            <p className="text-20 font-semibold">
              {userInfo?.username || "🚨로그인이 필요해요~!"}
              {isLoggedIn && (
                <>
                  <span className="text-16 font-normal">님</span>
                  <div className="mt-2 flex items-center gap-1 text-14 text-gray">
                    <p>{userInfo?.group as string}</p>
                    <p>{userInfo?.userId}</p>
                  </div>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <NavLink key={link.label} {...link} onClick={closeModal} currentPath={location.pathname} />
          ))}
          {isLoggedIn && (
            <button
              className="my-4 h-4 w-fit text-left text-black hover:border-b hover:border-solid hover:border-primary hover:font-bold hover:text-primary"
              onClick={onClickLogout}
            >
              😭 로그아웃
            </button>
          )}
        </nav>
        {!isLoggedIn && (
          <div className="mt-12 flex flex-col gap-2">
            <Link className="rounded-md lightgray-btn p-3 text-center text-16" to="/login">
              로그인
            </Link>
            <Link className="rounded-md primary-btn mt-4 p-3 text-center text-16 hover:opacity-90" to="/register">
              회원가입
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
};
