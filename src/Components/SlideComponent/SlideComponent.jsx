import React from 'react';
import './SlideComponent.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from '../Title/Title';
import Button from '../Button/Button';
import plus from '../../assets/photos/plus.png';
import voice from '../../assets/photos/voice.png';
import like from '../../assets/photos/like.png';

export default function SlideComponent({ imgHero, title, textTitle, size, maMargin, matext, pad, text, img, show }) {
    return (


        <>
 
 <Carousel.Item className='slide'>

<img src={imgHero} className=' w-100  img-hero' />


<Carousel.Caption className='zk-caption'>

<Title

title={title}
text={textTitle}
/>


    <div className='zk-btns-div'>
        <Button
            img={img}
            text={text} />

        <div>
            <img src={plus} className='zk-btns-div-img ' />
            <img src={like} className='zk-btns-div-img ' />
            <img src={voice} className='zk-btns-div-img ' />
        </div>
    </div>

</Carousel.Caption>


</Carousel.Item> 

        </>





    )
}