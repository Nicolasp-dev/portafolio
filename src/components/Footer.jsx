import React from "react";
import Waves from "../assets/wave.svg";

const Contact = () => {
  return (
    // bg-[#00445b]
    <footer className="w-full h-[21rem] bg-[#f6f6f6] relative">
      <img
        src={Waves}
        alt=""
        className="absolute w-[100vw] h-full object-cover"
      />
    </footer>
  );
};

export default Contact;
