import Link from 'next/link';
import { PiMaskHappyLight } from "react-icons/pi";

export default function NotFound() {
  return (
    <main className="h-[80vh] flex flex-col items-center justify-center bg-[#f8fafc] p-6 text-center">
      <div className="space-y-6 max-w-md -mt-20">
        <div className="space-y-2">
          <h1 className="text-8xl font-black text-[#244d3f] tracking-tighter">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Lost in Space?</h2>
          <p className="text-gray-500 font-medium leading-relaxed px-4">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to another universe.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center px-10 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Go Back Home
          </Link>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 opacity-10"></div>
    </main>
  );
}