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
      <Catalog genreId={2}/>
      <Catalog genreId={3}/>
      <Catalog genreId={4}/>
      <Catalog genreId={5}/>
      <Catalog genreId={6}/>
      <Catalog genreId={7}/>
      <Catalog genreId={8}/>
      <Catalog genreId={9}/>
      <Catalog genreId={10}/>

    </Layout>
  )
}
