import FriendCard from './FriendCard';
// সরাসরি JSON ফাইলটি ইমপোর্ট করুন
import friendsData from '@/public/friends.json';

export default async function FriendsSection() {
  // fetch করার কোনো দরকার নেই, সরাসরি ডাটা ব্যবহার করুন
  const friends = friendsData;

  return (
    <section className="py-8 md:py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center md:text-left">
        Your Friends
      </h2>

      {friends.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No friends found.</p>
      )}
    </section>
  );
}