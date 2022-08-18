import React from "react";

const WorkUI = ({ image }) => {
  return (
    <div className="flex bg-[#fff] rounded-md shadow-md hover:bg-[#ccc] w-full overflow-hidden">
      <div className="w-[100%]">
        <img
          className="object-cover object-left-top w-full h-full rounded-tl-md rounded-bl-md "
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default WorkUI;
