import { CommentsContent } from "@components/MyPage/CommentsContent";
import { InfoContent } from "@components/MyPage/InfoContent";
import { LikesContent } from "@components/MyPage/LikesContent";
import { PostsContent } from "@components/MyPage/PostsContent";
import { CommentInfo } from "@customTypes/commentInfo";
import { PostInfo } from "@customTypes/postInfo";
import { useEffect, useState } from "react";

type UserInfo = {
  _id?: string;
  username?: string;
  email?: string;
  password?: string;
  team?: string;
  created_at?: string;
};

export const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("posts");

  // TODO: 임시데이터, 백엔드랑 연결하기
  const [postsList, setPostsList] = useState<PostInfo[]>([]);
  const [commentsList, setCommentsList] = useState<CommentInfo[]>([]);
  const [likesList, setLikesList] = useState<PostInfo[]>([]);
  const [infoList, setInfoList] = useState<UserInfo>({});

  useEffect(() => {
    setPostsList([
      {
        _id: 1,
        title: "React Router를 사용해 navigate하는 방법이 뭔가요?",
        devDependencies: ["React", "Python"],
        content: "React Router를 사용하여 페이지 간 이동을 구현하고 싶습니다. 어떻게 해야 할까요?",
        author: "홍길동",
        created_at: new Date("2024-10-23"),
        recommend: 15,
        comment: 5,
        view: 1200
      }
    ]);
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
      }
    ]);
    setLikesList([
      {
        _id: 1,
        title: "React Router를 사용해 navigate하는 방법이 뭔가요?",
        devDependencies: ["React", "JavaScript"],
        content: "React Router를 사용하여 페이지 간 이동을 구현하고 싶습니다. 어떻게 해야 할까요?",
        author: "홍길서",
        created_at: new Date("2024-10-23"),
        recommend: 35,
        comment: 2,
        view: 1234
      }
    ]);
    setInfoList({
      _id: "1",
      username: "홍길동",
      email: "test1234@test.com",
      password: "test1212",
      team: "개발자",
      created_at: "2024-10-25"
    });
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
            스크랩
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
