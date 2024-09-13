"use client";
import { useResponsesContext } from "@/app/contexts/responses";

const ResponseBox = () => {
  const { responses } = useResponsesContext();

  return (
    <div className="flex flex-col gap-2 border-4 border-primary-100 items-center justify-center p-4 w-full border-solid">
      <div className="font-bold text-xl">Current Responses</div>
      <div className="font-light text-sm text-black">
        *WILL REMOVE LATER... just wanted to show you how I am thinking about
        state/data management initially*
      </div>
      <div>
        <strong>Event:</strong> {responses.event}
      </div>
      <div>
        <strong>Yourself:</strong> {responses.yourself}
      </div>
      <div>
        <strong>Shape:</strong> {responses.shape}
      </div>
    </div>
  );
};

export default ResponseBox;
