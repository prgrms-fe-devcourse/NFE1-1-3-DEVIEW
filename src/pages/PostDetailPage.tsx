import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="m-auto my-[1.625rem] flex max-w-[1240px] flex-col gap-12 px-5">
      PostDetailPage {id}
      <section></section>
    </div>
  );
}
