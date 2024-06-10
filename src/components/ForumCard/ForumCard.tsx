import { timeSince } from "@/lib/utils";
import { ForumData } from "@/util/interfaces";
import { MessageSquare, View } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ForumCardProps {
  forumData: ForumData;
  clamp: boolean;
}

export default function ForumCard({ forumData, clamp = true }: ForumCardProps) {
  const navigate = useNavigate();

  const { forumId, created_at, users, title, content, genreId, forumType } =
    forumData;

  return (
    <div
      className={`w-full bg-[#F1F5F9] p-4 rounded-lg my-4 ${
        clamp ? "hover:cursor-pointer hover:outline" : ""
      }`}
      onClick={() => navigate(`/forum/${genreId}/${forumId}`)}
    >
      <div className="flex items-center gap-4 ">
        <img
          src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="rounded-full object-cover w-8 h-8"
        />
        <span className="font-bold">{users.username}</span>
        <span>{timeSince(new Date(created_at))}</span>
      </div>
      <div className="flex flex-col my-2">
        <span className="text-2xl font-bold line-clamp-4">{title}</span>
        <span className={clamp ? "line-clamp-2" : ""}>{content}</span>
      </div>
      <div className="flex flex-row mt-4">
        <div className="px-6 py-1 rounded-full text-sm bg-[#001C54] text-white">
          {forumType}
        </div>
        <div className="flex flex-row items-center ml-5 gap-6">
          <div className="flex flex-row gap-2">
            <View />
            <span>500k</span>
          </div>
          <div className="flex flex-row gap-2">
            <MessageSquare />
            <span>500k</span>
          </div>
        </div>
      </div>
    </div>
  );
}
