import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bg01 from "../../assets/photos/Home page images/hero2.png";
import bg02 from "../../assets/photos/Home page images/hero2.png";
import bg03 from "../../assets/photos/Home page images/hero2.png";
import './WhoAreWe.css'

const images = [bg01, bg02, bg03]; 
export default function WhoAreWe()  {
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length); 
      }, 10000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="containerMA">
        <motion.div
          key={currentImage}
          className="image-containerMA"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.img
            src={images[currentImage]}
            alt="Dynamic"
            className="sliding-image"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        </motion.div>
  
        <motion.div
          className="text-containerMA"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.h2
            className="textcenter"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.2, color: "#e5000080" }}
          >
            Learn about the different genres of movies
          </motion.h2>
  
          <motion.p
            className="textcenter"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, color: "#ddd" }}
          >
            In short, films are categorized into genres like drama, comedy, action, and sci-fi. Drama films tell emotional stories, comedy aims to entertain with humor, action focuses on excitement and movement, while sci-fi explores futuristic worlds and technology.
          </motion.p>
        </motion.div>
      </div>
    );
}
