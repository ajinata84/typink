import {
  ForumComment,
  LiteratureComment,
  ChapterComment,
} from "@/util/interfaces";
import VoteButtons from "../VoteButtons/VoteButtons";
import { timeSince } from "@/lib/utils";
import Cookies from "js-cookie";
import { defaultUserIcon } from "@/util/constants";

interface CommentProps {
  comments: (ForumComment | LiteratureComment | ChapterComment)[];
  handleCommentVote: (
    commentId: number,
    voteType: "upvote" | "downvote"
  ) => void;
  commentType: "Forum" | "Literature" | "Chapter";
}

export default function CommentCard({
  comments,
  handleCommentVote,
  commentType,
}: CommentProps) {
  const token = Cookies.get("token");

  return (
    <>
      {comments.length === 0 && "No Comments"}
      {comments.map((comment) => {
        const commentId =
          commentType === "Forum"
            ? (comment as ForumComment).forumCommentId
            : commentType === "Literature"
            ? (comment as LiteratureComment).literatureCommentId
            : (comment as ChapterComment).chapterCommentId;

        return (
          <div key={commentId} className="w-full mt-4">
            <div className="flex flex-row items-center gap-4 justify-between">
              <div className="flex flex-row items-center gap-4 ">
                <img
                  src={
                    comment.users.imageUrl
                      ? comment.users.imageUrl
                      : defaultUserIcon
                  }
                  alt="Profile"
                  className="rounded-full object-cover w-8 h-8"
                />
                <span className="font-semibold">{comment.users.username}</span>
              </div>
              <span className="text-sm text-[#8E8E8E]">
                {timeSince(new Date(comment.created_at))}
              </span>
            </div>
            <p className="my-4">{comment.content}</p>
            {token && (
              <VoteButtons
                upvoteFn={() => handleCommentVote(commentId, "upvote")}
                downvoteFn={() => handleCommentVote(commentId, "downvote")}
                value={comment.voteCount}
                status={comment.vote as "upvote" | "downvote" | "blank"}
              />
            )}
            <hr className="my-4" />
          </div>
        );
      })}
    </>
  );
}
