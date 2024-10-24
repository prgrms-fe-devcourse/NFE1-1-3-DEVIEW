import { useParams } from "react-router-dom";

export default function SearchPage() {
  const { query } = useParams<{ query: string }>();
  return <div>SearchPage {query}</div>;
}
