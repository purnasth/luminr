import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import mobileLogo from "../assets/mobile_logo.svg";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        showButton ? "scale-100 translate-y-0" : "scale-0 translate-y-20"
      } fixed bottom-8 right-8 backdrop-blur-md bg-gradient-to-br from-sky-200/20 via-transparent to-luminr-orange/30 border-2 border-luminr-orange/30 text-luminr-orange p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:bg-luminr-orange hover:text-luminr-blue`}
      onClick={scrollToTop}
    >
      <HiOutlineArrowNarrowRight className="w-6 h-6 -rotate-90 animate-arrow-up" />
      {/* <img src={mobileLogo} alt="" className="w-8 h-8 object-contain animate-bounce"/> */}
    </button>
  );
};

export default BackToTopButton;
