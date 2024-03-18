import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import BackToTopButton from "./components/BackToTopButton";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Footer />
      <BackToTopButton />
    </Router>
  );
};

export default App;
