import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Waves from "../assets/Images/wave.svg";

const Contact = () => {
  return (
    // bg-[#00445b]
    <footer className="w-full h-[21rem] bg-[#f6f6f6] relative">
      <img
        src={Waves}
        alt=""
        className="absolute w-[100vw] h-full object-cover"
      />
      <div>
        <ul className="absolute bottom-5 w-full lg:hidden flex justify-center flex-col items-center">
          <li className=" h-[4rem] flex justify-between items-center duration-300  rounded-tr-md text-[#fff]">
            <a
              className="flex justify-between items-center text-gray-300 ml-5 text-xl"
              href="https://www.linkedin.com/in/nicolaspe%C3%B1a-dev/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn <FaLinkedin className="ml-5" size={30} />
            </a>
          </li>
          <li className="h-[4rem] flex justify-between items-center duration-300 text-[#fff] rounded-br-md">
            <a
              className="flex justify-between items-center text-gray-300 ml-5 text-xl"
              href="https://github.com/Nicolas-pc-dev"
              rel="noreferrer"
              target="_blank"
            >
              Git-Hub <FaGithub className="ml-5" size={30} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
