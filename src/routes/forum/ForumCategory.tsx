import { useParams } from "react-router-dom";

export default function ForumCategory() {
  const { category } = useParams();
  return <div>Forum Category: {category}</div>;
}
