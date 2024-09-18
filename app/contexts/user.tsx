"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

type UserProps = {
  children: ReactNode;
};

export type UserType = {
  name: string;
  age: number;
  size: string;
  email: string;
  location: string;
};

type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
  resetUser: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: {
    name: "",
    age: 0,
    size: "",
    email: "",
    location: "",
  },
  setUser: () => null,
  resetUser: () => null,
});

export const User = ({ children }: UserProps) => {
  const [user, setUser] = useState<UserType>({
    name: "",
    age: 0,
    size: "",
    email: "",
    location: "",
  });

  const resetUser = () => {
    setUser({
      name: "",
      age: 0,
      size: "",
      email: "",
      location: "",
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, resetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
