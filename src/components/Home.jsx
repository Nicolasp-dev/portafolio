import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#00445b]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-6 text-[#fff]">
        <p className="">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-bold">Nicolas Peña</h1>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-wider ">
          Fullstack Developer Junior
        </h2>
        <p className=" max-w-[700px] tracking-wider">
          specializing in building exceptional digital experience. Currently,
          i'm focused on building responsive fullstack web applications.
        </p>

        <div>
          <button className="group border-2 rounded-md px-6 py-3 my-2 flex items-center ">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
