"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

type ResponsesProps = {
  children: ReactNode;
};

type ResponsesType = {
  event: string;
  yourself: string;
  shape: string;
};

type ResponsesContextType = {
  responses: ResponsesType;
  setResponses: (responses: ResponsesType) => void;
  resetResponses: () => void;
};

export const ResponsesContext = createContext<ResponsesContextType>({
  responses: {
    event: "",
    yourself: "",
    shape: "",
  },
  setResponses: () => null,
  resetResponses: () => null,
});

export const Responses = ({ children }: ResponsesProps) => {
  const [responses, setResponses] = useState<ResponsesType>({
    event: "",
    yourself: "",
    shape: "",
  });

  const resetResponses = () => {
    setResponses({
      event: "",
      yourself: "",
      shape: "",
    });
  };

  return (
    <ResponsesContext.Provider
      value={{ responses, setResponses, resetResponses }}
    >
      {children}
    </ResponsesContext.Provider>
  );
};

export const useResponsesContext = () => {
  return useContext(ResponsesContext);
};
