import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  // changed from xs:w-[500px] w-full
  <Tilt className='w-[350px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full blue-pink-gradient p-[1.5px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='w-full bg-tertiary rounded-[20px] py-5 px-5 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='certificates'
          className='rounded-[20px]'
        />
        <h3 className='text-white text-[24px] font-bold text-center pt-5'>
          {title}
        </h3>
        
      </div>
    </motion.div>
   
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}  >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am excited to showcase my skills 
        as a software developer after successfully completing a Full-Stack Bootcamp. 
        I am currently seeking opportunities for an internship or trainee program 
        to further enhance my programming abilities.
      </motion.p>
     {/* added className='w-[500px]' for child "w-full" */}
      <div className='mt-20 flex flex-wrap gap-10 '>
        {certificates.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");