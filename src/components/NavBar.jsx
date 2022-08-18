import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const clickHandler = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] shadow-xl bg-transparent backdrop-blur-sm ">
      <div className="w-full h-full bg-[#00000066]  ">
        {/* Menu */}
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
      <div onClick={clickHandler} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <ul>
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
            <Link
              onClick={clickHandler}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[15rem] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2] rounded-tr-md text-[#fff]">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-5"
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1f1e1e] text-[#fff]">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-5"
              href="/"
            >
              Git-Hub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#af7938] text-[#fff] ">
            <a
              className="flex justify-between items-center w-full text-gray-300 ml-5"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
