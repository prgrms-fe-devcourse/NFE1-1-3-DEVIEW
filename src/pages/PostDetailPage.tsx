import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  return <div>PostDetailPage {id}</div>;
}
