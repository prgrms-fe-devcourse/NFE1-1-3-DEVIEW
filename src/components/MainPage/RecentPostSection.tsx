import { PostList } from "@components/Common/PostList";
import { TPost } from "@customTypes/post";

export const RecentPostSection = () => {
  // API로 교체예정
  const data: TPost[] = [
    {
      _id: "1",
      title: "React Router를 사용해 navigate하는 방법이 뭔가요?",
      devDependencies: [
        { dependency: "React", version: "1.16.1" },
        { dependency: "JavaScript", version: "1.16.1" }
      ],
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
      devDependencies: [
        { dependency: "C#", version: "1.16.1" },
        { dependency: "JavaScript", version: "1.16.1" }
      ],
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
      devDependencies: [
        { dependency: "Sass", version: "1.16.1" },
        { dependency: "JavaScript", version: "1.16.1" }
      ],
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
        <div className="text-28">👀 최신 게시글 </div>
        <div className="text-16 text-secondary">더보기-&gt;</div>
      </div>
      <PostList posts={data} />
    </div>
  );
};
