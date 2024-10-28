import { HeaderUserModal } from "@components/Common/HeaderUserModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GoBell } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { useUserStore } from "@stores/userStore";

export const HeaderLoginMenu = () => {
  const [isUserIconOpen, setIsUserIconOpen] = useState(false);
  const toggleUserIconModal = () => {
    setIsUserIconOpen(!isUserIconOpen);
  };
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <div className="absolute right-4 top-2 flex md:static md:flex md:space-x-8">
          <Link
            className="primary-btn hidden hover:opacity-80 md:h-10 md:w-24 md:p-1 md:flex-center"
            type="button"
            to="/post/create"
          >
            질문하기
          </Link>
          <GoBell className="mr-4 h-10 w-6 md:h-10 md:w-10" />
          <CiUser className="h-10 w-6 md:h-10 md:w-10" onClick={toggleUserIconModal} />
          {isUserIconOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={toggleUserIconModal} />
              <HeaderUserModal toggleUserIconModal={toggleUserIconModal} />
            </>
          )}
        </div>
      ) : (
        <div className="hidden md:flex md:space-x-2">
          <Link className="lightgray-btn h-10 w-24 p-1 flex-center hover:opacity-80" type="button" to="/login">
            로그인
          </Link>
          <Link className="primary-btn h-10 w-24 p-1 flex-center hover:opacity-80" type="button" to="/register">
            회원가입
          </Link>
        </div>
      )}
    </div>
  );
};
