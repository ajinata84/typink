import { useState, useEffect } from "react";
import axios from "axios";
import ForumCard from "@/components/ForumCard/ForumCard";
import Layout from "@/components/ui/layout";
import { getApiURL } from "@/util/constants";
import { ForumData } from "@/util/interfaces";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Forum() {
  const [forums, setForums] = useState<ForumData[]>([]);
  const [allForums, setAllForums] = useState<ForumData[]>([]);
  const [announc, setAnnounc] = useState<ForumData[]>([]);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const forumResponse = await axios.get<ForumData[]>(
          `${getApiURL()}/forum/announcements`
        );
        setAnnounc(forumResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchAnnouncement();

    async function fetchForums() {
      try {
        const response = await axios.get<ForumData[]>(
          `${getApiURL()}/forum/recent-activity`
        );
        setForums(response.data);
      } catch (error) {
        console.error("Error fetching forums:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchForums();
    async function fetchAllForums() {
      try {
        const response = await axios.get<ForumData[]>(
          `${getApiURL()}/forum/all`
        );
        setAllForums(response.data);
      } catch (error) {
        console.error("Error fetching forums:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAllForums();
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
          <div className="flex flex-row justify-between">
            <span className="font-bold text-3xl">Announcements</span>
            <Button
              className="bg-[#04D192] hover:bg-[#00B27C] rounded-xl"
              onClick={() => navigate(`/forum/create`)}
            >
              <PlusIcon className="mr-2 " /> Create Post
            </Button>
          </div>
          <hr className="my-4" />
          {announc.map((forum) => (
            <ForumCard key={forum.forumId} forumData={forum} clamp={true} />
          ))}
        </section>
        <section>
          <div className="flex flex-row justify-between">
            <span className="font-bold text-3xl">Recent Activity</span>
          </div>
          <hr className="my-4" />
          {forums.map((forum) => (
            <ForumCard key={forum.forumId} forumData={forum} clamp={true} />
          ))}
        </section>
        <section>
          <span className="font-bold text-3xl">New Posts</span>
          <hr className="my-4" />
          {allForums.map((forum) => (
            <ForumCard key={forum.forumId} forumData={forum} clamp={true} />
          ))}
        </section>
      </div>
    </Layout>
  );
}
