import CommentCard from "@/components/Comments/Comments";
import LiteratureSocials from "@/components/LiteratureSocials/LiteratureSocials";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Layout from "@/components/ui/layout";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { timeSince } from "@/lib/utils";
import { getApiURL } from "@/util/constants";
import { LiteratureComment, LiteratureData } from "@/util/interfaces";
import axios from "axios";
import Cookies from "js-cookie";
import {
  Check,
  Coins,
  Eraser,
  Forward,
  Grid2X2,
  Layers2,
  Pencil,
  Plus,
  Settings,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function LiteratureRead() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [literatureData, setLiteratureData] = useState<LiteratureData | null>(
    null
  );
  const [comments, setComments] = useState<LiteratureComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const token = Cookies.get("token");
  const [currSec, setCurrSec] = useState(1);
  const currentUserId = Cookies.get("uid");

  const [alertOpen, setAlertOpen] = useState(false);
  const [literatureAlertOpen, setLAlertOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const literatureResponse = await axios.get(
          `${getApiURL()}/literature/id/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setLiteratureData(literatureResponse.data);

        const commentsResponse = await axios.get(
          `${getApiURL()}/literature/comments/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setComments(commentsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const handleCommentVote = async (
    commentId: number,
    voteType: "upvote" | "downvote"
  ) => {
    try {
      await axios.post(
        `${getApiURL()}/voting/literature-comment`,
        { literatureCommentId: commentId, voteType },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.literatureCommentId === commentId
            ? {
                ...comment,
                vote: comment.vote === voteType ? "blank" : voteType,
                voteCount:
                  comment.vote === voteType
                    ? voteType === "upvote"
                      ? comment.voteCount - 1
                      : comment.voteCount + 1
                    : voteType === "upvote"
                    ? comment.vote === "downvote"
                      ? comment.voteCount + 2
                      : comment.voteCount + 1
                    : comment.vote === "upvote"
                    ? comment.voteCount - 2
                    : comment.voteCount - 1,
              }
            : comment
        )
      );
    } catch (error) {
      console.error("Error voting on comment:", error);
    }
  };

  const handleAddComment = async () => {
    try {
      await axios.post(
        `${getApiURL()}/literature/${id}/comment`,
        { literatureId: Number(id), content: newComment },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast({
        title: "Comment added",
        description: "Your comment has been successfully added.",
      });
      setNewComment("");
      fetchComments();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const commentsResponse = await axios.get(
        `${getApiURL()}/literature/comments/${id}`
      );
      setComments(commentsResponse.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleDeleteChapter = async (chapterId: number) => {
    try {
      await axios.delete(`${getApiURL()}/chapter/delete`, {
        data: { chapterId },
        headers: { Authorization: `Bearer ${token}` },
      });
      toast({
        title: "Chapter deleted",
        description: "The chapter has been successfully deleted.",
      });
      setLiteratureData((prevData) => {
        if (!prevData) return null;
        return {
          ...prevData,
          chapters: prevData.chapters.filter(
            (chapter) => chapter.chapterId !== chapterId
          ),
        };
      });
    } catch (error) {
      console.error("Error deleting chapter:", error);
    }
  };

  const handleDeleteLiterature = async () => {
    try {
      await axios.delete(
        `${getApiURL()}/literature/delete/${literatureData?.literatureId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast({
        title: "Literature deleted",
        description: "The Literature has been successfully deleted.",
      });
      setTimeout(() => {
        navigate(`/profile`);
      }, 1000);
    } catch (error) {
      console.error("Error deleting chapter:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout leftBar={false} rightBar={false}>
      <div className="flex flex-row my-10 relative">
        {literatureData?.authorId === currentUserId && (
          <>
            <div className="absolute top-0 right-0 flex flex-col">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" className="" variant="ghost">
                    <Settings />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() =>
                      navigate(`/novel/edit/${literatureData?.literatureId}`)
                    }
                  >
                    <Pencil color="#04D192" className="mr-2" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLAlertOpen(!literatureAlertOpen)}
                  >
                    <Eraser className="mr-2" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                size={"icon"}
                variant="ghost"
                onClick={() => navigate(`/novel/${id}/create-chapter`)}
              >
                <Plus color="#04D192" />
              </Button>
              <AlertDialog open={literatureAlertOpen}>
                <AlertDialogTrigger asChild></AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the literature.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel
                      onClick={() => setLAlertOpen(!literatureAlertOpen)}
                    >
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDeleteLiterature()}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </>
        )}
        <img
          className="w-80 h-[450px] object-cover rounded-sm"
          src={`${literatureData?.imageUrl}`}
          alt=""
        />
        <div className="w-full p-10 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-5xl font-bold break-words w-[440px] block">
              {literatureData?.title}
            </span>
            <div className="flex flex-row gap-6">
              <div className="flex flex-row gap-2">
                <Grid2X2 />
                {literatureData?.genre.genreTitle}
              </div>
              <div className="flex flex-row gap-2">
                <Layers2 />
                {literatureData?.chapters.length} chapters
              </div>
            </div>
            <span>Author: {literatureData?.users.username}</span>
            <div className="flex flex-row gap-4 items-center">
              {literatureData?.authorId !== currentUserId && (
                <Button
                  className="w-fit bg-[#FBBC04] hover:bg-[#EAAF00] rounded-xl"
                  onClick={() =>
                    navigate(`/donate/${literatureData?.authorId}`)
                  }
                >
                  <Coins className="mr-4" />
                  Donate To Author
                </Button>
              )}
              {literatureData?.donated === true && (
                <Check className="text-[#04D192]" />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              variant={"default"}
              className="w-36 rounded-xl bg-[#04D192] hover:bg-[#00855C]"
              onClick={() =>
                navigate(`/read/${id}/${literatureData?.chapters[0].chapterId}`)
              }
            >
              Read
            </Button>
            {token && (
              <Button
                variant={"default"}
                className="w-36 rounded-xl bg-[#04D192] hover:bg-[#00855C]"
              >
                Add To Library
              </Button>
            )}
          </div>
        </div>
      </div>

      <div>
        <div>
          <Button
            className={`w-44 h-12 text-2xl rounded-none font-bold ${
              currSec == 1 && "border-b-2 border-black"
            }`}
            variant={"ghost"}
            onClick={() => setCurrSec(1)}
          >
            Info
          </Button>
          <Button
            className={`w-44 h-12 text-2xl rounded-none font-bold ${
              currSec == 2 && "border-b-2 border-black"
            }`}
            variant={"ghost"}
            onClick={() => setCurrSec(2)}
          >
            Chapters
          </Button>
        </div>
        <hr className="mb-4" />
        {currSec == 1 && (
          <>
            <p className="my-6">{literatureData?.synopsis}</p>
            {token && (
              <div className="flex flex-col">
                <h2 className="text-xl font-bold my-6">Comment</h2>
                <Textarea
                  placeholder="Type your Comment here here."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <Button className="mt-4 w-20" onClick={handleAddComment}>
                  <Forward />
                </Button>
                <hr className="mt-6" />
              </div>
            )}
            <h2 className="text-xl font-bold my-6">Comments</h2>
            <CommentCard
              comments={comments}
              handleCommentVote={handleCommentVote}
              commentType="Literature"
            />
          </>
        )}
        {currSec == 2 && (
          <>
            {literatureData?.chapters.map((v, i) => (
              <div className="flex flex-row  items-center">
                <div
                  className="hover:bg-secondary cursor-pointer my-2 w-full"
                  key={`o${i}`}
                >
                  <div className="flex flex-row w-full justify-between h-10 items-center p-3 py-8">
                    <span className="w-[20%]">Chapter {v.chapterNumber}</span>
                    <span className="w-full">{v.chapterTitle}</span>
                    <span className="w-[20%]">
                      {timeSince(new Date(v.created_at))}
                    </span>
                  </div>
                  <hr />
                </div>
                {currentUserId === literatureData.authorId && (
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          size="icon"
                          className=""
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/novel/edit-chapter/${v.chapterId}`);
                          }}
                          variant="ghost"
                        >
                          <Settings />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() =>
                            navigate(`/novel/edit-chapter/${v.chapterId}`)
                          }
                        >
                          <Pencil color="#04D192" className="mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setAlertOpen(!alertOpen)}
                        >
                          <Eraser className="mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <AlertDialog open={alertOpen}>
                      <AlertDialogTrigger asChild></AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete the chapter.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel
                            onClick={() => setAlertOpen(!alertOpen)}
                          >
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeleteChapter(v.chapterId)}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </Layout>
  );
}
