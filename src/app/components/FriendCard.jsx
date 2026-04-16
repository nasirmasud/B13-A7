import Image from 'next/image';
import Link from 'next/link';

const FriendCard = ({ friend }) => {
  const statusColors = {
    "on-track": "bg-green-600 text-white",
    "almost due": "bg-yellow-400 text-black",
    "overdue": "bg-red-500 text-white",
  };

  return (
    <Link href={`/friends/${friend.id}`} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 text-center flex flex-col items-center">
      <div className="relative w-24 h-24 mb-4">
        <Image
          src={friend.picture}
          alt={friend.name}
          height={150}
          width={150}
          className="rounded-full object-cover border-4 border-gray-50 shadow-sm w-full h-full"
        />
      </div>

      <h3 className="text-lg font-bold text-gray-800">{friend.name}</h3>
      <p className="text-gray-400 text-sm mb-3">{friend.days_since_contact}d ago</p>

      <div className="flex flex-wrap gap-2 justify-center mb-5">
        {friend.tags.map((tag, idx) => (
          <span key={idx} className="bg-emerald-50 text-emerald-700 text-[10px] px-3 py-1 rounded-full font-medium uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      <div className={`mt-auto px-5 py-1.5 rounded-full text-xs font-bold capitalize ${statusColors[friend.status] || "bg-gray-100"}`}>
        {friend.status}
      </div>
    </Link>
  );
};

export default FriendCard;