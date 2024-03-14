import React from "react";
import LearnMore from "./LearnMore";
import web from "../assets/web.svg";
import seo from "../assets/seo.svg";
import ScrollReveal from "./ScrollReveal";

const Services = () => {
  return (
    <>
      <section className="h-full py-20 transition duration-1000 bg-luminr-blue">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center pb-40">
            <h2 className="text-4xl mb-8 font-inria uppercase leading-tight tracking-wide text-gradient">
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
                    <span
                      className="text-luminr-white"
                      style={{ transform: "none" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M28.6263 30.0404C29.0168 30.431 29.6499 30.431 30.0404 30.0404C30.4309 29.6499 30.4309 29.0168 30.0404 28.6263L28.6263 30.0404ZM26.2263 27.6404L28.6263 30.0404L30.0404 28.6263L27.6404 26.2263L26.2263 27.6404ZM29.1333 22.7334C29.1333 19.1987 26.268 16.3334 22.7333 16.3334V18.3334C25.1633 18.3334 27.1333 20.3034 27.1333 22.7334H29.1333ZM22.7333 16.3334C19.1987 16.3334 16.3333 19.1987 16.3333 22.7334H18.3333C18.3333 20.3034 20.3033 18.3334 22.7333 18.3334V16.3334ZM16.3333 22.7334C16.3333 26.268 19.1987 29.1334 22.7333 29.1334V27.1334C20.3033 27.1334 18.3333 25.1634 18.3333 22.7334H16.3333ZM22.7333 29.1334C26.268 29.1334 29.1333 26.268 29.1333 22.7334H27.1333C27.1333 25.1634 25.1633 27.1334 22.7333 27.1334V29.1334Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M29.3333 16C29.3333 8.63616 23.3637 2.66663 16 2.66663C8.63619 2.66663 2.66666 8.63616 2.66666 16C2.66666 23.3637 8.63619 29.3333 16 29.3333"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>
                        <path
                          d="M26.6667 7.59861C25.4204 7.68844 23.8241 8.17095 22.7172 9.60365C20.718 12.1914 18.7187 12.4074 17.3859 11.5448C15.3865 10.2509 17.0667 8.15511 14.7201 7.01616C13.1908 6.27385 12.9776 4.25389 13.8288 2.66663"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M2.66666 14.6666C3.68332 15.5494 5.10727 16.3576 6.78498 16.3576C10.2512 16.3576 10.9445 17.0198 10.9445 19.669C10.9445 22.3182 10.9445 22.3182 11.6377 24.305C12.0887 25.5974 12.2463 26.8898 11.3475 28"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
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
