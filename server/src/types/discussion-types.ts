export type ReplyType = {
  replierName: string;
  replyText: string;
  replyTime: string;
  isAdmin: boolean;
};

export type DiscussionSchemaType = {
  _id: string;
  name: string;
  email: string;
  title: string;
  message: string;
  time: string;
  replies: ReplyType[];
  hasAdminReplied: boolean;
  createdAt: string;
  updatedAt: string;
  isSuggested: boolean;
};
