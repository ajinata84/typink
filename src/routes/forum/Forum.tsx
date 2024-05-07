import ForumCard from "@/components/ForumCard/ForumCard";
import Layout from "@/components/ui/layout";

export default function Forum() {
  return (
    <Layout>
      <div className="w-full">
        <section>
          <span className="font-bold text-3xl">Trending</span>
          <hr  className="my-4"/>
          <ForumCard />
          <ForumCard />
          <ForumCard />
        </section>
      </div>
    </Layout>
  );
}
