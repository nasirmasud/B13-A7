import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';
import { PiInstagramLogoFill } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#1D4A3A] text-white pt-20 flex flex-col">
      <div>
        <h2 className="text-6xl font-semibold mb-4">
          KeenKeeper
        </h2>
        <p className="text-[16px] text-gray-200">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
      </div>
      <nav>
        <h6 className="footer-title text-xl font-semibold text-white normal-case opacity-100">
          Social Links
        </h6>
        <div className="grid grid-flow-col gap-5">
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
            <PiInstagramLogoFill className="text-2xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
            <FaSquareFacebook className="text-2xl" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-gray-200 transition-colors">
            <FaXTwitter className="text-2xl" />
          </a>
        </div>
      </nav>
      <nav className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-white/20 text-md font-light text-gray-200 gap-4 py-7">
        <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
        <div className="grid grid-flow-col gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;