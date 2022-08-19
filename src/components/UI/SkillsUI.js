import React from "react";
import { motion } from "framer-motion";

const SkillsUI = ({ image, title }) => {
  const skillsVariant = {
    visible: {},
    hover: {
      scale: 1.4,
      boxShadow: "0px 0px 8px rgb(0, 0, 0), ",
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="hover:scale-110 duration-300"
      variants={skillsVariant}
      whileHover="hover"
    >
      <img className="w-20 mx-auto" src={image} alt={`${title} icon`} />
      <p className="py-4">{title}</p>
    </motion.div>
  );
};

export default SkillsUI;
