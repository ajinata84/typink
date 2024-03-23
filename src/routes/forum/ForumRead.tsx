import { useParams } from "react-router-dom";

export default function ForumRead() {
  const { category, id } = useParams();
  return (
    <div>
      Forum Category: {category}, ID: {id}
    </div>
  );
}
