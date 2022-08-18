import React from "react";

const WorkUI = ({ image, gitHub, website, center }) => {
  const position = center ? "object-center" : "object-left";
  return (
    <div className="flex flex-col bg-[#fff] rounded-md shadow-md w-full h-[15rem] sm:h-[35rem] overflow-hidden relative">
      <img
        className={`w-full h-full absolute object-cover sm:object-cover ${position} `}
        src={image}
        alt=""
      />
      <div className=" bg-[#242e4c86] text-[#fff] -bottom-[3rem] hover:bottom-0 duration-300 absolute w-full h-[6rem] z-10">
        <h2 className="text-center py-3 text-lg sm:text-xl font-semibold tracking-wider">
          Checkout
        </h2>
        <div className="flex justify-center items-center gap-5 sm:gap-10">
          <a
            href={gitHub}
            className="flex justify-center items-center w-[6rem] text-sm sm:text-md sm:w-[8rem] h-[2.2rem] border-[1px] border-[#fff] rounded-md hover:scale-[1.1] duration-300 cursor-pointer"
            rel="noreferrer"
            target="_blank"
          >
            Git-Hub
          </a>
          <a
            href={website}
            className="flex justify-center items-center w-[6rem] text-sm sm:text-md sm:w-[8rem] h-[2.2rem] rounded-md bg-primary-text hover:scale-[1.1] duration-300 cursor-pointer"
            rel="noreferrer"
            target="_blank"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkUI;
