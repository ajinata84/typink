import { timeSince } from "@/lib/utils";
import { defaultUserIcon } from "@/util/constants";
import { ForumData } from "@/util/interfaces";
import { MessageSquare, TrendingUp, View } from "lucide-react";
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
          src={
            forumData.users.imgUrl ? forumData.users.imgUrl : defaultUserIcon
          }
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
            <TrendingUp />
            <span>{forumData.voteCount}</span>
          </div>
          <div className="flex flex-row gap-2">
            <MessageSquare />
            <span>{forumData.forumComments.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
