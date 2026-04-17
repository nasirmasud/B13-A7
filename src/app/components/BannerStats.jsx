"use client";

import { useFriends } from "../context/FriendContext";

const BannerStats = () => {
  const { friends } = useFriends();

  const totalFriends = friends?.length || 0;
  const onTrack = friends?.filter(f => f.status === "on-track").length || 0;

  const needAttention = friends?.filter(f =>
    f.status === "overdue" || f.status === "almost due"
  ).length || 0;

  const stats = [
    { label: "Total Friends", value: totalFriends },
    { label: "On Track", value: onTrack },
    { label: "Need Attention", value: needAttention },
    { label: "Interactions This Month", value: 12 },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-10 mb-8 md:mb-12 px-4 md:px-6 pt-10 md:pt-16 lg:pt-20 max-w-7xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm text-center">
          <p className="ext-2xl md:text-3xl font-bold text-[#244d3f]">{stat.value}</p>
          <p className="text-sm md:text-sm lg:text-lg text-gray-500 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default BannerStats;