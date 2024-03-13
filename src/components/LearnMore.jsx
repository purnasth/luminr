import React from "react";

const LearnMore = () => {
  return (
    <>
      {" "}
      <button class="group relative rounded-xl p-px text-base font-semibold leading-6 shadow-2xl shadow-luminr-white/[0.1] text-luminr-white mt-10">
        <span class="absolute inset-0 overflow-hidden">
          <span class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(219,99,50,1)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div class="relative z-10 rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-900 px-8 py-4 ring-1 ring-white/10 flex items-center space-x-2">
          <span className="text-base transition-all duration-300 ease-linear group-hover:text-gradient">
            Learn More
          </span>
          <span className="inline-block group-hover:translate-x-2 transition duration-200 group-hover:text-luminr-orange">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className="mt-0.5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              ></path>
            </svg>
          </span>
        </div>
        <span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-[rgb(219,99,50)] to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </>
  );
};

export default LearnMore;
