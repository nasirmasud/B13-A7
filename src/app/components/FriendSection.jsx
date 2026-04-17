import FriendCard from './FriendCard';

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_BASE_URL) return `https://${process.env.NEXT_PUBLIC_BASE_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

export default async function FriendsSection() {
  const baseUrl = getBaseUrl();

  let friends = [];
  try {
    const res = await fetch(`${baseUrl}/friends.json`, {
      cache: "no-store",
    });

    if (res.ok) {
      friends = await res.json();
    }
  } catch (error) {
    console.error("Fetch failed during build, using empty array.");
  }

  return (
    <section className="py-8 md:py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center md:text-left">Your Friends</h2>

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