export type CreateDiscussionPayloadType = {
  name: string;
  email: string;
  title: string;
  message: string;
};

export type ReplyPayloadType = {
  replierName: string;
  replyText: string;
};

export type DiscussionsResponseType = {
  _id: string;
  title: string;
  message: string;
  name: string;
  time: string;
  hasAdminReplied: boolean;
};

export type ReplyType = {
  _id: string;
  replierName: string;
  replyText: string;
  replyTime: string;
  isAdmin: boolean;
};

export type DiscussionResponseType = {
  _id: string;
  name: string;
  email: string;
  title: string;
  message: string;
  time: string;
  replies: ReplyType[];
  hasAdminReplied: boolean;
  isSuggested: boolean;
  createdAt: string;
  updatedAt: string;
};
