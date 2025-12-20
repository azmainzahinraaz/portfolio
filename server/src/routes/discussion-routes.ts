import { Router } from "express";
import {
  createDiscussion,
  deleteDiscussion,
  deleteReply,
  getAllDiscussions,
  getDiscussionById,
  replyToDiscussion,
} from "../controllers/discussion-controller.js";

const discussRouter = Router();

discussRouter.get("/", getAllDiscussions);
discussRouter.get("/:id", getDiscussionById);
discussRouter.post("/", createDiscussion);
discussRouter.delete("/:id", deleteDiscussion);

discussRouter.put("/:id/reply", replyToDiscussion);
discussRouter.delete("/:id/reply/:replyId", deleteReply);

export default discussRouter;
