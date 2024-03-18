import React from "react";
import { LuMouse } from "react-icons/lu";

const ScrollDownIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="animate-bounce">
        <LuMouse className="text-luminr-white h-8 w-8" />
      </div>
      <p className="text-luminr-white mt-2">Scroll down</p>
    </div>
  );
};

export default ScrollDownIcon;
