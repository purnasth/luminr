import React from "react";
import heroSVG from "../assets/hero.svg";
import { heroContents } from "../constants/data.js";
import { CiUnlock } from "react-icons/ci";
import { BsUnlock } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <section className="flexCenter h-screen bg-luminr-blue">
        <div className="absolute z-[3] -left-2/3 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full orange__gradient" />

        <div className="container mt-16">
          <div className="flexCenter gap-12">
            <div className="flex-1">
              {heroContents.map((content, index) => {
                const words = content.title.split(" ");
                return (
                  <div key={index} className="w-full">
                    <h2 className="text-5xl leading-normal font-bold mb-4">
                      {words.shift()}{" "}
                      <BsUnlock className="inline-block text-4xl text-luminr-orange mb-2" />{" "}
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
            </div>

            <div className="flex-1 relative">
              <img
                src={heroSVG}
                alt=""
                className="w-full h-full object-contain z-20 scale-90 select-none pointer-events-none "
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
