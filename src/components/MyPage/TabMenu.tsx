import { CommentsContent } from "@components/MyPage/CommentsContent";
import { InfoContent } from "@components/MyPage/InfoContent";
import { ScrapContent } from "@components/MyPage/ScrapContent";
import { PostsContent } from "@components/MyPage/PostsContent";
import { useState } from "react";

export const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const renderContent = () => {
    switch (activeTab) {
      case "posts":
        return <PostsContent />;
      case "comments":
        return <CommentsContent />;
      case "likes":
        return <ScrapContent />;
      case "info":
        return <InfoContent />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <ul className="text-sm text-gray-500 flex border-b text-center font-medium">
        <li className="mr-4 md:mr-24">
          <button
            className={`inline-block px-1 py-2 text-16 md:px-4 md:text-20 ${activeTab === "posts" ? "border-b-4 border-secondary text-secondary" : "hover:text-secondary"}`}
            onClick={() => setActiveTab("posts")}
          >
            내 게시글
          </button>
        </li>
        <li className="mr-4 md:mr-24">
          <button
            className={`inline-block px-1 py-2 text-16 md:px-4 md:text-20 ${activeTab === "comments" ? "border-b-4 border-secondary text-secondary" : "hover:text-secondary"}`}
            onClick={() => setActiveTab("comments")}
          >
            내 댓글
          </button>
        </li>
        <li className="mr-4 md:mr-24">
          <button
            className={`inline-block px-1 py-2 text-16 md:px-4 md:text-20 ${activeTab === "likes" ? "border-b-4 border-secondary text-secondary" : "hover:text-secondary"}`}
            onClick={() => setActiveTab("likes")}
          >
            스크랩
          </button>
        </li>
        <li>
          <button
            className={`inline-block px-1 py-2 text-16 md:px-4 md:text-20 ${activeTab === "info" ? "border-b-4 border-secondary text-secondary" : "hover:text-secondary"}`}
            onClick={() => setActiveTab("info")}
          >
            내 정보
          </button>
        </li>
      </ul>
      <div className={`relative flex-1 py-4 md:py-8`}>{renderContent()}</div>
    </div>
  );
};
