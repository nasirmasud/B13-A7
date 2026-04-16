"use client";
import { useFriends } from "@/app/context/FriendContext";
import { PiPhoneCallBold, PiVideoCameraDuotone } from "react-icons/pi";
import { LuMessageSquareMore } from "react-icons/lu";

export const FriendActions = ({ friendId }) => {
  // ১. নিশ্চিত হোন interactions ইমপোর্ট করা আছে
  const { addInteraction, interactions = [] } = useFriends();

  // ২. Safe checking যোগ করা হয়েছে (optional chaining ?. ব্যবহার করুন)
  const isActionDone = (type) => {
    if (!interactions) return false; // যদি interactions না থাকে তবে false
    return interactions.some(
      (log) => String(log?.friendId) === String(friendId) && log?.type === type
    );
  };

  const handleAction = (type) => {
    if (!isActionDone(type)) {
      addInteraction(friendId, type);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
      <h4 className="font-bold text-[#244d3f] text-lg mb-6 text-left">Quick Check-In</h4>
      <div className="grid grid-cols-3 gap-4">

        <ActionButton
          onClick={() => handleAction("Call")}
          icon={<PiPhoneCallBold size={24} />}
          label="Call"
          disabled={isActionDone("Call")}
        />

        <ActionButton
          onClick={() => handleAction("Text")}
          icon={<LuMessageSquareMore size={24} />}
          label="Text"
          disabled={isActionDone("Text")}
        />

        <ActionButton
          onClick={() => handleAction("Video")}
          icon={<PiVideoCameraDuotone size={24} />}
          label="Video"
          disabled={isActionDone("Video")}
        />

      </div>
    </div>
  );
};

// এই ActionButton কম্পোনেন্টটিও আপনার ফাইলে থাকতে হবে
const ActionButton = ({ icon, label, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all gap-3 w-full border
      ${disabled
        ? "bg-gray-50 border-gray-100 opacity-50 cursor-not-allowed text-gray-400 grayscale"
        : "bg-gray-50 border-transparent hover:bg-emerald-50 hover:text-emerald-600 text-gray-600 hover:border-emerald-100"
      }`}
  >
    <div className="transition-transform">
      {icon}
    </div>
    <span className="font-bold text-sm">{disabled ? "Done" : label}</span>
  </button>
);