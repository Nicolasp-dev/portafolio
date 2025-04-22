import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const SideIcons = () => {
  const sideIconsVariants = {
    hidden: { x: -100 },
    show: { x: 0 },
  };

  return (
    <div className="hidden lg:flex fixed flex-col top-[18rem] left-0 z-50">
      <ul>
        <motion.li
          className="w-[10.5rem] h-[4.2rem] flex justify-between items-center ml-[-5.5rem] rounded-tr-md  bg-[#0a66c2]  text-[#fff]"
          variants={sideIconsVariants}
          initial="hidden"
          animate="show"
          whileHover={{ x: 75 }}
        >
          <a
            className="ml-2 flex justify-between items-center gap-7 text-gray-300 "
            href="https://www.linkedin.com/in/nicpen-io/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn <FaLinkedin size={32} />
          </a>
        </motion.li>
        {/* <motion.li
          className="w-[10.5rem] h-[4.2rem] flex justify-between items-center ml-[-5.5rem] bg-[#1f1e1e] text-[#fff] rounded-br-md"
          variants={sideIconsVariants}
          initial="hidden"
          animate="show"
          whileHover={{ x: 80 }}
        >
          <a
            className="ml-2 flex justify-around items-center gap-7 text-gray-300 "
            href="https://github.com/Nicolasp-dev"
            rel="noreferrer"
            target="_blank"
          >
            Git-Hub <FaGithub size={32} />
          </a>
        </motion.li> */}
      </ul>
    </div>
  );
};

export default SideIcons;
