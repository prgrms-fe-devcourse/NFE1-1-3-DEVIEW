import { CommentsContent } from "@components/MyPage/CommentsContent";
import { InfoContent } from "@components/MyPage/InfoContent";
import { LikesContent } from "@components/MyPage/LikesContent";
import { PostsContent } from "@components/MyPage/PostsContent";
import { useEffect, useState } from "react";

export const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("posts");

  // TODO: 임시데이터, 백엔드랑 연결하기
  const [postsList, setPostsList] = useState<{ id: number; post: string }[]>([]);
  const [commentsList, setCommentsList] = useState<
    {
      _id: string;
      post_id: string;
      author: string;
      content: string;
      created_at: string;
      recommend: number;
      post_title?: string;
    }[]
  >([]);
  const [likesList, setLikesList] = useState<{ id: number; likedItem: string }[]>([]);
  const [infoList, setInfoList] = useState<{ name?: string; id?: string; password?: string; department?: string }>({});

  useEffect(() => {
    setPostsList([{ id: 1, post: "내 게시글" }]);
    setCommentsList([
      {
        _id: "1",
        post_id: "post1",
        author: "user1",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ···",
        created_at: "2024-10-23",
        recommend: 10,
        post_title: "React Router를 사용해 navigate하는 방법이 뭔가요?"
      },
      {
        _id: "2",
        post_id: "post2",
        author: "user2",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ···",
        created_at: "2024-10-24",
        recommend: 11,
        post_title: "React Router를 사용해 navigate하는 방법이 뭔가요?"
      }
    ]);
    setLikesList([{ id: 1, likedItem: "좋아요" }]);
    setInfoList({ name: "이름", id: "유저ID", password: "비밀번호", department: "소속" });
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "posts":
        return <PostsContent data={postsList} />;
      case "comments":
        return <CommentsContent data={commentsList} />;
      case "likes":
        return <LikesContent data={likesList} />;
      case "info":
        return <InfoContent data={infoList} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ul className="text-sm text-gray-500 flex border-b text-center font-medium">
        <li className="mr-4 md:mr-24">
          <button
            className={`inline-block px-1 py-2 text-16 md:px-4 md:text-24 ${activeTab === "posts" ? "border-b-4 border-secondary text-secondary" : "hover:text-secondary"}`}
            onClick={() => setActiveTab("posts")}
          >
            내 게시글
          </button>
        </li>
        <li className="mr-4 md:mr-24">
          <button
            className={`inline-block px-1 py-2 text-16 md:px-4 md:text-24 ${activeTab === "comments" ? "border-b-4 border-secondary text-secondary" : "hover:text-secondary"}`}
            onClick={() => setActiveTab("comments")}
          >
            내 댓글
          </button>
        </li>
        <li className="mr-4 md:mr-24">
          <button
            className={`inline-block px-1 py-2 text-16 md:px-4 md:text-24 ${activeTab === "likes" ? "border-b-4 border-secondary text-secondary" : "hover:text-secondary"}`}
            onClick={() => setActiveTab("likes")}
          >
            좋아요
          </button>
        </li>
        <li>
          <button
            className={`inline-block px-1 py-2 text-16 md:px-4 md:text-24 ${activeTab === "info" ? "border-b-4 border-secondary text-secondary" : "hover:text-secondary"}`}
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
