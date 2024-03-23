import { useParams } from "react-router-dom";

export default function LiteratureRead() {
  const { category, id } = useParams();
  return (
    <div>
      Literature Category: {category}, ID: {id}
    </div>
  );
}
