import React, { useState, useEffect } from "react";
import axios from "axios";
import ForumCard from "@/components/ForumCard/ForumCard";
import Layout from "@/components/ui/layout";
import { getApiURL } from "@/util/constants";
import { ForumData } from "@/util/interfaces";

export default function Forum() {
  const [forums, setForums] = useState<ForumData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchForums() {
      try {
        const response = await axios.get<ForumData[]>(
          `${getApiURL()}/forum/all`
        );
        setForums(response.data);
      } catch (error) {
        console.error("Error fetching forums:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchForums();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full">
        <section>
          <span className="font-bold text-3xl">Trending</span>
          <hr className="my-4" />
          {forums.map((forum) => (
            <ForumCard key={forum.forumId} forumData={forum} clamp={true} />
          ))}
        </section>
      </div>
    </Layout>
  );
}
