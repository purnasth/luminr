import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
