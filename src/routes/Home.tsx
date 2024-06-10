import Latest from "@/components/LatestSection/Latest";
import Featured from "@/components/FeaturedSection/Featured";
import Layout from "@/components/ui/layout";
import Catalog from "@/components/LiteratureCatalog/LiteratureCatalog";

export default function Home() {
  return (
    <Layout>
      <Featured />  
      <Latest />
      <Catalog genreId={1}/>
      <Catalog genreId={3}/>

    </Layout>
  )
}
