import CommentCard from "@/components/Comments/Comments";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { timeSince } from "@/lib/utils";
import Cookies from "js-cookie";
import { Forward, Layers, MessageSquareMore, Settings2 } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ReadingConfig() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const token = Cookies.get("token");


  const [tabMenu, setTabMenu] = useState<
    "config" | "comment" | "chapters" | "none"
  >("none");

  const CommentElement = () => {
    return (
      <div className="h-[80vh] right-[80px] bg-slate-100  w-[300px] fixed">
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
          commentType="Forum"
          comments={comments}
          handleCommentVote={handleCommentVote}
        />
      </div>
    );
  };

  const ConfigElement = () => {
    return (
      <div className="h-[80vh] right-[80px] bg-slate-100 w-[300px] fixed p-12 flex flex-col justify-center ">
        <h1 className="text-3xl text-center font-semibold">Config</h1>
        <div className="flex flex-col gap-4  my-6">
          <h6>Background Color</h6>
          <div className="flex flex-row gap-4  ">
            <Button
              className="rounded-full w-12 h-12 border hover:border-4 border-black"
              variant={"ghost"}
            />
            <Button
              className="rounded-full w-12 h-12 border bg-[#F6ECCA] hover:bg-[#F6ECCA] hover:border-4 border-black"
              variant={"ghost"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4  my-6">
          <h6>Font</h6>
          <div className="flex flex-row gap-4  ">
            <Button variant={"outline"}>Inter</Button>
            <Button variant={"outline"}>Kdham Tmor</Button>
          </div>
        </div>
        <div className="flex flex-col gap-4  my-6">
          <h6>Font Size</h6>
          <div className="flex flex-row gap-4  items-center">
            <Button variant={"outline"}>-</Button>
            16
            <Button variant={"outline"}>+</Button>
          </div>
        </div>
      </div>
    );
  };

  const ChaptersElement = () => {
    const data = [
      {
        chapterId: 1,
        chapterNumber: 1,
        chapterTitle: "Chapter Title",
        content:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n\nSection 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n\n1914 translation by H. Rackham\n"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"\n\nSection 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC\n"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."\n\n1914 translation by H. Rackham\n"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."',
        created_at: "2024-06-10T02:18:27.000Z",
        imageUrl:
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HELg?q=90&o=f&w=480&h=270",
        literatureId: 2,
        voteCount: 0,
      },
    ];

    return (
      <div className="h-[80vh] right-[80px] bg-slate-100 w-[300px] fixed">
        {data?.map((v, i) => (
          <div
            className="hover:bg-secondary cursor-pointer my-2 w-full"
            onClick={() => navigate(`/read/${id}/${v.chapterId}`)}
          >
            <div className="flex flex-row w-full justify-between  h-10 items-center p-3 py-8">
              <span className="w-[120px]">Chapter {v.chapterNumber}</span>
              <span className="w-[180px] line-clamp-1  text-ellipsis">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus repudiandae fugit, facilis enim fugiat cum quaerat
                natus iure illo aspernatur reprehenderit ad facere similique
                quae quidem quod necessitatibus fuga unde totam corporis
                quisquam? Nam, numquam et repellat dignissimos beatae eveniet.
              </span>
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  };

  const ElementMap = {
    none: <></>,
    comment: <CommentElement />,
    config: <ConfigElement />,
    chapters: <ChaptersElement />,
  };

  const handleButtonClick = (menu: "config" | "comment" | "chapters") => {
    setTabMenu((prev) => (prev === menu ? "none" : menu));
  };

  return (
    <div className="fixed top-[14%] right-0 h-[80vh] w-[80px] flex flex-col justify-center gap-6 bg-slate-100 p-2">
      <Button
        variant={tabMenu === "chapters" ? "default" : "ghost"}
        className="h-14"
        onClick={() => handleButtonClick("chapters")}
      >
        <Layers />
      </Button>
      <Button
        variant={tabMenu === "config" ? "default" : "ghost"}
        className="h-14"
        onClick={() => handleButtonClick("config")}
      >
        <Settings2 />
      </Button>
      <Button
        variant={tabMenu === "comment" ? "default" : "ghost"}
        className="h-14"
        onClick={() => handleButtonClick("comment")}
      >
        <MessageSquareMore />
      </Button>
      {ElementMap[tabMenu]}
    </div>
  );
}
