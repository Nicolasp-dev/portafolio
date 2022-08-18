import React from "react";

const SkillsUI = ({ image, title }) => {
  return (
    <div className="hover:scale-110 duration-300">
      <img className="w-20 mx-auto" src={image} alt={`${title} icon`} />
      <p className="py-4">{title}</p>
    </div>
  );
};

export default SkillsUI;
