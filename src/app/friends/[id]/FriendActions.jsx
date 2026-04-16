"use client";
import { useFriends } from "@/app/context/FriendContext";
import { PiPhoneCallBold, PiVideoCameraDuotone } from "react-icons/pi";
import { LuMessageSquareMore } from "react-icons/lu";
import { toast } from "react-toastify";

export const FriendActions = ({ friendId }) => {
  const { addInteraction, interactions = [] } = useFriends();

  const isActionDone = (type) => {
    if (!interactions) return false;
    return interactions.some(
      (log) => String(log?.friendId) === String(friendId) && log?.type === type
    );
  };

  const handleAction = (type) => {
    if (isActionDone(type)) {
      toast.error(`You already logged a ${type} for this friend!`);
    } else {
      addInteraction(friendId, type);
      toast.success(`${type} interaction added to timeline!`);
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