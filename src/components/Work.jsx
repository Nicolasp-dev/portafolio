import React from "react";
import WorkUI from "./UI/WorkUI";
import { DUMMY_WORKS } from "../data";
import { FormattedMessage } from "react-intl";

const Work = () => {
  return (
    <div name="work" className="bg-[#f6f6f6]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full py-[5rem]">
        <div className="py-3 text-center sm:text-left">
          <p className="text-4xl sm:text-5xl font-bold text-center text-[#00445b] mb-12 border-b-2 pb-4 border-[#ccc]">
            <FormattedMessage id="menu.projects" defaultMessage="Projects" />
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {DUMMY_WORKS.map((work, i) => (
            <WorkUI
              key={i}
              image={work.image}
              gitHub={work.gitHub}
              website={work.website}
              center={work.center}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
