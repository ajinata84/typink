import LiteratureCard from "@/components/LiteratureCard/LiteratureCard";
import Layout from "@/components/ui/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { getApiURL } from "@/util/constants";
import { Literature } from "@/util/interfaces";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

export default function MyCreations() {
  const [myCreations, setMyCreations] = useState<Literature[]>([]);
  const [loading, setLoading] = useState(true);
  const userId = Cookies.get("uid");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Literature[]>(
          `${getApiURL()}/literature/author/${userId}`
        );
        setMyCreations(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <Layout>
      <h1 className="text-5xl font-semibold">My Creations</h1>
      {loading && (
        <div className="grid grid-cols-3 grid-flow-row gap-4 mt-6">
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <Skeleton key={idx} className="h-[350px] w-full rounded" />
            ))}
        </div>
      )}
      <div className="grid grid-cols-3 grid-flow-row gap-4 mt-6">
        {myCreations.map((item) => (
          <LiteratureCard key={item.literatureId} item={item} />
        ))}
      </div>
    </Layout>
  );
}
