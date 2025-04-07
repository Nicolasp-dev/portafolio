import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdEngineering } from "react-icons/md";
import { FormattedMessage, useIntl } from "react-intl";
import { experiences as current } from "../data";

const Experience = () => {
  const intl = useIntl();

  const normalizedLocale = ["es-ES", "es-es"].includes(intl.locale) ? "es-ES" : "en-US";

  const experiences = current[normalizedLocale];

  return (
    <div name="experience" className="bg-[#f6f6f6] py-16 px-4">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#00445b] mb-12 border-b-2 pb-4 border-[#ccc]">
          <FormattedMessage id="experience.title" defaultMessage="Work Experience" />
        </h2>

        <VerticalTimeline lineColor="#00445b">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.date}
              iconStyle={{
                background: "#007e99",
                color: "#fff",
                boxShadow: "0 0 0 4px #00445b",
              }}
              icon={index === 0 ? <MdEngineering /> : <MdWork />}
              contentStyle={{
                background: "#ffffff",
                borderTop: "4px solid #007e99",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #007e99" }}
            >
              <h3 className="text-2xl font-semibold text-[#00445b]">{exp.title}</h3>
              <h4 className="text-lg italic text-gray-600 mb-4">{exp.company}</h4>
              <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
                {exp.tasks.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-[#e0f7fa] text-[#00445b] text-sm px-3 py-1 rounded-full shadow font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
