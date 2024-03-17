import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

function ScrollReveal({ text1, text2, textColor, highlightColor }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((splitType) => {
      const text = new SplitType(splitType, {
        types: "chars, words",
      });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: splitType,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
        color: textColor,
      });
    });

    // for smooth animation scroll
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, [text1, text2, textColor]);

  return (
    <>
      <h4
        className={`font-kalnia text-5xl leading-normal font-medium reveal-type`}
      >
        <span className={`font-kalnia text-${textColor}`}>{text1}</span>{" "}
        <span className={`font-kalnia text-${highlightColor}`}>{text2}</span>
      </h4>
    </>
  );
}

export default ScrollReveal;
