import { HiPlus } from "react-icons/hi";

const Hero = () => {
  return (
    <>
      <div className="text-center pt-20 pb-8 px-4">
        <h1 className="text-5xl md:text-5xl font-bold text-[#1e293b] mb-4 pb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-[16px]">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#244d3f] hover:bg-[#1a3a30] text-white px-6 py-3 rounded-sm flex items-center gap-2 font-semibold transition-all shadow-md active:scale-95">
          <HiPlus className="text-xl" />
          Add a Friend
        </button>
      </div>
    </>
  );
};

export default Hero;