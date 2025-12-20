import mongoose, { Schema } from "mongoose";
import { DiscussionSchemaType } from "../types/discussion-types.js";

const replySchema = new Schema({
  replierName: { type: String, required: true },
  replyText: { type: String, required: true },
  replyTime: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
});

const discussionSchema = new Schema<DiscussionSchemaType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    time: { type: String, required: true },
    replies: { type: [replySchema], default: [] },
    hasAdminReplied: { type: Boolean, default: false },
    isSuggested: { type: Boolean, default: false }, //TODO: for future use
  },
  { timestamps: true }
);

export default mongoose.model("Discussion", discussionSchema);
