import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import "../index.css"; // Import the CSS file

const ExperienceCard = ({ experience }) => {

  return (
    <VerticalTimelineElement className="vertical-timeline-custom-line no-box-shadow"
      contentStyle={{
        color: "#fff",
        background: "-webkit-linear-gradient(-90.13deg, #11cef0 1.9%, #ff5af7 97.5%)",
      }}
      contentArrowStyle={{ borderRight: "10px solid  #11cef0" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg, 
      }}
      
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={'w-[100%] h-[100%] object-contain'}
          />
        </div>
      }
      
    >
      
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-quaternary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[16px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");