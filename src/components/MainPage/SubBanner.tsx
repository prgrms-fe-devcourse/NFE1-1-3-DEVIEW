import { devIconsDocs } from "@constants/devIconUrls";
import { TPost } from "@customTypes/post";

export const SubBanner = ({ color }: { color: "secondary" | "lightgreen" }) => {
  const data: TPost[] = [
    {
      _id: "1",
      title: "React Router를 사용해 navigate하는 방법이 뭔가요?",
      devDependencies: [
        { dependency: "Sass", version: "1.16.1" },
        { dependency: "JavaScript", version: "1.16.1" }
      ],
      code: "",
      detail: "React Router를 사용해 navigate하는 방법이 뭔가요?",
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
      code: "",
      detail: "React Router를 사용해 navigate하는 방법이 뭔가요?",
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
  const bgColors = {
    secondary: "bg-secondary",
    lightgreen: "bg-lightgreen"
  };
  return (
    <div
      className={`relative flex ${bgColors[color]} h-52 w-[48%] flex-col justify-between rounded-lg p-5 pb-10 text-white-pure shadow`}
    >
      <div
        className={`${devIconsDocs[data[0].devDependencies[0].dependency].bgUrl} absolute bottom-0 left-0 h-32 w-32 bg-contain bg-center bg-no-repeat`}
      ></div>
      <div className="text-28">{data[0].title}</div>
    </div>
  );
};
