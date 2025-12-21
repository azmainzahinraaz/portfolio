import { z } from "zod/v3";

// Zod schema for form validation
export const discussionSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must be at least 2 characters"),
  email: z.string({ required_error: "Email is required" }).email({
    message: "Invalid email address",
  }),
  title: z
    .string({ required_error: "Title is required" })
    .min(2, "Title must be at least 2 characters"),
  message: z
    .string({ required_error: "Message is required" })
    .min(2, "Message must be at least 2 characters"),
});

// Type for the form data derived from the Zod schema
export type DiscussionSchemaType = z.infer<typeof discussionSchema>;
