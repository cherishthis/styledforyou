"use client";
import { useResponsesContext } from "@/app/contexts/responses";
import theme from "@/app/contexts/theme";
import { Button, Divider } from "@mui/material";
import { useEffect, useState } from "react";

const ResponseBox = () => {
  const { responses, resetResponses } = useResponsesContext();
  const [hide, setHide] = useState<boolean>(false);

  useEffect(() => {
    if (
      responses.event === "" &&
      responses.shape === "" &&
      responses.yourself === ""
    ) {
      setHide(true);
    } else setHide(false);
  }, [responses]);

  return (
    !hide && (
      <div className="flex flex-col border-2 gap-2 rounded-md border-primary-100 items-center justify-center p-4 border-solid">
        <div className="font-bold text-xl">Current Responses</div>
        {responses.event !== "" && (
          <div>
            <strong>Event:</strong> {responses.event}
          </div>
        )}
        {responses.yourself !== "" && (
          <div>
            <strong>Yourself:</strong> {responses.yourself}
          </div>
        )}
        {responses.shape !== "" && (
          <div>
            <strong>Shape:</strong> {responses.shape}
          </div>
        )}
        <Divider
          flexItem
          sx={{ backgroundColor: theme.palette.primary.light }}
        />
        <Button
          style={{ display: "flex", gap: "4px" }}
          variant="contained"
          disabled={false}
          color="primary"
          size="small"
        >
          <div>{"\u{2728}"}</div>
          <div className="font-bold">Style for me</div>
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => resetResponses()}
        >
          Clear Responses
        </Button>
      </div>
    )
  );
};

export default ResponseBox;
