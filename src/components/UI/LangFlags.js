import React from "react";
import Spanish from "../../assets/Images/Spanish.png";
import English from "../../assets/Images/English.png";

const LangFlags = ({ languageHandler }) => {
  return (
    <div className="absolute w-[5rem] md:w-[7rem] flex  justify-between top-7 right-7">
      <button onClick={() => languageHandler("es-ES")}>
        <img
          className=" h-[2rem] md:h-[2.4rem] cursor-pointer hover:scale-[1.1] duration-300"
          src={Spanish}
          alt="Spain flag"
        />
      </button>
      <button onClick={() => languageHandler("en-US")}>
        <img
          className="h-[2rem] md:h-[2.4rem] cursor-pointer hover:scale-[1.1] duration-300"
          src={English}
          alt="UK flag"
        />
      </button>
    </div>
  );
};

export default LangFlags;
