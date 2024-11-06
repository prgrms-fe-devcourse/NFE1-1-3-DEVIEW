import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useUserStore } from "@stores/userStore";
import { logout } from "@services/auth/logout";
import { HiMiniCog6Tooth } from "react-icons/hi2";
type HeaderUserModalProps = {
  toggleUserIconModal: () => void;
};

export const HeaderUserModal = ({ toggleUserIconModal }: HeaderUserModalProps) => {
  const navigate = useNavigate();
  const { clearUserInfo, userInfo } = useUserStore();

  const onClickLogout = () => {
    clearUserInfo();
    toggleUserIconModal();
    logout();
    navigate("/");
  };
  return (
    <div className="absolute top-6 z-50 mt-2 w-20 max-w -translate-x-5 whitespace-pre rounded border border-solid border-lightgray bg-white-pure shadow md:top-16 md:w-36 md:-translate-x-16 md:whitespace-nowrap 2md:translate-x-24">
      <div className="py-2 text-gray">
        <Link
          className="block w-full border-b border-solid border-lightgray px-4 py-2 text-10 flex-center hover:opacity-50 md:text-20"
          to="/mypage"
          onClick={toggleUserIconModal}
        >
          <CiUser className="hidden md:block md:h-6 md:w-6" />
          마이페이지
        </Link>
        {userInfo?.role === "admin" && (
          <Link
            className="block w-full border-b border-solid border-lightgray px-4 py-2 text-10 flex-center hover:opacity-50 md:text-20"
            to="/admin"
            onClick={toggleUserIconModal}
          >
            <HiMiniCog6Tooth />
            &nbsp;관리페이지
          </Link>
        )}
        <button
          className="block w-full px-4 py-2 text-10 flex-center hover:opacity-50 md:text-20"
          onClick={onClickLogout}
        >
          <IoIosLogOut className="mr-1 hidden md:block" />
          로그아웃
        </button>
      </div>
    </div>
  );
};
