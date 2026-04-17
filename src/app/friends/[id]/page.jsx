export const dynamic = 'force-dynamic';

import Image from "next/image";
import { notFound } from "next/navigation";
import { FriendActions } from "./FriendActions";
import { FiTrash2 } from "react-icons/fi";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { PiArchive } from "react-icons/pi";

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_BASE_URL) return `https://${process.env.NEXT_PUBLIC_BASE_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

const getFriends = async () => {
  try {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/friends.json`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const friends = await getFriends();
  const friend = friends.find((f) => String(f.id) === id);

  return {
    title: friend ? `${friend.name} - Keeper` : "Friend Not Found",
  };
}

const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;
  const friends = await getFriends();
  const friend = friends.find((f) => String(f.id) === id);

  if (!friend) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto p-6 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src={friend.picture}
                alt={friend.name}
                height={200}
                width={200}
                className="rounded-full object-cover border-4 border-gray-50 shadow-sm"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{friend.name}</h2>

            <div className="flex flex-col gap-2 mt-2">
              <span className={`text-[10px] px-3 py-1 rounded-xl font-bold uppercase ${friend.status === 'overdue' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                }`}>
                {friend.status}
              </span>
              <div className="flex flex-wrap gap-2 mt-2 justify-center">
                {friend.tags?.map((tag, index) => (
                  <span key={index} className="bg-emerald-50 text-emerald-700 text-[10px] px-3 py-1 rounded-full font-bold uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-6 text-gray-500 italic text-sm">{`"${friend.bio}"`}</p>
            <p className="text-gray-400 text-xs mt-2 font-medium">Preferred: {friend.email}</p>
          </div>

          <div className="w-full mt-4 space-y-2">
            <button className="bg-white shadow-sm w-full py-3 border border-gray-100 rounded-xl flex items-center justify-center gap-2 font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              <RiNotificationSnoozeLine size={18} /> Snooze 2 Weeks
            </button>
            <button className="bg-white shadow-sm w-full py-3 border border-gray-100 rounded-xl flex items-center justify-center gap-2 font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              <PiArchive size={18} /> Archive
            </button>
            <button className="bg-white shadow-sm w-full py-3 border border-gray-100 rounded-xl flex items-center justify-center gap-2 font-semibold text-red-500 hover:bg-red-50 transition-colors">
              <FiTrash2 size={18} /> Delete
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatBox label="Days Since Contact" value={friend.days_since_contact} />
            <StatBox label="Goal (Days)" value={friend.goal} />
            <StatBox
              label="Next Due"
              value={new Date(friend.next_due_date).toLocaleDateString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric'
              })}
            />
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
              <h4 className="font-bold text-[#244d3f] text-lg">Relationship Goal</h4>
              <p className="text-gray-500 text-sm">Connect every <span className="font-bold text-slate-700">{friend.goal} days</span></p>
            </div>
            <button className="px-5 py-2 bg-gray-50 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-100">Edit</button>
          </div>

          <FriendActions friendId={friend.id} />
        </div>
      </div>
    </main>
  );
};

const StatBox = ({ label, value }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
    <p className="text-3xl font-bold text-[#244d3f]">{value}</p>
    <p className="text-[18px] text-gray-400 mt-2 tracking-wide font-medium">{label}</p>
  </div>
);

export default FriendDetailsPage;