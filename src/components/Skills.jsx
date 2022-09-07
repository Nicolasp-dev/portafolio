import React from "react";
import { DUMMY_SKILLS } from "../data.js";
import SkillsUI from "./UI/SkillsUI";
import { FormattedMessage } from "react-intl";

const Skills = () => {
  return (
    <div name="skills" className="w-full  bg-[#f6f6f6] py-[3rem]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mt-10 border-b-[1px] border-[#ccc] pb-3 text-center sm:text-left">
          <p className="text-4xl  sm:text-5xl font-bold inline text-primary-text">
            <FormattedMessage id="menu.skills" defaultMessage="Skills" />
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-10">
          {DUMMY_SKILLS.map((skill, i) => {
            return <SkillsUI key={i} image={skill.image} title={skill.title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
