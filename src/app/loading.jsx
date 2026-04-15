
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
      <div className="flex flex-col items-center gap-4">

        <span className="loading loading-spinner loading-lg text-primary"></span>

        <p className="text-xl font-medium text-gray-600 animate-pulse">
          Loading KeenKeeper...
        </p>

      </div>
    </div>
  );
}