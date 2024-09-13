"use client";
import { useResponsesContext } from "@/app/contexts/responses";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";

type PromptProps = {
  topic: "event" | "shape" | "yourself";
  description: string;
  emojiString: string;
  placeholderText: string;
};

const Prompt = ({
  description,
  emojiString,
  placeholderText,
  topic,
}: PromptProps) => {
  const { responses, setResponses } = useResponsesContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [response, setResponse] = useState<string>(responses[topic]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setResponse(value);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResponses({
      ...responses,
      [topic]: response,
    });
    handleClose();
  };

  return (
    <div
      className={`w-full flex flex-col gap-2 items-center md:text-lg hover:bg-primary-200 transition ease-in delay-100 cursor-pointer ${
        isOpen ? "bg-primary-200 border border-primary-100" : "bg-primary-100"
      } p-4 justify-between`}
    >
      <div
        className="flex items-center w-full gap-4 h-full cursor-pointer justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4 h-full">
          <div className="text-2xl">{emojiString}</div>
          <div className="font-bold">{description}</div>
        </div>
        {!isOpen && (
          <IconButton size="small" onClick={() => setIsOpen(true)}>
            <KeyboardArrowDownIcon />
          </IconButton>
        )}
      </div>
      {isOpen && (
        <form onSubmit={handleSubmit} className="w-full flex gap-2">
          <TextField
            className="w-full"
            variant="standard"
            value={response}
            name={topic}
            onChange={handleInput}
            placeholder={placeholderText}
            slotProps={{
              input: {
                endAdornment: (
                  <IconButton onClick={() => setResponse("")}>
                    <ClearIcon color="secondary" />
                  </IconButton>
                ),
              },
            }}
          />
          <div className="flex items-center gap-2">
            <Button
              type="submit"
              variant="contained"
              size="small"
              color="primary"
              style={{ fontWeight: "bold", fontFamily: "inherit" }}
            >
              Save
            </Button>
            <Button
              type="button"
              onClick={() => handleClose()}
              size="small"
              color="secondary"
              variant="outlined"
              style={{ fontWeight: "bold", fontFamily: "inherit" }}
            >
              Close
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Prompt;
