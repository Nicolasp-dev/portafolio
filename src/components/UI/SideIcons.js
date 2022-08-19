import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SideIcons = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[18rem] left-0">
      <ul>
        <li className="w-[10.5rem] h-[4.2rem] flex justify-between items-center ml-[-5.5rem] hover:ml-[-10px] duration-300 bg-[#0a66c2] rounded-tr-md text-[#fff]">
          <a
            className="ml-2 flex justify-between items-center gap-7 text-gray-300 "
            href="https://www.linkedin.com/in/nicolaspe%C3%B1a-dev/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn <FaLinkedin size={32} />
          </a>
        </li>
        <li className="w-[10.5rem] h-[4.2rem] flex justify-between items-center ml-[-5.5rem] hover:ml-[-10px] duration-300 bg-[#1f1e1e] text-[#fff] rounded-br-md">
          <a
            className="ml-2 flex justify-around items-center gap-7 text-gray-300 "
            href="https://github.com/Nicolas-pc-dev"
            rel="noreferrer"
            target="_blank"
          >
            Git-Hub <FaGithub size={32} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideIcons;
