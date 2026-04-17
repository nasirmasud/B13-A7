"use client";
import { useFriends } from "@/app/context/FriendContext";
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from "react";

const StatsPage = () => {
  const { interactions } = useFriends();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setHasMounted(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const callCount = interactions.filter(i => i.type === "Call").length;
  const textCount = interactions.filter(i => i.type === "Text").length;
  const videoCount = interactions.filter(i => i.type === "Video").length;

  const chartData = [
    { name: 'Calls', value: callCount, fill: '#274d40' },
    { name: 'Texts', value: textCount, fill: '#8136f4' },
    { name: 'Videos', value: videoCount, fill: '#37a162' },
  ];

  if (!hasMounted) return <div className="min-h-screen bg-[#f8fafc]" />;

  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-[#244d3f] mb-2">Friendship Analytics</h1>
      <div className="bg-white p-4 md:p-8 rounded-xl border border-gray-100 shadow-sm text-center">
        <p className="text-sm md:text-base text-gray-500 mb-4 md:mb-8 font-medium">By Interaction Type</p>

        {interactions.length === 0 ? (
          <div className="py-20 text-gray-400 font-medium">
            No data available to show stats. Start interacting!
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full min-h-100" style={{ minWidth: 0 }}>
              <ResponsiveContainer width="100%" height={320} minWidth={0} minHeight={0}>
                <PieChart margin={{ top: 0, right: 0, bottom: 80, left: 0 }}>
                  <Pie
                    data={chartData}
                    innerRadius="70%"
                    outerRadius="100%"
                    cornerRadius={10}
                    paddingAngle={8}
                    dataKey="value"
                    isAnimationActive={true}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: '15px',
                      border: 'none',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    iconSize={10}
                    wrapperStyle={{
                      bottom: -10
                    }}
                    formatter={(value) => (
                      <span className="text-sm font-bold text-gray-600">{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};


export default StatsPage;