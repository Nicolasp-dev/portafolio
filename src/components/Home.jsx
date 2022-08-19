import React from "react";
import HomeBg from "../assets/Images/HomBg.jpg";
import { Link } from "react-scroll";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#00445b] relative flex justify-center items-center"
    >
      <img className="w-full h-full absolute z-0" src={HomeBg} alt="" />
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[20rem] absolute gap-8 text-[#fff] text-center pt-10 z-20">
        <h1 className="text-3xl sm:text-5xl font-bold shadow-2xl">
          Nicolas Peña
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-wider shadow-2xl">
          Fullstack Developer Junior
        </h2>
        <p className="tracking-wider text-lg sm:text-xl font-thin">
          Conoce mi experiencia y mis proyectos.
        </p>

        <div className="w-full flex justify-center ">
          <Link to="about" smooth={true} duration={500}>
            <MdOutlineDoubleArrow className="text-6xl sm:text-8xl rotate-90 cursor-pointer hover:translate-y-5 duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
