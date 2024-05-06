import { useState } from "react";
import "./style.scss";

export default function LiteratureCard() {
  const bgImg =
    "https://images.unsplash.com/photo-1714718086623-387c78e0e328?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="literature-card cursor-pointer w-[263px] max-w-[263px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="h-[350px] rounded-sm overflow-hidden relative"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
      >
        {isHovered && (
          <div className="fade-in h-full">
            <div className="h-full bg-black/50 backdrop-blur-md text-white p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              dignissimos iure doloremque nesciunt, dicta ea repellat magnam
              mollitia aperiam numquam.
            </div>
          </div>
        )}
      </div>
      <h4 className="font-semibold mt-2">The Sky Citadels</h4>
    </div>
  );
}
