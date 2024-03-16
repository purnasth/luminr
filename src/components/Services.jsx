import React from "react";
import LearnMore from "./LearnMore";
import web from "../assets/web.svg";
import seo from "../assets/seo.svg";
import ScrollReveal from "./ScrollReveal";
import { TbWorldSearch } from "react-icons/tb";

const Services = () => {
  return (
    <>
      <section className="h-full transition duration-1000 bg-luminr-blue">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center pb-40">
            <h2 className="text-2xl mb-4 font-rambla leading-7 tracking-wide text-gradient font-semibold">
              Services
            </h2>
            <ScrollReveal
              text1="Refine Your Digital Presence:"
              text2="Web Design & SEO Specializations"
              textColor="luminr-white"
              highlightColor="gradient"
            />
          </div>
          <div className="relative flex h-full w-full px-8 lg:space-x-10">
            <div className="h-full w-0 lg:w-[4%]" />
            <div className="w-full lg:w-[96%]">
              <div className="absolute left-0 hidden h-full w-[4%] justify-center lg:flex ">
                <div className="sticky top-24 z-30 hidden h-10 w-10 items-center justify-center rounded-full bg-gradient lg:flex -translate-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full">
                    <TbWorldSearch className="text-3xl p-px" />
                  </div>
                </div>
                <div className="absolute left-0 hidden h-full w-px items-center transition duration-100 lg:flex bg-gradient-to-t from-transparent via-[#989AA6]/[0.5] to-transparent" />
              </div>
              <div className="">
                <p className="pt-2">UI/UX</p>
                <h2 className="py-10 text-2xl font-bold md:text-4xl lg:text-6xl">
                  Web Design and Development
                </h2>
                <div className="relative grid grid-cols-1 gap-20 md:grid-cols-3">
                  <div>
                    <p className="text-base font-normal lg:text-xl lg:leading-relaxed">
                      Elevate your brand with captivating landing and product
                      pages. Our Web Design focuses on seamless user
                      experiences, creating visually stunning sites for enhanced
                      engagement.
                    </p>

                    <LearnMore />
                  </div>
                  <div
                    className="relative md:col-span-2"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <img
                      alt="Web Design and Development"
                      draggable="false"
                      loading="lazy"
                      decoding="async"
                      className="transition duration-500 blur-0 rounded-2xl object-contain p-10 select-none"
                      //   className="transition duration-500  scale-100 blur-0 mx-auto rounded-2xl object-contain shadow-2xl"
                      //   style={{ color: "transparent" }}
                      src={web}
                    />
                  </div>
                </div>
              </div>
              <div className="py-40">
                <p className="">SEO</p>
                <h2 className=" py-10 text-2xl font-bold md:text-4xl lg:text-6xl">
                  SEO for Shopify Stores
                </h2>
                <div className="relative grid grid-cols-1 gap-20 md:grid-cols-3">
                  <div
                    className="relative md:col-span-2"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <img
                      alt="SEO"
                      draggable="false"
                      loading="lazy"
                      decoding="async"
                      className="transition duration-500 blur-0 object-contain p-10 scale-90"
                      src={seo}
                    />
                  </div>
                  <div>
                    <p className="text-base font-normal md:text-xl lg:text-2xl lg:leading-normal">
                      Strategies tailored to the unique needs of e-commerce
                      stores and optimize for higher search rankings, ensuring
                      your products shine.
                    </p>

                    <LearnMore />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
