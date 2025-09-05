// import React from "react";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaNodeJs,
// } from "react-icons/fa";
// import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
// import { motion } from "framer-motion";

// const Skill = () => {
//   return (
//     <section className="w-full h-full bg-black  ">
//       <h1 className=" text-center font-bold text-white text-4xl  md:text-3xl lg:text-6xl py-4 lg:py-10">
//         My Skill
//       </h1>
//       <div className="flex flex-col lg:flex-row lg:gap-10 gap-5  h-full w-full">
//         {/*Left div */}
//         <div className="w-full h-full lg:w-1/2 bg-amber-200 flex flex-col justify-center items-center gap-3 py-6">
//           <h1 className="text-lg md:text-4xl  underline font-semibold">
//             Technical Skills
//           </h1>

//           <div className=" w-full h-full flex flex-col  px-2 md:px-4 lg:px-4">
//             <span className="flex gap-1 ">
//               {" "}
//               <FaHtml5 className="text-orange-500" size={30} />
//               <p className="text-white text-lg ">HTML</p>
//             </span>
//             <motion.div
//               className="rounded-xl h-2 bg-blue-800"
//               initial={{ width: "0%" }}
//               animate={{ width: "90%" }}
//               transition={{ duration: 1.5 }}
//             />
//             {/*
//             <div className=" w-full  rounded-xl h-2 bg-blue-800"></div> */}
//           </div>
//           <div className=" w-full h-full flex flex-col  px-2 md:px-4 lg:px-4">
//             <span className="flex gap-1 ">
//               {" "}
//               <FaCss3Alt className="text-blue-500" size={30} />
//               <p className="text-white text-lg ">CSS</p>
//             </span>
//             <div className=" w-full  rounded-xl h-2 bg-blue-800"></div>
//           </div>
//           <div className=" w-full h-full flex flex-col  px-2 md:px-4 lg:px-4">
//             <span className="flex gap-1 ">
//               <FaJsSquare className="text-yellow-400" size={30} />
//               <p className="text-white text-lg ">JavaScript</p>
//             </span>
//             <div className=" w-full  rounded-xl h-2 bg-blue-800"></div>
//           </div>
//           <div className=" w-full h-full flex flex-col  px-2 md:px-4 lg:px-4">
//             <span className="flex gap-1 ">
//               <FaReact className="text-cyan-400 animate-spin-slow" size={30} />
//               <p className="text-white text-lg ">React</p>
//             </span>
//             <div className=" w-full  rounded-xl h-2 bg-blue-800"></div>
//           </div>
//           <div className=" w-full h-full flex flex-col  px-2 md:px-4 lg:px-4">
//             <span className="flex gap-1 ">
//               <FaNodeJs className="text-green-500" size={30} />
//               <p className="text-white text-lg ">Node.js</p>
//             </span>
//             <div className=" w-full  rounded-xl h-2 bg-blue-800"></div>
//           </div>
//           <div className=" w-full h-full flex flex-col  px-2 md:px-4 lg:px-4">
//             <span className="flex gap-1">
//               <SiExpress size={30} className=" text-gray-400" />

//               <p className="text-white text-lg ">Express</p>
//             </span>
//             <div className=" w-full  rounded-xl h-2 bg-blue-800"></div>
//           </div>
//           <div className=" w-full h-full flex flex-col  px-2 md:px-4 lg:px-4">
//             <span className="flex  gap-1">
//               <SiMongodb className="text-green-600" size={30} />
//               <p className="text-white text-lg ">MongoDB</p>
//             </span>
//             <div className=" w-full  rounded-xl h-2 bg-blue-800"></div>
//           </div>
//           <div className=" w-full h-full flex flex-col  px-2 md:px-4 lg:px-4">
//             <span className="flex gap-1 ">
//               <SiMysql className="text-blue-600" size={30} />
//               <p className="text-white text-lg ">MySQL</p>
//             </span>
//             <div className=" w-full  rounded-xl h-2 bg-blue-800"></div>
//           </div>
//         </div>
//         {/*Right div */}
//         <div className="w-full h-full lg:w-1/2 bg-pink-400 flex flex-col justify-center items-center gap-7 ">
//           <h1 className="text-lg md:text-4xl  underline font-semibold text-white">
//             Professional Skill
//           </h1>
//           <span className="flex   gap-6">
//             <div className="flex flex-col ">
//               <div className="w-32 h-32  md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full   border-8 border-blue-400"></div>
//               <p className="text-center md:text-2xl text-white  text-lg">
//                 Creativity
//               </p>
//             </div>

//             <div className="flex flex-col ">
//               <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full   border-8 border-blue-400"></div>
//               <p className="text-center text-lg md:text-2xl text-white ">
//                 Problem Solving{" "}
//               </p>
//             </div>
//           </span>
//           <span className="flex   gap-6">
//             <div className="flex flex-col ">
//               <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full   border-8 border-blue-400"></div>
//               <p className="text-center lg:text-2xl text-white text-lg ">
//                 TeamWork
//               </p>
//             </div>
//             <div className="flex flex-col ">
//               <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full   border-8 border-blue-400"></div>
//               <p className="text-center lg:text-2xl text-white text-lg ">
//                 Communication
//               </p>
//             </div>
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skill;
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" size={30} />,
    level: "90%",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" size={30} />,
    level: "85%",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" size={30} />,
    level: "80%",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" size={30} />,
    level: "85%",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" size={30} />,
    level: "75%",
  },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-400" size={30} />,
    level: "70%",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" size={30} />,
    level: "80%",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-600" size={30} />,
    level: "70%",
  },
];

// ✅ Added percentage values for professional skills
const professionalSkills = [
  { name: "Creativity", level: 90 },
  { name: "Problem Solving", level: 85 },
  { name: "TeamWork", level: 80 },
  { name: "Communication", level: 75 },
];

const Skill = () => {
  return (
    <section className="w-full h-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] ">
      <h1 className=" text-center font-bold text-white text-4xl md:text-3xl lg:text-6xl py-4 lg:py-10">
        My Skills
      </h1>
      <div className="flex flex-col lg:flex-row lg:gap-10 gap-5 h-full w-full">
        {/* Left div - Technical Skills */}
        <div className="w-full h-full lg:w-1/2  flex flex-col justify-center items-center gap-5 py-6 md:px-10 lg:px-16">
          <h1 className="text-lg md:text-4xl text-white underline font-semibold">
            Technical Skills
          </h1>

          {skills.map((skill, index) => (
            <div key={index} className="w-full flex flex-col px-4">
              {/* Skill name and percentage */}
              <div className="flex justify-between items-center mb-1">
                <span className="flex gap-2 items-center">
                  {skill.icon}
                  <p className="text-white text-lg">{skill.name}</p>
                </span>
                <motion.span
                  className="text-white font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {skill.level}
                </motion.span>
              </div>

              {/* Progress bar */}
              <motion.div
                className="rounded-xl h-2 bg-blue-800"
                initial={{ width: "0%" }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
            </div>
          ))}
        </div>

        {/* Right div - Professional Skills */}
        <div className="w-full h-full lg:w-1/2  flex flex-col justify-center items-center gap-7">
          <h1 className="text-lg md:text-4xl underline font-semibold text-white">
            Professional Skills
          </h1>

          <div className="grid grid-cols-2 gap-6  ">
            {professionalSkills.map((skill, index) => {
              const circleRadius = 70; // circle size
              const circumference = 2 * Math.PI * circleRadius;
              const progress = (skill.level / 100) * circumference;

              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  {/* SVG Circular Progress */}
                  <svg
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    className="transform -rotate-90"
                  >
                    {/* Background circle */}
                    <circle
                      cx="80"
                      cy="80"
                      r={circleRadius}
                      stroke="white"
                      strokeWidth="10"
                      fill="transparent"
                      opacity="0.2"
                    />
                    {/* Animated progress circle */}
                    <motion.circle
                      cx="80"
                      cy="80"
                      r={circleRadius}
                      stroke="blue"
                      strokeWidth="10"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference}
                      animate={{ strokeDashoffset: circumference - progress }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </svg>

                  {/* Percentage inside circle */}
                  <div className="absolute flex flex-col items-center justify-center">
                    <p className="text-white text-xl font-bold">
                      {skill.level}%
                    </p>
                  </div>
                  <p className="text-white text-lg">{skill.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
