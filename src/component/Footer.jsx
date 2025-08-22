import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-black  gap-10  ">
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500"></div>
      <div className="    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-7">
        <div className="w-auto h-auto  flex flex-col items-center justify-center">
          <div className="h-11 w-11 rounded-full bg-white flex  items-center justify-center ">
            <span className="text-lg font-semibold ">AB</span>
          </div>
          <p className="text-lg font-semibold text-white">
            Web Devloper| Frontend Devloper
          </p>
          <p className="mt-2 text-sm text-gray-200 max-w-3xl">
            passionate about crafting interactive & user-friendly web
            experiences
          </p>
        </div>
        <div className="w-auto h-auto  flex flex-col items-center justify-center text-white ">
          <p className="text-2xl font-semibold">Quick Links</p>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skill">Skill</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="w-auto h-auto  flex flex-col  items-center  gap-4">
          <p className="font-semibold text-2xl  text-white">Contact</p>
          <span className=" flex gap-6 ">
            <a href="https://www.instagram.com">
              <FaLinkedin className="text-white text-2xl font-semibold" />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagramSquare className="text-white text-2xl font-semibold" />
            </a>
            <a href="https://github.com">
              {" "}
              <FaGithub className="text-white text-2xl font-semibold" />
            </a>
          </span>
          <span className=" flex gap-2">
            <a href="https://mail.google.com">
              {" "}
              <AiTwotoneMail className="text-white text-xl " />
            </a>
            <span className=" text-white text-sm">
              adyashabiswal9938@gmail.com
            </span>
          </span>
        </div>
      </div>
      <div className="text-white text-sm text-center w-full mt-3  border-t border-gray-400 py-4 ">
        CopyRight © 2025 Adyasha Biswal. Made with ❤️ using React & TailwindCSS
      </div>
    </footer>
  );
};

export default Footer;
