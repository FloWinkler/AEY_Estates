import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto"> 
      <div className={`${styles.paddingX} absolute inset-0 justify-center items-center mx-auto flex flex-row items-start gap-5`}>
        <div className="text-center">
          <h1 className={`${styles.heroHeadText}`}>AEY ESTATES</h1>
            <p className={`${styles.heroSubText}`}>
              For Those Who Know What Not to Look For
            </p>
        </div>
      </div>
      

        <div className="absloute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            {/* <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div> */}
          </a>
        </div>
      
    </section>
  )
}

export default Hero