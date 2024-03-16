import React from "react";
import ScrollReveal from "./ScrollReveal";

const Portfolio = () => {
  return (
    <>
      <section className="h-full transition duration-1000 bg-luminr-blue">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center pb-40">
            <h2 className="text-2xl mb-4 font-rambla leading-7 tracking-wide text-gradient font-semibold">
              Portfolio
            </h2>
            <ScrollReveal
              text1="Some Brands We've"
              text2="Transformed Digitally"
              textColor="luminr-white"
              highlightColor="gradient"
            />
          </div>
        </div>
      </section>

      <section className="h-screen"></section>
    </>
  );
};

export default Portfolio;
