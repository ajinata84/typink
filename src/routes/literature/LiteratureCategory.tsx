import { useParams } from "react-router-dom";

export default function LiteratureCategory() {
  const { category } = useParams();
  // Use the `category` parameter to render the appropriate content
  return <div>Literature Category: {category}</div>;
}
