// src/components/ProgressAnimation.js
import React, { useEffect } from "react";
import gsap from "gsap";

const ProgressAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      gsap.to(".progress-bar", {
        width: `${scrollPercentage}%`,
        duration: 0.3,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-none">
      <div className="progress-bar h-full bg-luminr-orange" style={{ width: '0%' }}></div>
    </div>
  );
};

export default ProgressAnimation;
