import React from 'react'
import "../StreamingDevices/StreamingDevices.css"
//import framer-motion library
import {motion} from 'framer-motion'
//import Animation.js
import {fadeIn} from '../../Animation'
export default function StreamingDevices() {
  return (
<motion.div 
 variants={fadeIn("up" , 0.2)}
 initial="hidden"
 whileInView={"show"}
 viewport={{once:false , amount:0.7}}
className='v'>
<div className='MAContanair'>
            <h3>We Provide you streaming experience across various devices.</h3>
            <p>
            With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
            </p>
        </div>

</motion.div>
      
  )
}
