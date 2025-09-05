import React from "react";
import coffee from "../assets/coffee.jpg";
import pet from "../assets/pet.jpg";
import education from "../assets/education.png";
import calculator from "../assets/calculator.jpg";
import todo from "../assets/todo.jpg";
const Portfolio = () => {
  const projectData = [
    {
      id: 1,
      title: "Coffee Shop",
      description:
        "An interactive web application for a coffee shop, showcasing menu items, product details, and customer-friendly UI with smooth navigation. Built with React, Node.js, and MongoDB for a dynamic and responsive experience.",
      image: coffee,
      tech: ["React", "HTML", "Tailwind css", "Js"],
      demo: "fascinating-piroshki-6c1217.netlify.app",
      source: "https://github.com/Adyasha-dev/CoffeeShop",
    },
    {
      id: 2,
      title: "Petshop",
      description:
        "An e-commerce platform for pet products, featuring a user-friendly interface and Email integration",
      image: pet,
      tech: ["React", "HTML", "Tailwind CSS"],
      demo: "https://shimmering-llama-4263ab.netlify.app/",
      source: "https://github.com/Adyasha-dev/petshop",
    },
    {
      id: 3,
      title: "Utkal Education",
      description:
        "A responsive web application designed for an educational platform, featuring course details, training solutions, and modern UI built with Next.js,HTML,CSS,JS,React.",
      image: education,
      tech: ["React", "Next.js", "HTML", "Tailwind CSS", "JavaScript"],
      demo: "https://utkaleducation.netlify.app/",
      source: "https://github.com/Adyasha-dev/UtkalEducation",
    },
    {
      id: 4,
      title: "scientific calculator",
      description:
        "A scientific calculator built with React, featuring a user-friendly interface and advanced calculation capabilities.",
      image: calculator,
      tech: ["React", "HTML", "Tailwind CSS", "JavaScript"],
      demo: "https://utkaleducation.netlify.app/",
      source: "https://github.com/Adyasha-dev/Scientific_Calculator",
    },
    {
      id: 5,
      title: "To-Do List",
      description:
        "A simple and intuitive to-do list application built with HTML,Tailwind css, and JavaScript, allowing users to manage tasks efficiently.",
      image: todo,
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      demo: "https://github.com/Adyasha-dev/To-do-list",
      source: "https://github.com/Adyasha-dev/To-do-list",
    },
  ];
  return (
    <section className="  w-full h-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] ">
      <h1 className=" text-center font-bold text-white text-4xl md:text-3xl lg:text-6xl py-4 lg:py-10">
        Portfolio
      </h1>
      <div className=" w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4  ">
        {projectData.map((item, index) => (
          <div
            key={index}
            className="  w-full h-full  gap-4 bg-gradient-to-r from-blue-900 to-transparent p-3 rounded-lg overflow-hidden"
          >
            <div className="w-full h-60 overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className=" object-cover  transform transition-all duration-300  hover:scale-105"
              />
            </div>

            <h2 className="text-white text-2xl">{item.title}</h2>
            <p className="text-gray-400 text-lg ">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {item.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-gray-300 text-sm bg-blue-400 rounded-full p-2"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between mt-4">
              <a href={item.demo} className="text-blue-400">
                Live Demo
              </a>
              <a href={item.source} className="text-blue-400">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
