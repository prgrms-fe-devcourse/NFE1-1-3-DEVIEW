import { PostList } from "@components/Common/PostList";
import { TPost } from "@customTypes/post";

export const PopularPostSection = () => {
  // API로 교체 에정
  const data: TPost[] = [
    {
      _id: "1",
      title: "React Router를 사용해 navigate하는 방법이 뭔가요?",
      devDependencies: ["React", "JavaScript"],
      content: "React Router를 사용해 navigate하는 방법이 뭔가요?",
      author: { _id: "2", username: "shlee9999" },
      likesCount: 2352,
      viewsCount: 17854,
      scrapsCount: 1234,
      commentsCount: 50,
      createdAt: "2024-10-28T02:13:20.475+00:00",
      updatedAt: "2024-10-28T02:13:20.475+00:00",
      __v: 1
    },
    {
      _id: "1",
      title: "React Router를 사용해 navigate하는 방법이 뭔가요?",
      devDependencies: ["C#", "JavaScript"],
      content: "React Router를 사용해 navigate하는 방법이 뭔가요?",
      author: { _id: "2", username: "shlee9999" },
      likesCount: 2352,
      viewsCount: 17854,
      scrapsCount: 1234,
      commentsCount: 50,
      createdAt: "2024-10-28T02:13:20.475+00:00",
      updatedAt: "2024-10-28T02:13:20.475+00:00",
      __v: 1
    },
    {
      _id: "1",
      title: "React Router를 사용해 navigate하는 방법이 뭔가요?",
      devDependencies: ["Sass", "JavaScript"],
      content: "React Router를 사용해 navigate하는 방법이 뭔가요?",
      author: { _id: "2", username: "shlee9999" },
      likesCount: 2352,
      viewsCount: 17854,
      scrapsCount: 1234,
      commentsCount: 50,
      createdAt: "2024-10-28T02:13:20.475+00:00",
      updatedAt: "2024-10-28T02:13:20.475+00:00",
      __v: 1
    }
  ];

  return (
    <div className="m-auto max-w px-10 py-3">
      <div className="flex items-center justify-between border-b-2 border-solid border-lightgray py-4">
        <div className="text-28">⭐ 인기 게시글 TOP 3</div>
        <div className="text-16 text-secondary">더보기-&gt;</div>
      </div>
      <PostList posts={data} isRankedList={true} />
    </div>
  );
};
