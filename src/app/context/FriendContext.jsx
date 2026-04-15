"use client";
import { createContext, useContext } from "react";

const FriendContext = createContext();

export const FriendProvider = ({ children, initialData }) => {
  return (
    <FriendContext.Provider value={initialData}>
      {children}
    </FriendContext.Provider>
  );
};

export const useFriends = () => useContext(FriendContext);