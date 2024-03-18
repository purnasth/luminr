import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialContents } from "../constants/data.js";
import ScrollReveal from "./ScrollReveal.jsx";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import Bg from "./Bg.jsx";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials" className="relative pb-40">
      <Bg />
      {/* <div
        className="rocket absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${rocket})`,
          backgroundSize: "200px", // Set background size to 200px width
          backgroundRepeat: "repeat", // Repeat the background
          backgroundClip: "padding-box", // Include padding in background but not in content or border
          padding: "20px", // Add 20px padding between each rocket pattern
          width: "100%", // Ensure the rocket covers the entire section horizontally
          
        }}
      /> */}
      <div className="sm:container mx-auto">
        <div className="flexCenter">
          <div className="flex items-center justify-between flex-col md:flex-row w-full">
            <div className="mb-20">
              <h2 className="text-2xl mb-4 font-rambla leading-7 tracking-wide text-gradient font-semibold">
                Testimonials
              </h2>
              <ScrollReveal
                text1="Valued Clients Feedback"
                text2=""
                textColor="gradient"
                highlightColor="luminr-white"
              />
              <p className="text-base py-4">
                Your appreciation fuels our dedication. Thanks for trusting us
                with your web development and SEO needs.
              </p>
            </div>

            <div className="-mt-10 flex items-center justify-center gap-8 pr-4">
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
        <div className="mt-10">
          <Slider
            {...settings}
            ref={sliderRef}
            className="border border-white/10 px-0 pt-0 pb-4 shadow-xl shadow-sky-500/[0.05] hover:shadow-lg hover:shadow-luminr-white/10 bg-luminr-blue/20 backdrop-blur-md transition-all duration-300 ease-in-out"
          >
            {testimonialContents[0].testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-4">
                <div className="flex items-center justify-between flex-col gap-8 md:p-6 ">
                  <div>
                    <img
                      loading="lazy"
                      decoding="async"
                      className="w-96 h-52 object-contain rounded-full filter"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                  </div>
                  <div className="flex justify-center flex-col text-luminr-white/90">
                    <p className="text-xl">" {testimonial.content} "</p>
                    <div className="flex md:items-center justify-between flex-col md:flex-row gap-2 text-luminr-white">
                      <h4 className="text-xl font-medium tracking-wide mt-4 uppercase">
                        - {testimonial.author}
                      </h4>
                      <p className="text-base md:mt-2 mr-8">
                        - {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
