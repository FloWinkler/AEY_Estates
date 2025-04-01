import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { collections } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { fadeIn } from "../utils/motion";
import "../index.css"; // Import the CSS file

const CollectionCard = ({ collection }) => {

  return (
    <VerticalTimelineElement className="vertical-timeline-custom-line no-box-shadow"
      contentStyle={{
        background: "#293133",
        border:"2px solid #EBE1CF",
        borderRadius: "20px"
      }}
      contentArrowStyle={{ borderRight: "10px solid  #EBE1CF" }}
      date={collection.date}
      iconStyle={{
        background: collection.iconBg, 
        width: "40px",   // 👈 adjust width
        height: "40px",  // 👈 adjust height
        marginLeft: "-20px", // 👈 to re-center if needed
        marginTop: "12px",
      }}
      
    >
      
      <div>
        <h3 className='text-quaternary text-[24px] font-bold'>{collection.title}</h3>
        <p
          className='text-quaternary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {collection.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {collection.points.map((point, index) => (
          <li
            key={`collection-point-${index}`}
            className='text-quaternary text-[16px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Collection = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Privately held - Quietly passed on
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Collection
        </h2>
      </motion.div>
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-quaternary text-center text-[18px] leading-[30px]'
      >
        <p> We do not list properties. We preserve them. </p>
        <p> We serve a global clientele who value discretion, timeless architecture, and rare opportunity.</p>
      </motion.p>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline className="vertical-timeline-custom-line">
          {collections.map((collection, index) => (
            <CollectionCard
              key={`collection-${index}`}
              collection={collection}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Collection, "Collection");