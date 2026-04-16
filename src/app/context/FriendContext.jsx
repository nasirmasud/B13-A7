"use client";
import { createContext, useContext, useState, useEffect } from "react";

const FriendContext = createContext();

export const FriendProvider = ({ children, initialData }) => {
  const [friends] = useState(initialData);

  const [interactions, setInteractions] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("keeper_timeline");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("keeper_timeline", JSON.stringify(interactions));
    }
  }, [interactions]);

  const addInteraction = (friendId, type) => {
    const friend = friends.find((f) => String(f.id) === String(friendId));

    const newLog = {
      id: Date.now(),
      friendId,
      friendName: friend?.name || "Unknown",
      friendImage: friend?.picture || "",
      type,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setInteractions((prev) => [newLog, ...prev]);
  };

  return (
    <FriendContext.Provider value={{ friends, interactions, addInteraction }}>
      {children}
    </FriendContext.Provider>
  );
};

export const useFriends = () => {
  const context = useContext(FriendContext);
  if (!context) {
    throw new Error("useFriends must be used within a FriendProvider");
  }
  return context;
};