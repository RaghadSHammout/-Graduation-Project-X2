

import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { ShowCardData } from '../../Data/showCardData';
import CardShow from '../Card/CardShow';
import './CardsShow.css';
import iconBack from '../../../assets/Icons/Vector 619.png'

import iconFront from '../../../assets/Icons/Vector.png'
import Reviews from '../Reviews';
export default function CardsShow() {

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive:[
{
  breakpoint:400,
  settings:{
    slidesToShow: 1,
    slidesToScroll: 1,
// initialSlide:1,
  }
  
},
{
  breakpoint:1440,
  settings:{
    slidesToShow: 2,
    slidesToScroll: 1,
// initialSlide:1,
  }
  
}

    ],
    customPaging: (i) => <div className="custom-dot">_</div>,
     appendDots: (dots) => ( <div> <ul style={{ margin: "0px" }}> {dots.filter((_, idx) => idx % 2 === 0)} </ul> </div> ),

  };

  useEffect(() => {
    console.log("Component CardsShow mounted");
  }, []);
  const handlePrevClick = () => { if (sliderRef.current) { sliderRef.current.slickPrev(); } };
  const handleNextClick = () => { if (sliderRef.current) { sliderRef.current.slickNext(); } };
  return (
<>
<div className='custom_container'>
  <Reviews/>
      <Slider {...settings} ref={sliderRef}>
        {ShowCardData.map((item, index) => (
          
          <div key={index} className='custom_card'>
            <CardShow
              title={item.title}
              des={item.des}
              h={item.h}
              icon={item.icon}
              extraImages={item.extraImages}
              num={item.num}
            />
          </div>
        ))}
      </Slider>
      <div className='MAiconback'> <div className='MA'>

<button className='prev-arrow' onClick={handlePrevClick}><img src={iconBack} alt="" />
</button>
</div></div>
<div className='MAiconnext'> <div className='MA'>

<button className='next-arrow' onClick={handleNextClick}> <img src={iconFront} alt="Next" /> </button>
</div></div>
    </div>
  
     </>
  );
}

