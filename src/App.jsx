import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Benefits from "./components/Benefits";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      {/* <Test /> */}
      <Benefits />
    </>
  );
};

export default App;
