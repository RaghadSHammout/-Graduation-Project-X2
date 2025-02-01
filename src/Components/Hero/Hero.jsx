import React, { useRef } from 'react'
import './Hero.css'
import Title from '../Title/Title';
import Button from '../Button/Button';
import triangle from '../../assets/photos/Home page images/triangle.png'
import { useState, useEffect } from 'react';
import {imgHero, imgHero2, imgHero3, imgHero4} from "../Data/imgHero"
import playbutton from "../../assets/photos/HeroPics/HeroPics/playbutton.png"
import spinningthingy from "../../assets/photos/HeroPics/HeroPics/spinningthingy.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gsap from 'gsap';
export default function HeroNew() {
  const RotatingImage = ({ src, alt }) => {
    const imageRef = useRef(null);
     
    useEffect(() => {
      gsap.to(imageRef.current, {
        rotation: 90,
        duration: 1,
        ease: 'power2.out',
      }, 1);
    }, []);
    return (
      <img ref={imageRef} src={src} alt={alt} />
    );
  };
 
  return (
    <section className='ma-all-layers'>
       <div className='one-layer-img ' >
        <Row>
        {
          imgHero.map ((item1 , index)=>{
            return(
              <Col>
              <img key={index} src= {item1.heroImg} alt='' 
          
              className= {`${item1.special ? 'marginImg' : ''} ${item1.distance ? 'marginImg1' : ''}`}/>  
              </Col> 
                )
              })
          }
        </Row>
        <Row >
        {
          imgHero2.map ((item1 , index)=>{
          return(
              <Col>
              <img key={index} src= {item1.heroImg} alt='' 
              className= {`${item1.special ? 'marginImg' : ''} ${item1.distance ? 'marginImg1' : ''}`}/>  
              </Col> 
              )
            })
          }
        
        </Row>
        <Row >
        {
          imgHero3.map ((item1 , index)=>{
            return(
              <Col>
              <img key={index} src= {item1.heroImg} alt='' 
          
              className= {`${item1.special ? 'marginImg' : ''} ${item1.distance ? 'marginImg1' : ''}`}/>  
              </Col> 
              )
              })
          }
        </Row>
        <Row>
        {
          imgHero4.map ((item1 , index)=>{
            return(
              <Col>
              <img key={index} src= {item1.heroImg} alt='' 
              className= {`${item1.special ? 'marginImg' : ''} ${item1.distance ? 'marginImg1' : ''}`}/>  
              </Col> 
              )
              })
        }
        </Row>
        
    </div>
    <div className='ma-topfadeout'></div>
    <div  className='ma-bottomfadeout'></div>
    <div>
      <img src={playbutton} alt="" className='playbutton' />
    </div>
    <div className='spinningthingy'>
      <RotatingImage src={spinningthingy} alt="" />
    </div>
    <div className='ma-box-title'>
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
    </div>
  </section>
  )
}



