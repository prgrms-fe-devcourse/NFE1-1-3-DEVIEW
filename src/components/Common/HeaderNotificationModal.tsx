import { TNotification } from "@customTypes/notification";
import Avatar from "boring-avatars";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

type HeaderNotificationModalProps = {
  toggleBellIconModal: () => void;
  notifications: TNotification[];
};

export const HeaderNotificationModal = ({ toggleBellIconModal, notifications }: HeaderNotificationModalProps) => {
  console.log(notifications);
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full overflow-y-auto whitespace-pre border border-solid border-lightgray bg-white-pure scrollbar-hide md:absolute md:left-auto md:top-16 md:mt-2 md:h-80 md:w-96 md:max-w md:-translate-x-64 md:whitespace-nowrap md:rounded md:shadow">
      <div className="block border-b border-solid border-lightgray">
        <MdKeyboardDoubleArrowRight className="h-16 w-6 cursor-pointer md:hidden" onClick={toggleBellIconModal} />
      </div>

      {notifications.length > 0 ? (
        <>
          {notifications.map((notification) => (
            <Link to={`/post/${notification.post._id}`} onClick={toggleBellIconModal}>
              <div
                key={notification.id}
                className="text-bold flex cursor-pointer items-center border-b border-solid border-lightgray px-4 py-4 last:border-none hover:opacity-70"
              >
                <Avatar size={32} variant="beam" name={notification.sender.userId} />
                <div className="ml-3 flex min-w-0 flex-1 flex-col text-16 text-black">
                  <p className="mb-1 truncate">{notification.title}</p>
                  <span className="text-16 text-gray">{notification.createdAt}</span>
                </div>
              </div>
            </Link>
          ))}

          <div className="px-4 py-4">
            <p className="h-4 cursor-pointer text-primary flex-center hover:opacity-70">전체 확인</p>
          </div>
        </>
      ) : (
        <div className="px-4 py-2 text-center text-gray">
          <p>새로운 알림이 없습니다.</p>
        </div>
      )}
    </div>
  );
};
