"use client"

import Link from "next/link";
import { LuClock3 } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { RiHome2Line } from "react-icons/ri";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname()
  const isActive = path => pathName === path

  const activeClass = "bg-[#244d3f] text-white hover:bg-[#1a3a30] px-4 py-2 rounded-sm flex items-center gap-2 font-semibold";
  const inactiveClass = "border border-transparent bg-[#f8fafc] hover:border-[#244d3f] px-4 py-2 rounded-lg flex items-center gap-2 font-medium text-slate-500 transition-all";


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
              className={isActive("/") ? activeClass : inactiveClass}
            >
              <RiHome2Line className="text-xl" />
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/timeline"
              className={isActive("/timeline") ? activeClass : inactiveClass}
            >
              <LuClock3 className="text-xl" />
              Timeline
            </Link>
          </li>

          <li>
            <Link
              href="/stats"
              className={isActive("/stats") ? activeClass : inactiveClass}
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