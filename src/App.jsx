import React from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
