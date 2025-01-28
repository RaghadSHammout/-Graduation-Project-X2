import React, { useState, useEffect } from 'react';
import "./StreamingDevices.css";
//import framer-motion library
import { motion } from 'framer-motion'
//import Animation.js
import { fadeIn } from '../../Animation'
import Title from '../Title/Title';
import { SkileData } from '../../Components/Data/SkilsData'
import StrimingCard from "../StrimingCard/StrimingCard"

export default function StreamingDevices() {
  const [displayText, setDisplayText] = useState("");

  const fullText = "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.";

  const updateDisplayText = () => {
    if (window.innerWidth <= 1000) {
      setDisplayText(fullText.slice(0, 82) + ".");
    } else {
      setDisplayText(fullText);
    }
  };

  useEffect(() => {
    updateDisplayText();
    window.addEventListener('resize', updateDisplayText);

    return () => {
      window.removeEventListener('resize', updateDisplayText);
    };
  }, []);

  return (
    <section className={"home-padding "}>
      <div>
        < motion.div
           variants={fadeIn("up", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
         className='MAContanair '>

          <Title
            maMargin={'maMargin'}
            size={'mo-size'}
            matext={'mo-text'}
            title={"We Provide you streaming experience across various devices."}
            text={displayText}
          />
        </motion.div>

        <div className='MAA_card'>
          <div className='MAA'>
            {SkileData.map((e, index) => {
              return (
                <StrimingCard key={index} title={e.title} img={e.img} desc={e.desc} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
