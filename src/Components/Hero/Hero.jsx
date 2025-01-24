import './Hero.css'
import'../Title/Title'
import Title from '../Title/Title'
import Button from '../Button/Button'
import triangle from '../../assets/photos/Home page images/triangle.png'
import { useEffect, useState } from 'react'
//import framer-motion library
import {motion} from 'framer-motion'
//import Animation.js
import {fadeIn} from '../../Animation'



export default function Hero() {
  
  return (
    <div className='ma-hero'>
        <div className='ma-box'>
            <motion.div
             variants={fadeIn("up" , 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false , amount:0.7}}
             className='ma-contant'>
                <Title 
                  number = {118}
                    maMargin = {'ma-50'}
                    size={'ma-size , ma-title '}
                    matext={'ma-text'}
                    title= {''}
                    head ={true}
                    text = {"StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch." }
                /> 
                <Button
                show= {true}
                img={triangle}
                text = {" Start Watching Now"}/>
            </motion.div>
        </div>
    </div>
  )
}
