import React from "react";

import bg from "../assets/bg.jpg";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

const Bg = () => {
  return (
    <>
      <div className="absolute inset-0 z-[-6] bg-luminr-blue" />
      <div
        className="absolute inset-0 z-[-5] bg-cover bg-center bg-no-repeat pointer-events-none opacity-10"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      />

      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1] bg-gradient-to-t from-luminr-blue via-transparent to-luminr-blue" />
    </>
  );
};

export default Bg;
