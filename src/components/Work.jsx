import React from "react";
import WorkUI from "./UI/WorkUI";
import { DUMMY_WORKS } from "../data";

const Work = () => {
  return (
    <div name="work" className="bg-[#f6f6f6]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full py-[5rem]">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-2 text-primary-text">
            Proyectos
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {DUMMY_WORKS.map((work, i) => {
            return <WorkUI key={i} image={work.image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
