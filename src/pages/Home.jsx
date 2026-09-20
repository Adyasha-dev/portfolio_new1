/* eslint-disable no-unused-vars */
import React from "react";
import adya from "../assets/adya.png";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="w-full h-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]  ">
      <div className="w-full h-full md:h-[40vh]  lg:h-screen flex flex-col md:flex-row  justify-between   rounded-lg ">
        {/*Left side div */}
        <div className="  w-full md:w-1/2 h-full  mt-3 flex flex-col  justify-center items-center ">
          <h1 className="font-bold text-4xl lg:text-8xl text-white">Hi</h1>
          <h2 className=" text-blue-400 text-3xl lg:text-7xl font-bold mt-3 ">
            <Typewriter
              variance={0.8}
              backspace="word"
              cursorBlinkSpeed={2}
              words={["I'am", "Adyasha", "Web Developer", "Frontend Developer"]}
              loop={true}
              cursorStyle="|"
              cursor
              delaySpeed={2000}
              typeSpeed={80}
              deleteSpeed={50}
            ></Typewriter>
          </h2>
          <h3 className=" text-2xl lg:text-4xl font-bold  mt-3 text-white">
            Web Developer
          </h3>
          <p className=" text-sm lg:text-lg font-semibold mt-3  text-white  max-w-md text-center">
            I design and develop modern, responsive, and user-friendly websites.
          </p>
          <span className="flex gap-5 mt-3">
            {" "}
            <Link to="contact" smooth={true} duration={500}>
              {" "}
              <button className="px-8 py-2 lg:px-10 lg:py-3 bg-blue-900 font-semibold hover:scale-105 transition-transform duration-300 rounded-md ">
                Hire me
              </button>{" "}
            </Link>
            <button className="px-8 py-2 lg:px-10 lg:py-3 bg-blue-900 font-semibold hover:scale-105 transition-transform duration-300 rounded-md ">
              <Link to="portfolio">view Portfolio</Link>
            </button>
          </span>
        </div>
        {/*Right side div */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center my-3">
          <motion.img
            src={adya}
            alt="adyasha"
            className="w-40 h-40 md:w-52 md:h-52 lg:w-[30rem] lg:h-[30rem] aspect-square rounded-full shadow-lg object-cover border-4 border-sky-800"
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
