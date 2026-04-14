import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { LuClock3 } from "react-icons/lu";
import { GoGraph } from "react-icons/go";

const NavBar = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm container mx-auto'>
      <div className='flex-1'>
        <Link href="/" className='btn btn-ghost text-black font-extrabold text-2xl'>
          Keen<span className="text-[#244d3f] font-semibold -ml-1">Keeper</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 text-slate-500 gap-2 items-center'>

          <li>
            <Link
              href="/"
              className="bg-[#244d3f] text-white hover:bg-[#1a3a30] px-4 py-2 rounded-lg flex items-center gap-2 font-semibold"
            >
              <AiOutlineHome className="text-xl" />
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/timeline"
              className="hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 font-medium"
            >
              <LuClock3 className="text-xl" />
              Timeline
            </Link>
          </li>

          <li>
            <Link
              href="/stats"
              className="hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 font-medium"
            >
              <GoGraph className="text-xl" />
              Stats
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default NavBar;