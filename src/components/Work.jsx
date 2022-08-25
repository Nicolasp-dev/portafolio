import React from "react";
import WorkUI from "./UI/WorkUI";
import { DUMMY_WORKS } from "../data";
import { FormattedMessage } from "react-intl";

const Work = () => {
  return (
    <div name="work" className="bg-[#f6f6f6]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full py-[5rem]">
        <div className="border-b-[1px] border-[#ccc] py-3 text-center sm:text-left">
          <p className="text-4xl sm:text-5xl font-bold  text-primary-text">
            <FormattedMessage id="menu.project" />
          </p>
        </div>

        <div className="flex flex-wrap gap-5 mt-10">
          {DUMMY_WORKS.map((work, i) => {
            return (
              <WorkUI
                key={i}
                image={work.image}
                gitHub={work.gitHub}
                website={work.website}
                center={work.center}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
