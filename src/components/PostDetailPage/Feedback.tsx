import { AiOutlineLike } from "react-icons/ai";
import { PiSiren } from "react-icons/pi";
//!API 연동 필요

type FeedbackProps = {
  total: number;
  isClicked?: boolean;
  subject?: string;
};
export const Feedback = ({ total }: FeedbackProps) => {
  // console.log(thumbsCount);
  // console.log(thumbed);
  // console.log(commentId);
  return (
    <section className="w-full flex-center">
      <div className="m-auto flex w-36 gap-2 rounded-[30px] px-7 py-4 shadow">
        <button className="flex items-center gap-[0.03rem] hover:opacity-70">
          <AiOutlineLike className="h-[17px] w-[22px] flex-shrink-0" />
          <span>{total}</span>
        </button>
        <button className="hover:opacity-70">
          <PiSiren className="h-[17px] w-[22px] flex-shrink-0" />
        </button>
      </div>
    </section>
  );
};
