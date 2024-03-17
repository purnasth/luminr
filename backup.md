```jsx
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
    speed: 500,
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

  return (
    <section id="rooms" className="bg-luminr-blue px-0">
      <div className="container mx-auto">
        <div className="flexCenter p-4">
          <div className="flex items-center justify-center w-full">
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
            {/* <div className="button flex items-center justify-center gap-4">
<button onClick={handlePrevSlide} className="group bg-gradient py-1 px-5 rounded-full text-luminr-blue font-bold shadow-md shadow-luminr-orange hover:shadow-lg hover:shadow-luminr-white/10 transition-all duration-300 ease-in-out">
<HiOutlineArrowNarrowLeft className="group-hover:scale-x-[1.25] group-hover:-translate-x-2 transition-all duration-300 ease-in-out" />
</button>
<button
                onClick={handleNextSlide}
                className="group bg-gradient py-1 px-5 rounded-full text-luminr-blue font-bold shadow-md shadow-luminr-orange hover:shadow-lg hover:shadow-luminr-white/10 transition-all duration-300 ease-in-out"
              >
<HiOutlineArrowNarrowRight className="group-hover:scale-x-[1.25] group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
</button>
</div>  */}
          </div>
        </div>
      </div>
      <div className="portfolio mt-10 mx-0">
        <Slider {...settings} ref={sliderRef}>
          {portfolioContents[0].portfolio.map((works) => (
            <div
              key={works.id}
              className="p-6 border-0 outline-0 focus:border-0 rounded-xl"
            >
              <img
                src={works.image}
                alt={works.title}
                className="w-full h-[70vh] rounded-xl object-cover border-0 outline-0 focus:border-0 focus:outline-none"
              />
              <div className="flex items-center justify-between gap-4 py-4 p-2">
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
                {/* <p className="text-base">{works.description}</p>  */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
```

## To add scroll smooth to the navbar links, create a custom hook called useSmoothScroll.jsx

```jsx
import React, { useState } from "react";
import luminr from "../assets/logo.svg";
import { navLinks } from "../constants/data";
import { HiOutlineChevronDown } from "react-icons/hi"; // Importing the dropdown icon
import Appointment from "./Appointment";
import useSmoothScroll from "./useSmoothScroll"; // Import the custom hook

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(null);
  const smoothScrollTo = useSmoothScroll(); // Use the custom hook

  const toggleSubMenu = (index) => {
    setShowSubMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <nav className="fixed top-4 w-full z-50">
      <div className="container">
        <div className="w-full flex items-center justify-between backdrop-blur-md border border-luminr-white/[0.16] px-4 py-2 rounded-full ">
          <a href="/">
            <img
              src={luminr}
              alt="Luminr.co"
              className="w-24 h-auto object-contain"
            />
          </a>
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className="group relative"
                onMouseEnter={() => toggleSubMenu(index)}
                onMouseLeave={() => toggleSubMenu(null)}
              >
                <a
                  href={link.url} // Keep the href attribute
                  className="z-50 text-luminr-white hover:text-white text-lg font-medium flex items-center relative"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(link.id); // Use the custom hook to enable smooth scrolling
                  }}
                >
                  {link.title}
                  {link.sublinks && (
                    <HiOutlineChevronDown className="text-sm ml-1" />
                  )}
                </a>
                {/* Submenu code */}
              </li>
            ))}
          </ul>

          <Appointment />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

```jsx
import { useState, useEffect } from "react";

const useSmoothScroll = () => {
  const [elementId, setElementId] = useState(null);

  useEffect(() => {
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        const offsetTop = element.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [elementId]);

  const smoothScrollTo = (id) => {
    setElementId(id);
  };

  return smoothScrollTo;
};

export default useSmoothScroll;
```
