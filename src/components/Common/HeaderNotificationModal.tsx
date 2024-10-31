import { TNotification } from "@customTypes/notification";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type HeaderNotificationModalProps = {
  toggleBellIconModal: () => void;
  notifications: TNotification[];
};

export const HeaderNotificationModal = ({ toggleBellIconModal, notifications }: HeaderNotificationModalProps) => {
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full overflow-y-auto whitespace-pre border border-solid border-lightgray bg-white-pure scrollbar-hide md:absolute md:left-auto md:top-16 md:mt-2 md:h-80 md:w-72 md:max-w md:translate-x-0 md:whitespace-nowrap md:rounded md:shadow">
      <div className="block border-b border-solid border-lightgray">
        <MdKeyboardDoubleArrowRight className="mb-2 h-16 w-6 cursor-pointer md:hidden" onClick={toggleBellIconModal} />
      </div>

      {notifications.length > 0 ? (
        <>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="text-bold flex cursor-pointer items-center border-b border-solid border-lightgray px-4 py-4 last:border-none hover:opacity-70"
            >
              <img src={notification.userImage} alt="User profile" className="mr-3 h-8 w-8 rounded-full" />
              <div className="flex flex-col text-16 text-black">
                <p className="mb-1">{notification.message}</p>
                <span className="text-16 text-gray">{notification.time}</span>
              </div>
            </div>
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
