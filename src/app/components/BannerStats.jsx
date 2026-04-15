"use client";

import { useFriends } from "../context/FriendContext";

const BannerStats = () => {
  const friends = useFriends()

  const totalFriends = friends?.length || 0;
  const onTrack = friends?.filter(f => f.status === "on-track").length || 0;
  const needAttention = friends?.filter(f => f.status === "overdue" || f.status === "almost due").length || 0;

  const stats = [
    { label: "Total Friends", value: totalFriends },
    { label: "On Track", value: onTrack },
    { label: "Need Attention", value: needAttention },
    { label: "Interactions This Month", value: 12 },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12 px-6 pt-20 max-w-7xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default BannerStats;