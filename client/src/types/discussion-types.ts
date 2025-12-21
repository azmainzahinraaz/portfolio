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
