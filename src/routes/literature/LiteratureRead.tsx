import LiteratureSocials from "@/components/LiteratureSocials/LiteratureSocials";
import Layout from "@/components/ui/layout";
import { useParams } from "react-router-dom";

export default function LiteratureRead() {
  const { category, id } = useParams();
  return (
    <Layout leftBar={false} rightBar={false}>
      Literature Category: {category}, ID: {id}
      <LiteratureSocials />
    </Layout>
  );
}
