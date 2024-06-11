import { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

// Define the interface for props
interface Genre {
  genreId: number;
  genreTitle: string;
}

interface User {
  userId: string;
  username: string;
}

interface Literature {
  literatureId: number;
  title: string;
  synopsis: string;
  imageUrl: string;
  genre: Genre;
  users: User;
}

interface LiteratureCardProps {
  item: Literature;
}

export default function LiteratureCard({ item }: LiteratureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="literature-card cursor-pointer w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/read/${item.literatureId}`)}
    >
      <div
        className="h-[350px] rounded-sm overflow-hidden relative"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
          backgroundSize: "cover",
        }}
      >
        {true && (
          <div className="fade-in h-full">
            <div className="h-[350px] overflow-hidden bg-black/50 backdrop-blur-md text-white p-4 ">
              <p className="line-clamp-6 text-ellipsis max-width: 75ch;">
                {item.synopsis}
              </p>
            </div>
          </div>
        )}
      </div>
      <h4 className="font-semibold mt-2">{item.title}</h4>
    </div>
  );
}
