import React from "react";
import aboutph from "../assets/aboutph.png";
import { FaLaptopCode, FaServer, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section
      className=" w-full h-full  bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]  "
      id="about"
    >
      <h1 className=" text-center font-bold text-white text-4xl  md:text-3xl lg:text-6xl py-4 lg:py-10">
        About
      </h1>
      {/*left Div */}
      <div className="w-full h-full flex flex-col lg:flex-row gap-20 p-6 ">
        <div className="h-full w-full  lg:w-2/5  flex justify-center items-center">
          <img src={aboutph} alt="About" />
        </div>
        {/* right div */}
        <div className="h-full w-full  lg:w-3/5    space-y-4 ">
          <div className=" flex flex-row text-blue text-2xl bg-gradient-to-r from-blue-900 to-transparent  rounded-xl shadow-lg hover:shadow-blue-500/30 transition duration-300  p-6 gap-4 ">
            <FaLaptopCode className="text-blue-400 text-4xl" />

            <div>
              <p className="font-bold text-white  text-2xl  md:text-3xl ">
                Frontend Developer
              </p>
              <p className=" text-lg text-white max-w-4xl">
                I specialize in building responsive and optimized web
                applications using HTML, CSS, JavaScript, React, and Tailwind
                CSS. My focus is on creating clean, efficient, and user-friendly
                interfaces that enhance the overall user experience.
              </p>
            </div>
          </div>
          <div className=" flex flex-row  gap-4 text-blue text-2xl bg-gradient-to-r from-blue-900 to-transparent   rounded-xl shadow-lg hover:shadow-blue-500/30 transition duration-300 p-6 ">
            <FaServer className="text-green-400 text-4xl" />

            <div>
              <p className="font-bold text-white text-2xl md:text-3xl ">
                Backend Developer
              </p>
              <p className="text-sm md:text-lg text-white max-w-4xl">
                I have hands-on experience with Node.js, Express, MongoDB, and
                SQL, enabling me to design and develop robust, scalable, and
                secure back-end systems. I enjoy solving complex problems and
                optimizing APIs for performance.
              </p>
            </div>
          </div>

          <div className=" flex flex-row text-blue text-2xl bg-gradient-to-r from-blue-900 to-transparent   hover:shadow-blue-500/30 gap-4 rounded-lg shadow-lg p-6 ">
            <FaCode className="text-cyan-400" />

            <div>
              <p className="font-bold text-white text-3xl ">
                Programming & Problem Solving
              </p>
              <p className=" text-lg text-white max-w-4xl">
                With a strong foundation in C++, I bring analytical thinking and
                problem-solving skills to every project, ensuring efficient
                solutions and reliable performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
