import React from "react";
import HomeBg from "../assets/Images/HomBg.webp";
import { Link } from "react-scroll";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

const Home = () => {
  const homeVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div
      name="home"
      className="w-full h-screen bg-[#00445b] relative flex justify-center items-center"
    >
      <img className="w-full h-full absolute z-0" src={HomeBg} alt="" />
      {/* Container */}
      <motion.div
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[20rem] absolute gap-8 text-[#fff] text-center pt-10 z-20"
        variants={homeVariants}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-3xl sm:text-5xl font-bold shadow-2xl tracking-wider">
          Nicolas Peña
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-wider shadow-2xl">
          Frontend Developer
        </h2>
        <p className="tracking-wider text-lg sm:text-2xl font-thin">
          <FormattedMessage
            id="home.header"
            defaultMessage="Get to know my experience and my projects"
          />
        </p>

        <div className="w-full flex justify-center ">
          <Link to="about" smooth={true} duration={500}>
            <MdOutlineDoubleArrow className="text-6xl sm:text-8xl rotate-90 cursor-pointer hover:translate-y-5 duration-300" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
