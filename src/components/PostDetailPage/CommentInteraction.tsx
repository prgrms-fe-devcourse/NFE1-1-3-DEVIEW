import { GoThumbsup } from "react-icons/go";
// import { PiSiren } from "react-icons/pi";
//! 추가 기능 구현 필요
type CommentInteractionProps = {
  commentId: string;
};
export const CommentInteraction = ({ commentId }: CommentInteractionProps) => {
  console.log("CommentInteraction: ", commentId);
  return (
    <section className="w-full flex-center">
      <div className="m-auto flex w-36 gap-2 rounded-[30px] px-7 py-4 shadow">
        <button className="text-gray-500 hover:text-gray-600 flex items-center gap-[0.03rem]">
          <GoThumbsup className="h-[17px] w-[22px] flex-shrink-0 transition-transform duration-200 ease-in-out hover:scale-110" />
          <span className="min-w-[20px] text-center">0</span>
        </button>
      </div>
    </section>
  );
};
