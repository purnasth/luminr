import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Test from "./components/Test";
import TextReveal from "./components/Reveal";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <TextReveal text="Refine Your Digital Presence: Web Design & SEO Specializations" />


      <Test />
    </>
  );
};

export default App;
