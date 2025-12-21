import { useState } from "react";
import PrimaryBtn from "../ui/primary-btn";
import { Modal, TextField } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { useMutation, useQueryClient } from "react-query";
import type { CreateDiscussionPayloadType } from "@/types/discussion-types";
import { createDiscussion } from "@/lib/api/discussion-api";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  discussionSchema,
  type DiscussionSchemaType,
} from "@/lib/validation/discussion-schema";

export default function CreateDiscussion() {
  const queryClient = useQueryClient();

  const discussionMutation = useMutation({
    mutationFn: (data: CreateDiscussionPayloadType) => createDiscussion(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discussions"] });
      toast.success("Discussion created successfully!");
      setIsOpen(false);
    },
    onError: (error) => {
      console.error("Error creating discussion:", error);
      toast.error("Failed to create discussion. Please try again.");
    },
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(discussionSchema),
  });

  function onSubmit(data: DiscussionSchemaType) {
    discussionMutation.mutate(data);
  }

  return (
    <>
      <PrimaryBtn onClick={() => setIsOpen(true)}>Ask Question</PrimaryBtn>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="w-full h-full flex justify-center items-center"
        onWheel={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-122.5 max-sm:max-w-full h-fit max-h-[90vh] max-sm:max-h-screen overflow-y-auto rounded-md bg-secondary-bg-color">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-between items-center gap-4 p-4 border-b border-gray/60">
              <h2 className="text-white text-lg font-semibold">
                Ask a Question
              </h2>
              <button
                className="text-white text-2xl font-bold cursor-pointer hover:text-red-500 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <RxCross2 />
              </button>
            </div>
            <div className="w-full h-full flex p-4">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full h-full flex flex-col gap-7 create-discussion"
              >
                <div className="flex flex-col gap-4.5">
                  <h3 className="text-white text-[1.1rem]">About yourself</h3>
                  <div className="flex flex-col gap-3.5">
                    <TextField
                      label="Name"
                      variant="outlined"
                      {...register("name")}
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ""}
                      fullWidth
                    />
                    <TextField
                      label="Email"
                      variant="outlined"
                      {...register("email")}
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                      fullWidth
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4.5">
                  <h3 className="text-white text-[1.1rem]">
                    Discussion Details
                  </h3>
                  <div className="flex flex-col gap-3.5">
                    <TextField
                      label="Title"
                      variant="outlined"
                      {...register("title")}
                      error={!!errors.title}
                      helperText={errors.title ? errors.title.message : ""}
                      fullWidth
                    />
                    <TextField
                      label="Message"
                      variant="outlined"
                      {...register("message")}
                      error={!!errors.message}
                      helperText={errors.message ? errors.message.message : ""}
                      fullWidth
                      multiline
                      minRows={4}
                    />
                  </div>
                </div>
                <div
                  className={`w-full flex justify-end mt-4 z-99 ${
                    discussionMutation.isLoading
                      ? "pointer-events-none opacity-70"
                      : ""
                  }`}
                >
                  <PrimaryBtn type="submit" className="w-full">
                    {discussionMutation.isLoading ? "Submitting..." : "Submit"}
                  </PrimaryBtn>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
