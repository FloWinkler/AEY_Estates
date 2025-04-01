import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({
  index,
  name,
  description,
  image,
}) => {
  return (
    
    <Tilt>
    
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='w-full bg-quaternary p-[2px] rounded-[20px]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // className='blue-pink-gradient p-[1.5px] rounded-[20px]';
        className='bg-tertiary p-5 rounded-[20px] sm:w-[360px] w-full'
        >
        <div className='relative w-full h-[260px]'>
          <img
            src={image}
            alt='service_image'
            className='w-full h-full object-cover rounded-[20px]'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-quaternary font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-quaternary text-[16px]'>{description}</p>
        </div>

      </div>
    </motion.div>
    </Tilt>
  );
};

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Precision - privacy - presence
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Services
        </h2>
      </motion.div>

      
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-quaternary text-center text-[18px] leading-[30px]'
        >
          <p>From international property sourcing to long-term asset stewardship.</p> 
          <p>AEY offers tailored services for discerning owners.</p>
        </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-7'>
        {services.map((service, index) => (
          <ServiceCard key={`service-${index}`} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, "Services");