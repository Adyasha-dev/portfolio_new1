import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";
import indoplus from "../assets/indoplus.png";
import glucian from "../assets/glucian.png";
import { SiMongodb, SiExpress } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { easeOut, motion } from "framer-motion";
const subjectData = [
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" size={30} />,
  },
  { name: "React", icon: <FaReact className="text-cyan-400" size={30} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
  { name: "Express", icon: <SiExpress size={40} className="text-gray-500" /> },
];
const experienceData = [
  {
    company: "Glucian India Private Limited",
    role: "MERN Stack Intern",
    duration: "Jun 2024 – Aug 2024",
    points: [
      "Developed a responsive Pet Shop website using React, Tailwind CSS, and Vite.",
      "Implemented product listing, customer care support, and email integration features.",
      "Strengthened knowledge of React, Node.js, MongoDB, and Express.js.",
    ],
    image: glucian, // sample company-style icon
  },
  {
    company: "Indoplush",
    role: "Full Stack Web Developer Intern",
    duration: "Sept 2024 – Feb 2025",
    points: [
      "Built and maintained dynamic web applications using React, JavaScript, SQL, Node.js, and Express.js.",
      "Designed and deployed Ommbabaji website with multi-role login system (User, Admin, Brahmin).",
      "Improved backend performance by optimizing APIs and database queries.",
    ],
    image: indoplus, // sample company-style icon
  },
];

const Experience = () => {
  return (
    <section className="h-full w-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] ">
      <h1 className=" text-center font-bold text-white text-4xl md:text-3xl lg:text-6xl py-4 lg:py-10">
        Experience
      </h1>
      <div className="w-full h-full flex flex-col lg:flex-row ">
        <div className=" w-full h-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 ">
          {subjectData.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col  items-center justify-center p-4 "
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }} // animation runs when in viewport
                viewport={{ once: true, amount: 0.3 }} // play once, when 30% is visible
                transition={{
                  duration: 1.2,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                  delay: 1.5, // small pause before starting
                  ease: { easeOut }, // smooth curve
                }}
                className=" rounded-full p-6 md:p-10 bg-gradient-to-r from-blue-900 to-transparent"
              >
                {item.icon}
              </motion.div>
              <p className="text-white  text-lg ">{item.name}</p>
            </div>
          ))}
        </div>
        <div className=" flex flex-col  gap-4 p-4 w-full h-full lg:w-1/2 text-white ">
          {experienceData.map((item1, index) => (
            <div key={index} className=" flex flex-col h-full w-full  ">
              <div className="flex  gap-5 p-4 justify-center items-center  h-full w-full shadow-lg hover:shadow-blue-500/30 rounded-xl bg-gradient-to-r from-blue-900 to-transparent ">
                <div>
                  <img
                    src={item1.image}
                    alt="adyasha"
                    className="h-14 w-14 lg:h-20 lg:w-20"
                  />
                </div>
                <div>
                  <h2 className="lg:text-2xl  text-sm font-bold">
                    {item1.role}
                  </h2>
                  <p className=" text-sm lg:text-lg">{item1.duration}</p>
                  <ul className="list-disc ">
                    {item1.points.map((point, i) => (
                      <li key={i} className="text-sm md:text-lg">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
