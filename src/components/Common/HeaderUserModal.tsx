import { Link } from "react-router-dom";

type HeaderUserModalProps = {
  toggleUserIconModal: () => void;
};

export const HeaderUserModal = ({ toggleUserIconModal }: HeaderUserModalProps) => {
  return (
    <div className="absolute top-8 z-50 mt-2 w-20 max-w whitespace-pre rounded border border-solid border-lightgray bg-white-pure shadow md:top-16 md:w-36 md:translate-x-16 md:whitespace-nowrap">
      <div className="py-2 text-gray">
        <Link
          className="text-10 block w-full border-b border-solid border-lightgray px-4 py-2 flex-center hover:opacity-50 md:text-20"
          to="/mypage"
          onClick={toggleUserIconModal}
        >
          <svg
            className="hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
          >
            <circle cx="12" cy="8" r="5" fill="gray" />
            <path d="M12 15c-4 0-7 2.5-7 5v2h14v-2c0-2.5-3-5-7-5z" fill="gray" />
          </svg>
          마이페이지
        </Link>

        <button
          className="text-10 block w-full px-4 py-2 flex-center hover:opacity-50 md:text-20"
          onClick={toggleUserIconModal}
        >
          <svg
            className="hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            fill="none"
            viewBox="0 0 24 25"
          >
            <g clip-path="url(#clip0_48_146)">
              <path
                fill="gray"
                d="M17 7.35001L15.59 8.76001L18.17 11.35H8V13.35H18.17L15.59 15.93L17 17.35L22 12.35L17 7.35001ZM4 5.35001H12V3.35001H4C2.9 3.35001 2 4.25001 2 5.35001V19.35C2 20.45 2.9 21.35 4 21.35H12V19.35H4V5.35001Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_48_146">
                <rect width="24" height="24" fill="white" transform="translate(0 0.350006)" />
              </clipPath>
            </defs>
          </svg>
          로그아웃
        </button>
      </div>
    </div>
  );
};
