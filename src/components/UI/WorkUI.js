import React from "react";

const WorkUI = ({ image }) => {
  return (
    <div className="flex flex-col bg-[#fff] rounded-md shadow-md w-full h-[35rem] overflow-hidden relative">
      <img className="w-full h-full  absolute" src={image} alt="" />
      <div className=" bg-[#242e4c86] text-[#fff] -bottom-[3rem] hover:bottom-0 duration-300 absolute w-full h-[6rem] z-10 ">
        <h2 className="text-center py-3 text-xl font-semibold tracking-wider">
          Checkout
        </h2>
        <div className="flex justify-center items-center gap-10">
          <button className="w-[8rem] h-[2.2rem] border-[1px] border-[#fff] rounded-md hover:scale-[1.1] duration-300">
            Git-Hub
          </button>
          <button className="w-[8rem] h-[2.2rem] rounded-md bg-primary-text hover:scale-[1.1] duration-300">
            Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkUI;
