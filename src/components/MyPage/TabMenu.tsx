import { CommentsContent } from "@components/MyPage/CommentsContent";
import { InfoContent } from "@components/MyPage/InfoContent";
import { LikesContent } from "@components/MyPage/LikesContent";
import { PostsContent } from "@components/MyPage/PostsContent";
import { TComment } from "@customTypes/comment";
import { TPost } from "@customTypes/post";
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

  // TODO: 유저 타입 처리하기
  // TODO: 임시데이터, 백엔드랑 연결하기
  const [postsList, setPostsList] = useState<TPost[]>([]);
  const [commentsList, setCommentsList] = useState<TComment[]>([]);
  const [likesList, setLikesList] = useState<TPost[]>([]);
  const [infoList, setInfoList] = useState<UserInfo>({});

  useEffect(() => {
    setPostsList([
      {
        _id: "1",
        title: "React Router를 사용해 navigate하는 방법이 뭔가요?",
        content: "React Router를 사용하여 페이지 간 이동을 구현하고 싶습니다. 어떻게 해야 할까요?",
        author: {
          _id: "author1",
          username: "홍길동"
        },
        devDependencies: ["React", "Python"],
        likesCount: 15,
        viewsCount: 1200,
        scrapsCount: 5,
        commentsCount: 10,
        createdAt: "2024-10-23",
        updatedAt: "2024-10-24",
        __v: 0
      }
    ]);
    setCommentsList([
      {
        _id: "1",
        postId: "post1",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        author: "user1",
        thumbsCount: 10,
        createdAt: "2024-10-23",
        updatedAt: "2024-10-24",
        __v: "0",
        thumbed: false,
        postTitle: "React Router를 사용해 navigate하는 방법이 뭔가요?"
      }
    ]);
    setLikesList([
      {
        _id: "2",
        title: "React Router를 사용해 navigate하는 방법이 뭔가요?",
        content: "React Router를 사용하여 페이지 간 이동을 구현하고 싶습니다. 어떻게 해야 할까요?",
        author: {
          _id: "author2",
          username: "홍길서"
        },
        devDependencies: ["React", "JavaScript"],
        likesCount: 35,
        viewsCount: 1234,
        scrapsCount: 8,
        commentsCount: 5,
        createdAt: "2024-10-23",
        updatedAt: "2024-10-24",
        __v: 0
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
