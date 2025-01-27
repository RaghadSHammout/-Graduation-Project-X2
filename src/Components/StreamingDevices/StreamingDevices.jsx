import React, { useState, useEffect } from 'react';
import "./StreamingDevices.css";
//import framer-motion library
import { motion } from 'framer-motion'
//import Animation.js
import { fadeIn } from '../../Animation'
import Title from '../Title/Title';
import { SkileData } from '../../Components/Data/SkilsData'
import StrimingCard from "../StrimingCard/StrimingCard"
import { useLocation } from 'react-router-dom';
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

  const location = useLocation(); 
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }
      }
    };
    handleScrollToHash();
    window.addEventListener('hashchange', handleScrollToHash);

    return () => {
      window.removeEventListener('hashchange', handleScrollToHash);
    };
  }, [location]);

  return (
    <section className={"home-padding "} id='Devices'>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}>
        <div className='MAContanair '>

          <Title
            maMargin={'maMargin'}
            size={'mo-size'}
            matext={'mo-text'}
            title={"We Provide you streaming experience across various devices."}
            text={displayText}
          />
        </div>

        <div className='MAA_card'>
          <div className='MAA'>
            {SkileData.map((e, index) => {
              return (
                <StrimingCard key={index} title={e.title} img={e.img} desc={e.desc} />
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
