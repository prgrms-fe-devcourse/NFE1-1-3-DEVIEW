import { getPopularPosts } from "@services/post/getPopularPosts";

export default function MainPage() {
  return (
    <div>
      <button
        onClick={() => {
          getPopularPosts().then((data) => console.log(data));
        }}
      >
        Send API
      </button>
    </div>
  );
}
