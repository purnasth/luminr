import React from "react";
import heroSVG from "../assets/hero.svg";
import { heroContents } from "../constants/data.js";
import { BsUnlock } from "react-icons/bs";
import Bg from "./Bg.jsx";

const Hero = () => {
  return (
    <>
      <section className="flexCenter h-screen relative">
        <Bg />
        <div className="absolute z-[3] -left-2/3 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full orange__gradient" />

        <div className="sm:container mt-28">
          <div className="flexCenter gap-2 lg:gap-12 flex-col-reverse lg:flex-row">
            <div className="flex-1">
              {heroContents.map((content, index) => {
                const words = content.title.split(" ");
                return (
                  <div key={index} className="w-full">
                    <h2 className="clamp-h2 leading-normal font-bold mb-4">
                      {words.shift()}{" "}
                      <BsUnlock className="inline-block text-xl md:text-4xl text-luminr-orange mb-2" />{" "}
                      {words.slice(0, 2).join(" ")}{" "}
                      <span className="text-gradient font-kalnia">
                        {words[2]} {words[3]}{" "}
                      </span>
                      {words.slice(4).join(" ")}{" "}
                    </h2>
                    <p className="w-4/5 my-8">{content.subtitle}</p>
                  </div>
                );
              })}
              <button className="group relative rounded-full p-px text-xl font-semibold leading-6 shadow-xl shadow-zinc-950 text-luminr-white">
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(219,99,50,1)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative z-10 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-900 px-6 py-4 ring-1 ring-white/10 flex items-center space-x-2">
                  <span>Appointment</span>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-[rgb(219,99,50)] to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button>
            </div>

            <div className="flex-1 relative mt-5 md:mt-0">
              <img
                src={heroSVG}
                alt="Hero"
                draggable="false"
                loading="lazy"
                decoding="async"
                className="object-contain z-20 select-none w-screen p-6 md:p-0 md:scale-75 lg:scale-100"
              />
              {/* <div className="absolute top-0 z-[0] w-2/5 h-1/3 pink__gradient" /> */}
              {/* <div className="absolute bottom-40 z-[1] w-3/4 h-3/4 white__gradient" /> */}
              <div className="absolute top-20 right-28 z-[0] w-1/2 h-1/2 opacity-50 dark__gradient" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
