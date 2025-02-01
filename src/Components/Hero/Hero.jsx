import React, { useRef, useEffect } from 'react';
import './Hero.css';
import Title from '../Title/Title';
import Button from '../Button/Button';
import triangle from '../../assets/photos/Home page images/triangle.png';
import { imgHero, imgHero2, imgHero3, imgHero4 } from "../Data/imgHero";
import playbutton from "../../assets/photos/HeroPics/HeroPics/playbutton.png";
import spinningthingy from "../../assets/photos/HeroPics/HeroPics/spinningthingy.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gsap from 'gsap';

export default function HeroNew() {
  // Rotating Image Component
  const RotatingImage = ({ src, alt }) => {
    const imageRef = useRef(null);

    useEffect(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          rotation: 720,
          duration: 2.5,
          ease: "power1.inOut", // Smooth ease-in-out effect
        });
      }
    }, []);

    return <img ref={imageRef} src={src} alt={alt} />;
  };

  // Reusable Image Row Component
  const ImageRow = ({ images }) => (
    <Row>
      {images.map((item, index) => (
        <Col key={index}>
          <img 
            src={item.heroImg} 
            alt=""
            className={`${item.special ? 'marginImg' : ''} ${item.distance ? 'marginImg1' : ''}`} 
          />
        </Col>
      ))}
    </Row>
  );

  return (
    <section className='ma-all-layers'>
      {/* Image Layers */}
      <div className='one-layer-img'>
        <ImageRow images={imgHero} />
        <ImageRow images={imgHero2} />
        <ImageRow images={imgHero3} />
        <ImageRow images={imgHero4} />
      </div>

      {/* Fade Effects */}
      <div className='ma-topfadeout'></div>
      <div className='ma-bottomfadeout'></div>

      {/* Play Button */}
      <div>
        <img src={playbutton} alt="Play" className='playbutton' />
      </div>

      {/* Rotating Image */}
      <div className='spinningthingy'>
        <RotatingImage src={spinningthingy} alt="Rotating effect" />
      </div>

      {/* Title and Button */}
      <div className='ma-box-title'>
        <Title
          number={118}
          maMargin={'ma-50'}
          size={'ma-size ma-title'}
          matext={'ma-text'}
          title={''}
          head={true}
          text={
            "StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. " +
            "With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. " +
            "You can also create your own watchlists, so you can easily find the content you want to watch."
          }
        />
        <Button show={true} img={triangle} text={" Start Watching Now"} />
      </div>
    </section>
  );
}
