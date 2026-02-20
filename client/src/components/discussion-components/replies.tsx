import { deleteReply, replyToDiscussion } from "@/lib/api/discussion-api";
import type { ReplyPayloadType, ReplyType } from "@/types/discussion-types";
import formatTime from "@/utils/format-time";
import { useState, type ReactNode } from "react";
import toast from "react-hot-toast";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useMutation, useQueryClient } from "react-query";
import PrimaryBtn from "../ui/primary-btn";
import { TextField } from "@mui/material";

export default function Replies({
  replies,
  discussionId,
  hasAdminReplied,
}: {
  replies: ReplyType[];
  discussionId: string;
  hasAdminReplied: boolean;
}): ReactNode {
  const queryClient = useQueryClient();

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const token = localStorage.getItem("adminToken") || "";

  const replyMutation = useMutation({
    mutationFn: (replyPayload: ReplyPayloadType) =>
      replyToDiscussion(discussionId, replyPayload),
    onSuccess: () => {
      toast.success("Replied to discussion successfully");
      queryClient.invalidateQueries({ queryKey: ["discussion", discussionId] });
      setName("");
      setText("");
    },
    onError: () => {
      toast.error("Failed to reply to the discussion");
    },
  });

  return (
    <div className="w-full h-full flex flex-col border-r border-t border-dark-gray">
      {replies.map((reply) => (
        <ReplyCard key={reply._id} reply={reply} discussionId={discussionId} />
      ))}
      {token && hasAdminReplied ? null : (
        <div className="w-full h-full p-6 py-8 flex gap-5 border-b border-dark-gray">
          {token ? (
            <img
              src="/pfp-2.webp"
              alt="Admin"
              className="w-12.5 h-12.5 rounded-full object-center object-cover border-3 border-white"
            />
          ) : (
            <IoPersonCircleOutline className="text-[5rem] -ml-1.25 -mt-4.25 text-white/80" />
          )}
          <div className="w-full flex flex-col gap-2">
            {!token && (
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-secondary-bg-color rounded-md"
                variant={"outlined"}
                placeholder="Your Name"
              />
            )}
            <TextField
              multiline
              minRows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="bg-secondary-bg-color rounded-md"
              variant={"outlined"}
              placeholder="Type the message"
            />
            <PrimaryBtn
              onClick={() =>
                replyMutation.mutate({
                  replierName: token ? "Fake Admin" : name,
                  replyText: text,
                })
              }
              className="text-sm px-3"
            >
              Reply
            </PrimaryBtn>
          </div>
        </div>
      )}
    </div>
  );
}

function ReplyCard({
  reply,
  discussionId,
}: {
  reply: ReplyType;
  discussionId: string;
}): ReactNode {
  const queryClient = useQueryClient();

  const token = localStorage.getItem("adminToken") || "";
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(reply.replyText);

  const deleteReplyMutation = useMutation({
    mutationFn: () => deleteReply(discussionId, reply._id || ""),
    onSuccess: () => {
      toast.success("Reply deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["discussion", discussionId] });
    },
    onError: () => {
      toast.error("Failed to delete the reply");
    },
  });

  const editReplyMutation = useMutation({
    mutationFn: async () => {
      await deleteReply(discussionId, reply._id || "");
      return replyToDiscussion(discussionId, {
        replierName: reply.replierName,
        replyText: editedText,
      });
    },
    onSuccess: () => {
      toast.success("Reply edited successfully");
      queryClient.invalidateQueries({ queryKey: ["discussion", discussionId] });
      setIsEditing(false);
    },

    onError: () => {
      toast.error("Failed to edit the reply");
    },
  });

  return (
    <div className="w-full h-full p-6 py-8 flex max-sm:flex-col gap-5 border-b border-dark-gray">
      {reply.isAdmin ? (
        <img
          src="/pfp-2.webp"
          alt="Admin"
          className="w-12.5 h-12.5 rounded-full object-center object-cover border-3 border-white"
        />
      ) : (
        <IoPersonCircleOutline className="min-w-15 min-h-15 -ml-1.25 -mt-2.25 text-white/80" />
      )}
      <div
        className="w-full h-full flex flex-col gap-2"
        style={{
          marginLeft: reply.isAdmin ? "" : "-3px",
        }}
      >
        <div className="w-full flex justify-between gap-5 -mt-1.5">
          <p className="text-gray">
            {reply.isAdmin ? "Azmain Zahin Raaz" : reply.replierName},{" "}
            {formatTime(reply.replyTime)}
          </p>
        </div>
        {isEditing ? (
          <div className="w-full flex flex-col gap-2">
            <TextField
              multiline
              minRows={3}
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="bg-secondary-bg-color rounded-md"
              placeholder="Type the message"
            />
            <PrimaryBtn
              onClick={() => editReplyMutation.mutate()}
              className="text-sm px-3"
            >
              Save
            </PrimaryBtn>
          </div>
        ) : (
          <p className="text-white w-full h-full whitespace-pre-wrap">
            {reply.replyText}
          </p>
        )}
      </div>
      <div className="min-w-30 flex justify-end max-sm:justify-start">
        {reply.isAdmin || token ? (
          token ? (
            <div className="flex gap-2">
              <PrimaryBtn
                onClick={() => deleteReplyMutation.mutate()}
                className="before:bg-red text-sm"
              >
                Delete
              </PrimaryBtn>
              {reply.isAdmin ? (
                <PrimaryBtn
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-sm"
                >
                  Edit
                </PrimaryBtn>
              ) : null}
            </div>
          ) : (
            <p className="px-3 py-1.5 h-fit text-sm rounded-sm bg-secondary-bg-color text-white">
              Admin
            </p>
          )
        ) : null}
      </div>
    </div>
  );
}
