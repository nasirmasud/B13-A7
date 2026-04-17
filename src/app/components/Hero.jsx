import { HiPlus } from "react-icons/hi";

const Hero = () => {
  return (
    <>
      <div className="text-center pt-12 md:pt-20 pb-8 px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1e293b] mb-4 pb-4 leading-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base lg:text-lg">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
      </div>
      <div className="flex justify-center px-4">
        <button className="w-full sm:w-auto bg-[#244d3f] hover:bg-[#1a3a30] text-white px-8 py-3.5 md:py-3 rounded-sm flex justify-center items-center gap-2 font-semibold transition-all shadow-md active:scale-95 text-base md:text-lg">
          <HiPlus className="text-xl" />
          Add a Friend
        </button>
      </div>
    </>
  );
};

export default Hero;