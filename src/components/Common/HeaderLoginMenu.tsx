import { HeaderUserModal } from "@components/Common/HeaderUserModal";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoBell } from "react-icons/go";
import { useUserStore } from "@stores/userStore";
import { HeaderNotificationModal } from "@components/Common/HeaderNotificationModal";
import { NotificationCount } from "@components/Common/NotificationCount";
import useSocketStore from "@stores/socketStore";
import { getMyNotifications } from "@services/notification/getMyNotifications";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Avatar from "boring-avatars";

export const HeaderLoginMenu = () => {
  const [isUserIconOpen, setIsUserIconOpen] = useState(false);
  const [isBellIconOpen, setIsBellIconOpen] = useState(false);
  const { isLoggedIn, userInfo } = useUserStore();
  const { socket } = useSocketStore();
  const queryClient = useQueryClient();

  const toggleUserIconModal = () => {
    setIsUserIconOpen(!isUserIconOpen);
  };

  const toggleBellIconModal = () => {
    setIsBellIconOpen(!isBellIconOpen);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["getMyNotifications"],
    queryFn: () =>
      getMyNotifications({
        page: 1,
        limit: 10
      }),
    enabled: isLoggedIn
  });

  useEffect(() => {
    if (socket) {
      socket.on("newNotification", () => {
        queryClient.invalidateQueries({ queryKey: ["getMyNotifications"] });
      });
      socket.on("adminNotification", (data) => {
        if (userInfo?.role === "admin") {
          console.log("서버서벗버서버");
          queryClient.invalidateQueries({ queryKey: ["getMyNotifications"] });
          console.log(data);
        }
      });
    }
    return () => {
      if (socket) {
        socket.off("newNotification");
      }
    };
  }, [socket, queryClient]);

  if (isLoading)
    return (
      <div className="flex">
        <span>Loading...</span>
      </div>
    );
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      {isLoggedIn ? (
        <div className="md: absolute right-4 top-2 flex md:static md:flex md:gap-4 2md:space-x-8">
          <Link
            className="primary-btn hidden hover:opacity-80 md:h-10 md:w-24 md:p-1 2md:flex-center"
            type="button"
            to="/post/create"
          >
            질문하기
          </Link>
          <div onClick={toggleBellIconModal} className="relative inline-block">
            <GoBell className="mr-2 h-10 w-6 cursor-pointer md:mr-0 md:h-8 md:w-8 2md:h-10 2md:w-10" />
            <NotificationCount count={data?.unreadNotificationsCount ?? 0} />
          </div>
          {isBellIconOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={toggleBellIconModal} />
              <HeaderNotificationModal
                toggleBellIconModal={toggleBellIconModal}
                notifications={data?.notifications ?? []}
                onReadAll={() => {
                  queryClient.invalidateQueries({ queryKey: ["getMyNotifications"] });
                }}
              />
            </>
          )}
          <div
            className="mt-2 h-6 w-6 cursor-pointer overflow-hidden rounded-full md:mt-0 md:h-8 md:w-8 2md:h-10 2md:w-10"
            onClick={toggleUserIconModal}
          >
            <Avatar name={userInfo?.userId ?? ""} variant="beam" />
          </div>
          {isUserIconOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={toggleUserIconModal} />
              <HeaderUserModal toggleUserIconModal={toggleUserIconModal} />
            </>
          )}
        </div>
      ) : (
        <div className="hidden md:flex md:flex-col md:items-center 2md:flex-row">
          <Link
            className="lightgray-btn my-4 h-8 w-16 p-1 text-14 flex-center md:m-1 2md:h-10 2md:w-24 2md:text-16"
            to="/login"
          >
            로그인
          </Link>
          <Link
            className="primary-btn m-4 h-8 w-16 p-1 text-14 flex-center md:m-1 2md:h-10 2md:w-24 2md:text-16"
            to="/register"
          >
            회원가입
          </Link>
        </div>
      )}
    </div>
  );
};
