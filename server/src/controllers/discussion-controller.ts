import { Request, Response } from "express";
import discussion from "../models/discussion.js";
import { ReplyType } from "../types/discussion-types.js";
import { verifyAdmin } from "../utils/verify-admin.js";

export async function getAllDiscussions(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { title, shortBy } = req.query;

    // fetch all discussions from the database
    const discussions = await discussion
      .find(title ? { title: { $regex: title, $options: "i" } } : {})
      .sort({ createdAt: shortBy === "oldest" ? 1 : -1 })
      .select("_id title message name time hasAdminReplied");

    res.status(200).json({ discussions });
  } catch (err) {
    console.log("Error getting all discussions - ", err);
    res.status(500).json({ message: "Server Error", err });
  }
}

export async function getDiscussionById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;

    // validate the request
    if (!id) {
      res.status(400).json({ message: "Discussion ID is required" });
      return;
    }

    // fetch the discussion from the database
    const discussionData = await discussion.findById(id);
    if (!discussionData) {
      res.status(404).json({ message: "Discussion not found" });
      return;
    }

    // filter the replies so that admin replies come first
    discussionData.replies.sort((a, b) => {
      if (a.isAdmin && !b.isAdmin) return -1;
      if (!a.isAdmin && b.isAdmin) return 1;
      return 0;
    });

    res.status(200).json({ discussion: discussionData });
  } catch (err) {
    console.log("Error getting discussion by ID - ", err);
    res.status(500).json({ message: "Server Error", err });
  }
}

export async function replyToDiscussion(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    const { replierName, replyText, replyTime, token } = req.body;

    console.log("Reply request received:", {
      id,
      replierName,
      replyText,
      replyTime,
      token,
    });

    // validate the request
    if (!id || !replierName || !replyText || !replyTime) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    // create the reply object
    const reply: ReplyType = {
      replierName,
      replyText,
      replyTime,
      isAdmin: false,
    };

    const isAdmin = await verifyAdmin(token);
    reply.isAdmin = isAdmin;

    // get the previous discussion
    const existingDiscussion = await discussion.findById(id);

    // update the discussion with the new reply
    const updatedDiscussion = await discussion.findByIdAndUpdate(
      id,
      {
        $push: { replies: reply },
        $set: {
          hasAdminReplied: reply.isAdmin
            ? true
            : existingDiscussion?.hasAdminReplied || false,
        },
      },
      { new: true }
    );

    // check if discussion was found and updated
    if (!updatedDiscussion) {
      res.status(404).json({ message: "Discussion not found" });
      return;
    }

    res.status(200).json({ discussion: updatedDiscussion });
  } catch (err) {
    console.log("Error replying to discussion - ", err);
    res.status(500).json({ message: "Server Error", err });
  }
}

export async function deleteReply(req: Request, res: Response): Promise<void> {
  try {
    const { discussionId, replyId } = req.params;
    const { token } = req.body;

    // validate the request
    if (!discussionId || !replyId || !token) {
      res
        .status(400)
        .json({ message: "Discussion ID and Reply ID are required" });
      return;
    }

    const isAdmin = await verifyAdmin(token);
    if (!isAdmin) {
      res.status(403).json({ message: "Unauthorized" });
      return;
    }

    // delete the reply from the discussion
    const updatedDiscussion = await discussion.findByIdAndUpdate(
      discussionId,
      { $pull: { replies: { _id: replyId } } },
      { new: true }
    );
    if (!updatedDiscussion) {
      res.status(404).json({ message: "Discussion not found" });
      return;
    }

    res.status(200).json({ discussion: updatedDiscussion });
  } catch (err) {
    console.log("Error deleting reply - ", err);
    res.status(500).json({ message: "Server Error", err });
  }
}

export async function createDiscussion(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, title, message, time } = req.body;

    // validate the request
    if (!name || !email || !title || !message || !time) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    // create a new discussion
    const newDiscussion = await discussion.create({
      name,
      email,
      title,
      message,
      time,
    });

    res.status(201).json({ discussion: newDiscussion });
  } catch (err) {
    console.log("Error creating discussion - ", err);
    res.status(500).json({ message: "Server Error", err });
  }
}

export async function deleteDiscussion(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    const { token } = req.body;

    // validate the request
    if (!id || !token) {
      res.status(400).json({ message: "Discussion ID is required" });
      return;
    }

    const isAdmin = await verifyAdmin(token);
    if (!isAdmin) {
      res.status(403).json({ message: "Unauthorized" });
      return;
    }

    // delete the discussion from the database
    const deletedDiscussion = await discussion.findByIdAndDelete(id);
    if (!deletedDiscussion) {
      res.status(404).json({ message: "Discussion not found" });
      return;
    }

    res.status(200).json({ message: "Discussion deleted successfully" });
  } catch (err) {
    console.log("Error deleting discussion - ", err);
    res.status(500).json({ message: "Server Error", err });
  }
}
