import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Layout from "@/components/ui/layout";
import ReadingConfig from "./ReadingConfig";
import { useParams, useNavigate } from "react-router-dom";
import VoteButtons from "@/components/VoteButtons/VoteButtons";
import { getApiURL } from "@/util/constants";
import { Literature, Chapter } from "@/util/interfaces";
import Cookies from "js-cookie";
import { toast } from "@/components/ui/use-toast";

export default function LiteratureChapter() {
  const navigate = useNavigate();
  const { id, chapterId } = useParams<{ id: string; chapterId: string }>();
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [literature, setLiterature] = useState<Literature | null>(null);
  const token = Cookies.get("token");

  const [bgColor, setBgColor] = useState<string>("#FFFFFF");
  const [font, setFont] = useState<string>("Inter");
  const [fontSize, setFontSize] = useState<number>(16);

  const storedBgColor = localStorage.getItem("bgColor");
  const storedFont = localStorage.getItem("font");
  const storedFontSize = localStorage.getItem("fontSize");

  const handleBgColorChange = (color: string) => {
    setBgColor(color);
    localStorage.setItem("bgColor", color);
  };

  const handleFontChange = (font: string) => {
    setFont(font);
    localStorage.setItem("font", font);
  };

  const handleFontSizeChange = (size: number) => {
    setFontSize(size);
    localStorage.setItem("fontSize", size.toString());
  };

  useEffect(() => {
    const storedBgColor = localStorage.getItem("bgColor");
    const storedFont = localStorage.getItem("font");
    const storedFontSize = localStorage.getItem("fontSize");

    if (storedBgColor) {
      setBgColor(storedBgColor);
    }
    if (storedFont) {
      setFont(storedFont);
    }
    if (storedFontSize) {
      setFontSize(parseInt(storedFontSize, 10));
    }
  }, []);

  useEffect(() => {
    async function fetchChapter() {
      try {
        const chapterResponse = await axios.get<Chapter>(
          `${getApiURL()}/chapter/id/${chapterId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setChapter(chapterResponse.data);

        const literatureResponse = await axios.get<Literature>(
          `${getApiURL()}/literature/id/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLiterature(literatureResponse.data);
      } catch (error) {
        console.error("Error fetching chapter:", error);
      }
    }
    fetchChapter();
  }, [id, chapterId]);

  const handleVote = async (
    chapterId: number,
    voteType: "upvote" | "downvote"
  ) => {
    try {
      await axios.post(
        `${getApiURL()}/voting/chapter`,
        { chapterId, voteType },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setChapter((prevChapter) =>
        prevChapter
          ? {
              ...prevChapter,
              vote: prevChapter.vote === voteType ? "blank" : voteType,
              voteCount:
                prevChapter.vote === voteType
                  ? voteType === "upvote"
                    ? prevChapter.voteCount - 1
                    : prevChapter.voteCount + 1
                  : voteType === "upvote"
                  ? prevChapter.vote === "downvote"
                    ? prevChapter.voteCount + 2
                    : prevChapter.voteCount + 1
                  : prevChapter.vote === "upvote"
                  ? prevChapter.voteCount - 2
                  : prevChapter.voteCount - 1,
            }
          : null
      );
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  const navigateChapter = (offset: number) => {
    if (literature) {
      const currentIndex = literature.chapters.findIndex(
        (ch) => ch.chapterId === Number(chapterId)
      );
      const newIndex = currentIndex + offset;

      if (newIndex >= 0 && newIndex < literature.chapters.length) {
        navigate(
          `/chapter/id/${id}/chapterId/${literature.chapters[newIndex].chapterId}`
        );
      } else {
        toast({
          title: "No more chapter found",
          description: "",
        });
      }
    }
  };

  if (!chapter || !literature) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="w-screen h-screen fixed top-0 left-0"
        style={{
          backgroundColor: bgColor,
        }}
      ></div>
      <Layout leftBar={false} rightBar={false}>
        <div
          className="flex flex-col justify-center w-full mt-6 text-center gap-7"
          style={{ fontFamily: font, fontSize: `${fontSize}px` }}
        >
          <img src={chapter.imageUrl} alt={chapter.chapterTitle} />
          <h6>@{literature.users.username}</h6>
          <h1 className="text-5xl font-semibold">{literature.title}</h1>
          <h2>{chapter.chapterTitle}</h2>
          <hr />
          <p className="whitespace-pre-wrap text-start mb-4">
            {chapter.content}
          </p>
          <VoteButtons
            upvoteFn={() => handleVote(chapter.chapterId, "upvote")}
            downvoteFn={() => handleVote(chapter.chapterId, "downvote")}
            value={chapter.voteCount}
            status={chapter.vote as "upvote" | "downvote" | "blank"}
          />
          <div className="flex flex-row w-full justify-between mb-7">
            <Button
              className="w-32 h-16"
              variant="ghost"
              onClick={() => navigateChapter(-1)}
            >
              Previous Chapter
            </Button>
            <Button
              className="w-16 h-16"
              variant="ghost"
              onClick={() => window.scrollTo(0, 0)}
            >
              To Top
            </Button>
            <Button
              className="w-32 h-16"
              variant="ghost"
              onClick={() => navigateChapter(1)}
            >
              Next Chapter
            </Button>
          </div>
        </div>
      </Layout>
      <ReadingConfig
        bgColor={bgColor}
        font={font}
        fontSize={fontSize}
        onBgColorChange={handleBgColorChange}
        onFontChange={handleFontChange}
        onFontSizeChange={handleFontSizeChange}
      />
    </>
  );
}
