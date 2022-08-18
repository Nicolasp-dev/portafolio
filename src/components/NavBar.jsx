import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SideIcons from "./UI/SideIcons";

import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const clickHandler = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[4rem] sm:h-[5rem] shadow-xl bg-transparent backdrop-blur-sm z-50">
      <div className="w-full h-full bg-[#41414187]  ">
        {/* Menu */}
        <div
          onClick={clickHandler}
          className="md:hidden z-20 text-[#fff] text-4xl absolute top-4 left-5"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul className="h-full hidden md:flex gap-8 text-xl tracking-wider text-[#fff] items-center justify-between mx-4">
          <div className="flex">
            <li className="hover:scale-[1.1] duration-300">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="hover:scale-[1.1] duration-300">
              <Link to="about" smooth={true} duration={500}>
                Acerca de
              </Link>
            </li>
            <li className="hover:scale-[1.1] duration-300">
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className="hover:scale-[1.1] duration-300">
              <Link to="work" smooth={true} duration={500}>
                Proyectos
              </Link>
            </li>
          </div>
          <div>
            <li className="hover:scale-[1.1] duration-300">
              <Link to="contact" smooth={true} duration={500}>
                Descargar CV
              </Link>
            </li>
          </div>
        </ul>
      </div>

      {/* Hamburger */}

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#00445bf7] flex flex-col justify-center items-center text-[#fff] text-2xl "
        }
      >
        <ul className="text-center">
          <li className="py-6 text-4xl">
            <Link onClick={clickHandler} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={clickHandler}
              to="about"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={clickHandler}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={clickHandler} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={clickHandler} smooth={true} duration={500}>
              Descargar CV
            </Link>
          </li>
        </ul>
      </div>

      <SideIcons />
    </div>
  );
};

export default NavBar;
