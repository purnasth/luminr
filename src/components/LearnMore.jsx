import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const LearnMore = () => {
  return (
    <>
      <button class="group relative rounded-xl p-px text-base font-semibold leading-6 shadow-lg shadow-luminr-white/5 text-luminr-white mt-10">
        <span class="absolute inset-0 overflow-hidden">
          <span class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(219,99,50,1)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div class="relative z-10 rounded-xl backdrop-blur-md bg-gradient-to-b from-luminr-blue/20 to-luminr-orange/5 px-8 py-4 ring-1 ring-luminr-white/20 flex items-center space-x-2 hover:bg-luminr-blue transition-all duration-500">
          <span className="text-base transition-all duration-300 ease-linear group-hover:text-gradient">
            Learn More
          </span>
          <HiOutlineArrowNarrowRight className="text-xl group-hover:translate-x-2 transition duration-200 group-hover:text-luminr-orange" />
        </div>
        <span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-[rgb(219,99,50)] to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </>
  );
};

export default LearnMore;
