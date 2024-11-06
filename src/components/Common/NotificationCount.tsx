type NotificationCountProps = {
  count: number;
};

export const NotificationCount = ({ count }: NotificationCountProps) => {
  return (
    <span className="absolute right-2 top-1 flex h-3 w-3 cursor-pointer items-center justify-center rounded-full bg-pink text-[10px] text-white-sub md:-top-1 md:right-0 md:h-5 md:w-5 md:text-14">
      {count}
    </span>
  );
};
