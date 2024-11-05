import { ReactNode } from "react";

type MainBannerProps = {
  color: "bg-secondary" | "bg-purple" | "bg-skyblue" | "bg-lightgreen";
  children: ReactNode;
};

export const MainBanner = ({ color, children }: MainBannerProps) => {
  return <div className={`flex h-52 rounded-lg text-white-pure shadow transition-all ${color}`}>{children}</div>;
};
