import type { Dispatch, ReactNode, SetStateAction } from "react";
import CreateDiscussion from "./create-discussion";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FaChevronDown, FaSearch } from "react-icons/fa";

type DiscussionsHeaderProps = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  sortBy: "latest" | "oldest";
  setSortBy: Dispatch<SetStateAction<"latest" | "oldest">>;
};

export default function DiscussionsHeader({
  title,
  setTitle,
  sortBy,
  setSortBy,
}: DiscussionsHeaderProps): ReactNode {
  return (
    <>
      <header className="w-full h-full p-6 py-8 flex flex-col gap-7 border-b border-dark-gray">
        <div className="w-full flex max-sm:flex-col justify-between items-center gap-10 max-sm:gap-6 max-sm:items-start">
          <h1 className="font-serif font-semibold text-3xl text-white">
            Q&A Discussions
          </h1>
          <CreateDiscussion />
        </div>
        <div className="w-full flex max-sm:flex-col gap-5 items-center">
          <div className="w-full relative flex items-center group">
            <TextField
              label={"Search Discussions"}
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
            <FaSearch className="absolute right-3 text-white group-focus-within:text-gray transition-all duration-200" />
          </div>
          <div className="w-1/2 max-sm:w-full relative flex items-center group">
            <FormControl fullWidth>
              <InputLabel id="order">Order</InputLabel>
              <Select
                labelId="order"
                id="order"
                value={sortBy}
                label="Order"
                onChange={(e) =>
                  setSortBy(e.target.value as "latest" | "oldest")
                }
              >
                <MenuItem value="latest">Latest</MenuItem>
                <MenuItem value="oldest">Oldest</MenuItem>
              </Select>
            </FormControl>
            <FaChevronDown className="absolute right-3 text-white group-focus-within:text-gray transition-all duration-200" />
          </div>
        </div>
      </header>
    </>
  );
}
