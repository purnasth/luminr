import React, { useState } from "react";
import { faqs } from "../constants/data";
import ScrollReveal from "./ScrollReveal";
import { FaPlus } from "react-icons/fa6";
import Bg from "./Bg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Initialize with 0

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section id="faq" className="relative">
        <Bg />
        <div className="sm:container max-w-7xl z-10">
          <div className="max-w-5xl mx-auto text-center pb-16 md:pb-40">
            <h2 className="text-2xl mb-4 font-rambla leading-7 tracking-wide text-gradient font-semibold">
              FAQ
            </h2>
            <ScrollReveal
              text1="Got Questions?"
              text2="We Have Answers!"
              textColor="gradient"
              highlightColor="luminr-white"
            />
          </div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border-2 border-luminr-white/20 bg-luminr-blue/10 backdrop-blur-md rounded-3xl"
            >
              <div
                className="group py-4 px-6 rounded shadow cursor-pointer flex justify-between items-center relative overflow-hidden hover:text-luminr-orange transition-all duration-500"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-rambla text-base md:text-2xl font-semibold">
                  {faq.question}
                </h3>
                <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-luminr-white/50 to-transparent translate-y-8" />
                <FaPlus
                  className={`w-6 h-6 transition-transform transform group-hover:rotate-[360deg] ${
                    openIndex === index ? "rotate-[135deg]" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 scale-100" : "max-h-0 scale-0"
                }`}
              >
                <p
                  className="text-base md:text-xl text-luminr-white/70 py-4 px-6"
                  dangerouslySetInnerHTML={{
                    __html: faq.answer.replace(/\n/g, "<br />"),
                  }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
