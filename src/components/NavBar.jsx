import React, { useState, useContext } from "react";
import { languageCtx } from "../context/languageCtx";
// 3th P. Library
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FormattedMessage } from "react-intl";
// Components
import LangFlags from "./UI/LangFlags";
import SideIcons from "./UI/SideIcons";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const { CV, languageHandler } = useContext(languageCtx);

  const clickHandler = () => setNav(!nav);

  const desktopVariant = {
    hidden: { y: -100 },
    show: { y: 0, transition: { delay: 1, duration: 1 } },
  };

  const mobileVariant = {
    open: { x: 0, transition: { duration: 0.2 } },
    close: { x: "-100vw" },
  };

  return (
    <>
      <motion.nav
        className="fixed w-full h-[5rem] shadow-xl bg-transparent backdrop-blur-sm z-50"
        variants={desktopVariant}
        initial="hidden"
        animate="show"
      >
        <div className="w-full h-full bg-[#41414187]  ">
          {/* Menu */}
          <div
            onClick={clickHandler}
            className="md:hidden z-20 text-[#fff] text-4xl absolute top-6 left-5"
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
                  <FormattedMessage id="menu.about" defaultMessage="About" />
                </Link>
              </li>
              <li className="hover:scale-[1.1] duration-300">
                <Link to="skills" smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li className="hover:scale-[1.1] duration-300">
                <Link to="work" smooth={true} duration={500}>
                  <FormattedMessage
                    id="menu.projects"
                    defaultMessage="Projects"
                  />
                </Link>
              </li>
              <li className="hover:scale-[1.1] duration-300">
                <a href={CV} download>
                  <FormattedMessage
                    id="menu.download"
                    defaultMessage="Download CV"
                  />
                </a>
              </li>
            </div>
          </ul>
          <LangFlags languageHandler={languageHandler} />
        </div>

        {/* Mobile Menu */}
        <motion.nav
          className={
            nav
              ? `absolute w-full top-0 h-screen bg-[#0c2a35f9] flex flex-col justify-center items-center text-[#fff] text-2xl`
              : "hidden"
          }
          variants={mobileVariant}
          animate={nav ? "open" : "close"}
        >
          <ul className="text-center ">
            <li className="py-6 text-4xl">
              <Link
                onClick={clickHandler}
                to="home"
                smooth={true}
                duration={500}
              >
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
                <FormattedMessage id="menu.about" defaultMessage="About" />
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
              <Link
                onClick={clickHandler}
                to="work"
                smooth={true}
                duration={500}
              >
                <FormattedMessage
                  id="menu.projects"
                  defaultMessage="Projects"
                />
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <a href={CV} download>
                <FormattedMessage
                  id="menu.download"
                  defaultMessage="Download CV"
                />
              </a>
            </li>
          </ul>
        </motion.nav>
      </motion.nav>
      <SideIcons />
    </>
  );
};

export default NavBar;
