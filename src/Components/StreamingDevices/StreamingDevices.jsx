import React, { useState, useEffect } from 'react';
import "../StreamingDevices/StreamingDevices.css";
import Title from '../Title/Title';

export default function StreamingDevices() {
  const [displayText, setDisplayText] = useState("");

  const fullText = "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.";

  const updateDisplayText = () => {
    if (window.innerWidth <= 500) {
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
    <div className='MAContanair'>
      <Title
        maMargin={'maMargin'}
        size={'ma-size'}
        matext={'ma-text'}
        title={"We Provide you streaming experience across various devices."}
        text={displayText} 
      />
    </div>
  );
}
