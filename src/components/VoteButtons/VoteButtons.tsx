import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { Button } from "../ui/button";

interface VoteButtonProps {
  upvoteFn: () => void;
  downvoteFn: () => void;
  value: number;
  status: "upvote" | "downvote" | "blank"; // Explicit status types for clarity
}

export default function VoteButtons({
  upvoteFn,
  downvoteFn,
  value,
  status,
}: VoteButtonProps) {
  let upvoteClass = "ghost";
  let downvoteClass = "ghost";

  if (status != "blank") {
    status === "upvote" ? (upvoteClass = "default") : (upvoteClass = "ghost");
    status === "downvote"
      ? (downvoteClass = "default")
      : (downvoteClass = "ghost");
  }

  return (
    <div className="flex flex-row items-center gap-4 mb-4">
      <Button variant={upvoteClass as "default" | "ghost"} onClick={() => upvoteFn()}>
        <ArrowBigUp />
      </Button>
      <Button variant={downvoteClass  as "default" | "ghost"} onClick={() => downvoteFn()}>
        <ArrowBigDown />
      </Button>
      <span>{value}</span>
    </div>
  );
}
