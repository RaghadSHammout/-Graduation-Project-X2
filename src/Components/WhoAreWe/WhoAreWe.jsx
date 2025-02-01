import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bg01 from "../../assets/photos/Home page images/hero2.png";
import bg02 from "../../assets/photos/Home page images/hero2.png";
import bg03 from "../../assets/photos/Home page images/hero2.png";
import './WhoAreWe.css'

const images = [bg01, bg02, bg03];
export default function WhoAreWe() {
  const [currentImage, setCurrentImage] = useState(0);
  const [text, setText] = useState("");
  const fullText = "We are passionate movie and TV show enthusiasts, bringing you the best content from the world of cinema. Whether you're looking for the latest releases, exclusive reviews, or curated lists of must-watch films, we’ve got you covered!";
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText[i]);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
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
          Who Are We ?
        </motion.h2>

        <motion.p
          className="textcenter typing-effect"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
        >
          {text}
        </motion.p>
      </motion.div>
    </div>
  );
}
