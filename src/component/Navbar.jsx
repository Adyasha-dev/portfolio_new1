import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <>
      <nav className=" flex flex-row justify-between items-center  h-[10dvh] px-10  bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <div className="bg-white h-10 w-10 rounded-full  flex justify-center items-center ">
          <span className="text-lg text-black  font-bold">AB</span>
        </div>
        <ul className=" hidden lg:flex flex-row text-white gap-6">
          <li className="font-semibold text-3xl lg:text-lg hover:text-indigo-400 hover:underline underline-offset-4 transition">
            <Link
              to="home"
              smooth={true}
              duration="500"
              className="cursor-pointer "
            >
              Home
            </Link>
          </li>
          <li className="font-semibold text-3xl lg:text-lg hover:text-indigo-400 hover:underline underline-offset-4 transition">
            <Link
              to="about"
              smooth={true}
              duration="500"
              className="cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="font-semibold text-3xl lg:text-lg hover:text-indigo-400 hover:underline underline-offset-4 transition">
            <Link
              to="skill"
              smooth={true}
              duration="500"
              className="cursor-pointer"
            >
              Skill
            </Link>
          </li>
          <li className="font-semibold text-3xl lg:text-lg hover:text-indigo-400 hover:underline underline-offset-4 transition">
            <Link
              to="services"
              smooth={true}
              duration="500"
              className="cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li className="font-semibold text-3xl lg:text-lg hover:text-indigo-400 hover:underline underline-offset-4 transition">
            <Link
              to="portfolio"
              smooth={true}
              duration="500"
              className="cursor-pointer"
            >
              Portfolio
            </Link>
          </li>
          <li className="font-semibold text-3xl lg:text-lg hover:text-indigo-400 hover:underline underline-offset-4 transition">
            <Link
              to="contact"
              smooth={true}
              duration="500"
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex bg-white h-8 w-36  items-center justify-center shadow-md hover:bg-indigo-400 transition transform hover:scale-105 ">
          <button className=" text-black  text-lg  font-semibold rounded-lg ">
            Download CV
          </button>
        </div>
        {/*mobile humburgur menu */}
        <button
          onClick={() => setIsopen(!isOpen)}
          className="lg:hidden text-white  h-16"
        >
          {isOpen ? (
            <RxCross2 className="text-white  text-3xl" />
          ) : (
            <RxHamburgerMenu className="text-white text-3xl" />
          )}
        </button>
      </nav>
      {isOpen && (
        <div className=" relative z-50 w-full h-full  flex justify-between ">
          <div className="bg-white h-10 w-10 rounded-full  flex justify-center items-center ">
            <span className="text-lg text-black  font-bold">AB</span>
          </div>
          <div>
            <RxHamburgerMenu className="text-white text-3xl" />
          </div>
          <ul className="lg:hidden w-full  h-[100dvh] top-0 z-50 absolute  text-white flex flex-col bg-black items-center gap-3 ">
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
