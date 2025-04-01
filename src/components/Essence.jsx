import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { stats } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const EssenceCard = ({ index, title, content }) => (
  <Tilt className='w-[350px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-quaternary p-[2px] rounded-[20px]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='w-full bg-tertiary rounded-[20px] py-5 px-5 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {/* HIER: dein Text statt Bild */}
        <div className="bg-quaternary w-[300px] h-[180px] rounded-[20px] px-4 py-3  min-h-[100px] flex items-center justify-center text-center">
          <p className="text-secondary text-[65px] leading-relaxed font-medium">
          {content}
          </p>
        </div>

        <h3 className='text-quaternary text-[24px] font-bold text-center pt-5'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Essence = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`} >The ethos behind AEY</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Essence</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-quaternary text-center text-[18px] leading-[30px]'
      >
        <p> AEY ESTATES is a quiet circle of real estate custodians, curating homes that are not for sale - unless they’re meant to be.</p>
        <p> We exist for those who do not need to be convinced. Just introduced.</p>
      </motion.p>
     {/* added className='w-[500px]' for child "w-full" */}
      <div className='mt-20 flex flex-wrap gap-12 '>
        {stats.map((service, index) => (
          <EssenceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Essence, "Essence");