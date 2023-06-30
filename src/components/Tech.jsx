import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const maxPerLine = 5;
  const totalLines = Math.ceil(technologies.length / maxPerLine);

  return (
    <div className='flex flex-wrap justify-center gap-10'>
      {[...Array(totalLines)].map((_, lineIndex) => (
        <div className='flex flex-row justify-center gap-10' key={lineIndex}>
          {technologies
            .slice(lineIndex * maxPerLine, (lineIndex + 1) * maxPerLine)
            .map((technology) => (
              <div className='w-28 h-28' key={technology.name}>
               <BallCanvas
                  icon={technology.icon}
                  style={technology.name === "Three JS" ? { color: "white" } : {}}
                />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");