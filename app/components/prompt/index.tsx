"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import { useState } from "react";

type PromptProps = {
  topic: string;
  description: string;
  emojiString: string;
};

const Prompt = ({ description, emojiString }: PromptProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full cursor-pointer flex gap-2 items-center md:text-lg bg-primary-100 p-4 rounded-md border-solid border-gray justify-between">
      <div className="flex items-center w-full gap-2">
        <div>{emojiString}</div>
        <div className="font-bold">{description}</div>
      </div>
      {isOpen ? (
        <IconButton size="small" onClick={() => setIsOpen(false)}>
          <KeyboardArrowUpIcon />
        </IconButton>
      ) : (
        <IconButton size="small" onClick={() => setIsOpen(true)}>
          <KeyboardArrowDownIcon />
        </IconButton>
      )}
    </div>
  );
};

export default Prompt;
