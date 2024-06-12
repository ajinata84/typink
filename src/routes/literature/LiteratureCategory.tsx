import LiteratureCard from "@/components/LiteratureCard/LiteratureCard";
import { categories } from "@/components/sidebars/LeftBar";
import Layout from "@/components/ui/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { getApiURL } from "@/util/constants";
import { Literature } from "@/util/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LiteratureCategory() {
  const { genreId } = useParams();
  const [catalogData, setCatalogData] = useState<Literature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Literature[]>(
          `${getApiURL()}/literature/genre/${genreId}`
        );
        setCatalogData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [genreId]);

  if (loading) {
    return (
      <div className="mt-6">
        <h1 className="font-bold text-4xl">Loading...</h1>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <Skeleton key={idx} className="h-[350px] w-full rounded" />
            ))}
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="mt-6">
        <h1 className="font-bold text-4xl mb-2">
          {categories[Number(genreId)]}
        </h1>
        {catalogData.length > 0 && (
          <>
            <div>
              <hr />
            </div>
            <div className="grid grid-cols-3 grid-flow-row gap-4 mt-6">
              {catalogData.map((item) => (
                <LiteratureCard key={item.literatureId} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
