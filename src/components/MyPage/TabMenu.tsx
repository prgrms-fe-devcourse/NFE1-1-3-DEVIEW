import { CommentsContent } from "@components/MyPage/CommentsContent";
import { InfoContent } from "@components/MyPage/InfoContent";
import { LikesContent } from "@components/MyPage/LikesContent";
import { PostsContent } from "@components/MyPage/PostsContent";
import { useEffect, useState } from "react";

export const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const [postsData, setPostsData] = useState<{ id: number; post: string }[]>([]);
  const [commentsData, setCommentsData] = useState<{ id: number; comment: string }[]>([]);
  const [likesData, setLikesData] = useState<{ id: number; likedItem: string }[]>([]);
  const [infoData, setInfoData] = useState<{ name?: string; id?: string; password?: string; department?: string }>({});

  useEffect(() => {
    setPostsData([{ id: 1, post: "내 게시글" }]);
    setCommentsData([{ id: 1, comment: "내 댓글" }]);
    setLikesData([{ id: 1, likedItem: "좋아요" }]);
    setInfoData({ name: "이름", id: "유저ID", password: "비밀번호", department: "소속" });
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "posts":
        return <PostsContent data={postsData} />;
      case "comments":
        return <CommentsContent data={commentsData} />;
      case "likes":
        return <LikesContent data={likesData} />;
      case "info":
        return <InfoContent data={infoData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ul className="text-sm text-gray-500 flex border-b text-center font-medium">
        <li className="mr-4 md:mr-24">
          <button
            className={`inline-block px-1 py-2 text-16 md:px-4 md:text-24 ${activeTab === "posts" ? "border-b-4 border-primary text-primary" : "hover:text-secondary"}`}
            onClick={() => setActiveTab("posts")}
          >
            내 게시글
          </button>
        </li>
        <li className="mr-4 md:mr-24">
          <button
            className={`inline-block px-1 py-2 text-16 md:px-4 md:text-24 ${activeTab === "comments" ? "border-b-4 border-primary text-primary" : "hover:text-secondary"}`}
            onClick={() => setActiveTab("comments")}
          >
            내 댓글
          </button>
        </li>
        <li className="mr-4 md:mr-24">
          <button
            className={`inline-block px-1 py-2 text-16 md:px-4 md:text-24 ${activeTab === "likes" ? "border-b-4 border-primary text-primary" : "hover:text-secondary"}`}
            onClick={() => setActiveTab("likes")}
          >
            좋아요
          </button>
        </li>
        <li>
          <button
            className={`inline-block px-1 py-2 text-16 md:px-4 md:text-24 ${activeTab === "info" ? "border-b-4 border-primary text-primary" : "hover:text-secondary"}`}
            onClick={() => setActiveTab("info")}
          >
            내 정보
          </button>
        </li>
      </ul>
      <div className="py-4 md:py-8">{renderContent()}</div>
    </div>
  );
};
