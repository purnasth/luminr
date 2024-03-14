import React from "react";
import ScrollReveal from "./ScrollReveal";
import { benefitsData } from "../constants/data";

const Benefits = () => {
  return (
    <div className="bg-luminr-blue">
      <div className="relative container overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-10 flex h-screen justify-center">
          <div className="hidden h-full w-full grid-cols-3 gap-3.5 lg:grid">
            <div className="border-x border-black/5" />
            <div className="border-x border-black/5" />
            <div className="border-x border-black/5" />
          </div>
        </div>
        <div className="mb-20">
          <h2 className="text-2xl mb-4 font-rambla leading-7 tracking-wide text-gradient font-semibold">
            Benefits
          </h2>
          <ScrollReveal
            text1="Skyrocket Your Business:"
            text2="Let's Craft Your Digital Success Together"
            textColor="gradient"
            highlightColor="luminr-white"
          />
        </div>

        <div className="mx-auto hidden grid-cols-1 items-start md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="w-full grid md:gap-10">
              <div className="group relative rounded-xl border border-white/10 bg-gray-900 px-8 pt-0 pb-4 shadow-2xl shadow-sky-500 md:shadow-none">
                <div
                  className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(650px at ${
                      index === 0
                        ? "324.6px 163.925px"
                        : index === 1
                        ? "346.938px 177.925px"
                        : "313.275px 128.925px"
                    }, rgba(14, 165, 233, 0.15), transparent 80%)`,
                  }}
                />
                <div className="w-full h-[35rem]">
                  <img src={benefit.image} alt={benefit.title} />
                  <p className="text-base leading-7 text-luminr-orange">
                    {benefit.title}
                  </p>
                  <h4 className="font-rambla mt-2 gap-x-2 text-3xl font-bold tracking-tight text-gradient">
                    {benefit.caption}
                  </h4>
                  <p className="mt-4 my-3 text-base leading-7 text-luminr-white">
                    {benefit.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
