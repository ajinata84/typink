import { MessageSquare, View } from "lucide-react";

export default function ForumCard() {
  return (
    <div className="w-full bg-[#F1F5F9] p-4 rounded-lg my-4">
      <div className="flex items-center gap-4 ">
        <img
          src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="rounded-full object-cover w-8 h-8"
        />
        <span className="font-bold">Guntur23</span>
        <span>5 hr. Ago</span>
      </div>
      <div className="flex flex-col my-2">
        <span className="text-2xl font-bold line-clamp-4">
          Solo Leveling Season 2?
        </span>
        <span className="line-clamp-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          quaerat quidem quam minima nulla, eum architecto, nisi earum ratione
          quod ab facilis! Beatae accusantium porro eligendi magni molestiae.
          Sequi delectus maiores nesciunt hic laboriosam porro cupiditate itaque
          aliquid beatae facilis!
        </span>
      </div>
      <div className="flex flex-row mt-4">
        <div className="px-6 py-1 rounded-full text-sm bg-[#001C54] text-white">
          Fantasy
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
          {/* <div className="flex flex-row gap-2">
            <View />
            <span>500k</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
