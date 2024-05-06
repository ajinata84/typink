import Latest from "@/components/LatestSection/Latest";
import Featured from "@/components/FeaturedSection/Featured";
import Layout from "@/components/ui/layout";
import Catalog from "@/components/LiteratureCatalog/LiteratureCatalog";

export default function Home() {
  return (
    <Layout>
      <Featured />  
      <Latest />
      <Catalog />
    </Layout>
  )
}
