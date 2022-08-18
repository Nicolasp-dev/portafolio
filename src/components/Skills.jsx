import React from "react";
import { DUMMY_SKILLS } from "../data.js";
import SkillsUI from "./UI/SkillsUI";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#f6f6f6]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-primary-text">
            Skills
          </p>
          <p className="py-4">Tecnologías que implemento</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {DUMMY_SKILLS.map((skill) => {
            return <SkillsUI image={skill.image} title={skill.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
