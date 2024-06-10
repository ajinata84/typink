import { useState, useEffect } from "react";
import axios from "axios";
import LiteratureCard from "../LiteratureCard/LiteratureCard";
import { Skeleton } from "@/components/ui/skeleton";
import { getApiURL } from "@/util/constants";
import { Literature } from "@/util/interfaces";

export default function Latest() {
  const [latestData, setLatestData] = useState<Literature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Literature[]>(`${getApiURL()}/literature/latest-updates`);
        setLatestData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-3 grid-flow-row gap-4 mt-6">
        {Array(6)
          .fill(0)
          .map((_, idx) => (
            <Skeleton key={idx} className="h-[350px] w-full rounded" />
          ))}
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div>
        <h1 className="font-bold text-4xl">Latest Updates</h1>
        <h6 className="mb-3">Freshly Released Fictions</h6>
        <hr />
      </div>
      <div className="grid grid-cols-3 grid-flow-row gap-4 mt-6">
        {latestData.map((item) => (
          <LiteratureCard key={item.literatureId} item={item} />
        ))}
      </div>
    </div>
  );
}
