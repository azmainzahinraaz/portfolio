import { api } from "@/config/axios";
import type {
  CreateDiscussionPayloadType,
  ReplyPayloadType,
} from "@/types/discussion-types";
import dayjs from "dayjs";

export async function getDiscussions({
  title,
  shortBy,
}: {
  title: string;
  shortBy: string;
}) {
  const data = await api.get("/discussions", {
    params: { title, shortBy },
  });
  return data;
}

export async function getDiscussionById(id: string) {
  const data = await api.get(`/discussions/${id}`);
  return data;
}

export async function createDiscussion(payload: CreateDiscussionPayloadType) {
  const date = dayjs().format();
  const data = await api.post("/discussions", {
    ...payload,
    time: date,
  });
  return data;
}

export async function deleteDiscussion(id: string) {
  const jwtToken = localStorage.getItem("adminToken") || "";
  const data = await api.delete(`/discussions/${id}`, {
    data: { token: jwtToken },
  });

  return data;
}

export async function replyToDiscussion(
  id: string,
  replyPayload: ReplyPayloadType
) {
  const jwtToken = localStorage.getItem("adminToken") || "";
  const date = dayjs().format();
  const data = await api.put(`/discussions/${id}/reply`, {
    ...replyPayload,
    time: date,
    token: jwtToken,
  });
  return data;
}

export async function deleteReply(discussionId: string, replyId: string) {
  const jwtToken = localStorage.getItem("adminToken") || "";
  const data = await api.delete(
    `/discussions/${discussionId}/reply/${replyId}`,
    {
      data: { token: jwtToken },
    }
  );
  return data;
}
