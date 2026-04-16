"use client";
import { useFriends } from "@/app/context/FriendContext";
import { useEffect, useState } from "react";
import { PiPhoneCallBold, PiVideoCameraDuotone } from "react-icons/pi";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdOutlineHistoryToggleOff } from "react-icons/md";

const TimelinePage = () => {
  const { interactions } = useFriends();
  const [hasMounted, setHasMounted] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const filteredInteractions = interactions.filter((log) => {
    if (filter === "All") return true;
    return log.type === filter;
  });

  const getIcon = (type) => {
    switch (type) {
      case "Call": return <PiPhoneCallBold size={24} className="text-blue-500" />;
      case "Text": return <LuMessageSquareMore size={24} className="text-purple-500" />;
      case "Video": return <PiVideoCameraDuotone size={24} className="text-orange-500" />;
      default: return null;
    }
  };

  if (!hasMounted) {
    return (
      <main className="max-w-4xl mx-auto p-6 md:p-12 min-h-screen bg-[#f8fafc]">
        <h1 className="text-4xl font-bold text-[#1e293b] mb-8">Timeline</h1>
        <div className="animate-pulse space-y-4">
          <div className="h-20 bg-gray-200 rounded-xl w-full"></div>
          <div className="h-20 bg-gray-200 rounded-xl w-full"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12 min-h-screen bg-[#f8fafc]">
      <h1 className="text-4xl font-bold text-[#1e293b] mb-8">Timeline</h1>

      <div className="mb-6 flex items-center gap-3">
        <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Filter by:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="All">All Activities</option>
          <option value="Call">Calls</option>
          <option value="Text">Texts</option>
          <option value="Video">Videos</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredInteractions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100 shadow-sm">
            <div className="bg-gray-50 p-6 rounded-full mb-4">
              <MdOutlineHistoryToggleOff size={48} className="text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-700">Empty List</h3>
            <p className="text-gray-400 mt-1">No {filter !== "All" ? filter.toLowerCase() : ""} activities found in timeline.</p>
          </div>
        ) : (
          filteredInteractions.map((log) => (
            <div
              key={log.id}
              className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-6 hover:border-gray-200 transition-all hover:shadow-md"
            >
              <div className="w-12 h-12 flex justify-center items-center bg-gray-50 rounded-full">
                {getIcon(log.type)}
              </div>

              <div className="flex-1">
                <p className="text-[17px] font-medium text-gray-700">
                  <span className="font-bold text-[#1e293b]">{log.type}</span>
                  <span className="text-gray-400"> with </span>
                  <span className="text-emerald-600 font-semibold">{log.friendName}</span>
                </p>
                <p className="text-sm text-gray-400 font-medium">
                  {log.date}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default TimelinePage;