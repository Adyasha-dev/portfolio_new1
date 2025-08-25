import React from "react";
import adyashaphoto from "../assets/adyashaphoto.jpg";
const Home = () => {
  return (
    <section className="w-full h-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]  ">
      <div className="w-full h-full md:h-[40vh]  lg:h-screen flex flex-col md:flex-row  justify-between    rounded-lg ">
        {/*Left side div */}
        <div className="  w-full md:w-1/2 h-full  mt-3 flex flex-col  justify-center items-center">
          <h1 className="font-bold text-4xl lg:text-8xl text-white">Hi</h1>
          <h2 className=" text-3xl lg:text-7xl font-bold mt-3 text-white">
            I'am <span className="text-blue-900 ">Adyasha</span>
          </h2>
          <h3 className=" text-2xl lg:text-4xl font-bold  mt-3 text-white">
            Web Developer
          </h3>
          <p className=" text-sm lg:text-lg font-semibold mt-3  text-white  max-w-md text-center">
            I design and develop modern, responsive, and user-friendly websites.
          </p>
          <span className="flex gap-5 mt-3">
            {" "}
            <button className="px-8 py-2 lg:px-10 lg:py-3 bg-blue-900 font-semibold hover:scale-105 transition-transform duration-300 rounded-md ">
              Hire me
            </button>
            <button className="px-8 py-2 lg:px-10 lg:py-3 bg-blue-900 font-semibold hover:scale-105 transition-transform duration-300 rounded-md ">
              view Portfolio
            </button>
          </span>
        </div>
        {/*Right side div */}
        <div className=" w-full md:w-1/2 h-full flex-1 flex items-center justify-center  my-3">
          <img
            src={adyashaphoto}
            alt="adyasha"
            className="w-40 h-40 md:w-52 md:h-52 lg:w-[80%] lg:h-[80%] rounded-full shadow-lg object-cover border-4 border-blue-900"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
