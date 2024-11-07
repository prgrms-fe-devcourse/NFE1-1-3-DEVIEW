import { TNotification } from "@customTypes/notification";
import Avatar from "boring-avatars";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { GoBell } from "react-icons/go";
import { useNotificationMutations } from "@hooks/useNotificationMutations";

type HeaderNotificationModalProps = {
  toggleBellIconModal: () => void;
  notifications: TNotification[];
  onReadAll: () => void;
};

type DeleteNotificationRequestProps = {
  notificationId: string;
};

export const HeaderNotificationModal = ({
  toggleBellIconModal,
  notifications: initialNotifications,
  onReadAll
}: HeaderNotificationModalProps) => {
  const [notifications, setNotifications] = useState<TNotification[]>(initialNotifications);

  const { deleteNotificationMutate, readNotificationMutate, readAllNotificationsMutate } = useNotificationMutations(
    setNotifications,
    onReadAll
  );
  const onClickDelete = (event: React.MouseEvent, { notificationId }: DeleteNotificationRequestProps) => {
    event.preventDefault();
    event.stopPropagation();
    deleteNotificationMutate({ notificationId });
  };

  const onClickRead = (notificationId: string) => {
    readNotificationMutate({ notificationId });
  };

  const onClickReadAll = () => {
    readAllNotificationsMutate();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        document.body.style.overflow = "hidden";
      }
    };
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white-pure md:absolute md:inset-auto md:left-auto md:top-16 md:mt-2 md:h-80 md:w-96 md:max-w md:-translate-x-80 md:rounded md:border md:border-solid md:border-lightgray md:shadow 2md:-translate-x-36">
      <div className="flex-none border-b border-solid border-lightgray">
        <MdKeyboardDoubleArrowRight className="mb-2 h-16 w-6 cursor-pointer md:hidden" onClick={toggleBellIconModal} />
      </div>
      <div className="flex-1 overflow-y-auto overscroll-contain md:scrollbar-hide">
        {notifications.length > 0 ? (
          <>
            {notifications.map((notification) => (
              <Link
                key={notification.id}
                to={notification.post?._id ? `/post/${notification.post._id}` : "404"}
                onClick={() => {
                  onClickRead(notification.id);
                  toggleBellIconModal();
                }}
              >
                <div
                  className={`text-bold flex cursor-pointer items-center border-b border-solid border-lightgray px-4 py-4 hover:opacity-80 ${
                    notification.isRead ? "opacity-50" : ""
                  }`}
                >
                  <Avatar size={32} variant="beam" name={notification.sender.userId} />
                  <div className="ml-3 flex min-w-0 flex-1 flex-col text-16 text-black">
                    <p className="mb-1 truncate">{notification.title}</p>
                    <span className="text-16 text-gray">{notification.createdAt}</span>
                  </div>
                  <RiDeleteBinLine
                    className="ml-4 text-gray hover:text-black"
                    onClick={(e) => onClickDelete(e, { notificationId: notification.id })}
                  />
                </div>
              </Link>
            ))}
            <div className="flex-none px-4 py-4">
              <p className="h-4 cursor-pointer text-primary flex-center hover:opacity-70" onClick={onClickReadAll}>
                전체 확인
              </p>
            </div>
          </>
        ) : (
          <div className="h-full flex-col text-center text-gray flex-center">
            <GoBell className="mb-4 h-10 w-10" />
            <p>새로운 알림이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};
