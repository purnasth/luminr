import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      {/* <Test /> */}
      <Benefits />
      <Portfolio />
      <Testimonials />
    </>
  );
};

export default App;
