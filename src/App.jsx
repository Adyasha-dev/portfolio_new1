import React from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section className="md:px-32  md:py-4 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </section>
      <Footer />
    </>
  );
}

export default App;
