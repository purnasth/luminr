import React, { useEffect, useState } from "react";

const TextReveal = ({ text }) => {
  const [availableToReveal, setAvailableToReveal] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerStart, setContainerStart] = useState(0);
  const [containerEnd, setContainerEnd] = useState(0);
  const [words, setWords] = useState([]);
  const [textContainerContent, setTextContainerContent] = useState(null);
  const [pixelsPerWord, setPixelsPerWord] = useState(0);

  useEffect(() => {
    const container = document.getElementById("reveal");
    const textContainer = container.querySelector(".text");
    const textContainerContent = textContainer.querySelector("p");
    const words = textContainer.querySelectorAll("span");

    const handleResize = () => {
      fitText();
      setContainerStart(container.getBoundingClientRect().top);
      setContainerHeight(container.clientHeight);
      setContainerEnd(container.getBoundingClientRect().bottom);
    };

    const fitText = () => {
      let fontSize = 52;

      while (
        textContainerContent.offsetWidth > textContainer.offsetWidth ||
        textContainerContent.offsetHeight > textContainer.offsetHeight
      ) {
        fontSize--;

        if (fontSize <= 10) {
          break;
        }

        textContainerContent.style.fontSize = fontSize + "px";
      }
    };

    const revealActiveWords = () => {
      const currentScrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      let activeWords;
      const cointainerCurrentScroll = currentScrollPosition - containerStart;

      if (currentScrollPosition > containerEnd) {
        activeWords = words.length;
      } else if (currentScrollPosition < containerStart) {
        activeWords = 0;
      } else {
        setAvailableToReveal(true);
        activeWords = Math.round(cointainerCurrentScroll / pixelsPerWord);
      }

      if (availableToReveal) {
        words.forEach((word, index) => {
          if (activeWords > index) {
            word.style.opacity = 1;
          } else {
            word.style.opacity = 0.1;
          }
        });
      }

      if (
        currentScrollPosition > containerEnd ||
        currentScrollPosition < containerStart
      ) {
        setAvailableToReveal(false);
      }
    };

    setContainerStart(container.getBoundingClientRect().top);
    setContainerHeight(container.clientHeight);
    setContainerEnd(container.getBoundingClientRect().bottom);
    setWords(words);
    setTextContainerContent(textContainerContent);
    setPixelsPerWord(Math.round(containerHeight / words.length));

    fitText();
    revealActiveWords();

    window.addEventListener("scroll", revealActiveWords);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", revealActiveWords);
      window.removeEventListener("resize", handleResize);
    };
  }, [availableToReveal, pixelsPerWord, text]);

  const wordsArray = text.split(" ");

  return (
    <div className="bg-gradient-to-b from-luminr-blue to-gray-900 text-white">
      <div className="relative container h-[200vh]">
        <div id="reveal" className="sticky top-0 h-[50%] flex items-center">
          <div className="text text-center mx-auto">
            <p className="font-semibold tracking-wide leading-relaxed text-5xl">
              {wordsArray.map((word, index) => (
                <span key={index}>{word} </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextReveal;
