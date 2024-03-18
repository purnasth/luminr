import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollReveal from "./ScrollReveal";
import { portfolioContents } from "../constants/data.js";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import Bg from "./Bg";

const Portfolio = () => {
  const sliderRef = useRef(null);

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1.67,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleWheel = (event) => {
    event.stopPropagation();

    const container = event.currentTarget;
    const delta = Math.max(-1, Math.min(1, event.deltaY));
    container.scrollLeft -= delta * 40;
  };

  return (
    <section id="portfolio" className="relative px-0">
      <Bg />
      <div className="sm:container">
        <div className="flexCenter p-4">
          <div className="flex items-center justify-center w-full flex-col">
            <div className="max-w-5xl mx-auto text-center pb-10">
              <h2 className="text-2xl mb-4 font-rambla leading-7 tracking-wide text-gradient font-semibold">
                {portfolioContents[0].title}
              </h2>
              <ScrollReveal
                text1="Some Brands We've"
                text2="Transformed Digitally"
                textColor="luminr-white"
                highlightColor="gradient"
              />
            </div>
            <div className="button flex items-center justify-center gap-4">
              <button
                onClick={handlePrevSlide}
                className="group bg-gradient py-1 px-5 rounded-full text-luminr-blue font-bold shadow-md shadow-luminr-orange hover:shadow-lg hover:shadow-luminr-white/10 transition-all duration-300 ease-in-out"
              >
                <HiOutlineArrowNarrowLeft className="group-hover:scale-x-[1.25] group-hover:-translate-x-2 transition-all duration-300 ease-in-out" />
              </button>
              <button
                onClick={handleNextSlide}
                className="group bg-gradient py-1 px-5 rounded-full text-luminr-blue font-bold shadow-md shadow-luminr-orange hover:shadow-lg hover:shadow-luminr-white/10 transition-all duration-300 ease-in-out"
              >
                <HiOutlineArrowNarrowRight className="group-hover:scale-x-[1.25] group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio mt-10 mx-0">
        <Slider {...settings} ref={sliderRef}>
          {portfolioContents[0].portfolio.map((works) => (
            <div
              key={works.id}
              className="md:p-6 border-0 outline-0 focus:border-0 rounded-xl"
            >
              <div
                className="portfolio-image overflow-x-auto max-h-[35vh] lg:max-h-[45vh] xl:max-h-[70vh] rounded-xl relative cursor-all-scroll border-0 outline-0 focus:border-0 focus:outline-none"
                // style={{ maxWidth: "100%", maxHeight: "70vh" }}
                onWheel={handleWheel}
              >
                <img
                  src={works.image}
                  alt={works.title}
                  className="w-full rounded-xl object-cover border-0 outline-0 focus:border-0 focus:outline-none"
                  draggable="true"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-4 mt-4 py-4 p-2 mb-6 md:pb-2">
                <div>
                  <h3 className="text-2xl">{works.title}</h3>
                </div>
                <a
                  href={works.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 group text-gradient py-1 px-5 rounded-full font-bold transition-all duration-300 ease-in-out"
                >
                  View website
                  <HiOutlineArrowNarrowRight className="text-xl text-luminr-orange group-hover:scale-x-[1.25] group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
