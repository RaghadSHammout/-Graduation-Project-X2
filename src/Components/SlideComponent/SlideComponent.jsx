import React from 'react';
import './SlideComponent.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from '../Title/Title';
import Button from '../Button/Button';
import plus from '../../assets/photos/plus.png';
import voice from '../../assets/photos/voice.png';
import like from '../../assets/photos/like.png';
import "../../Components/Hero2/Hero2.css";
export default function SlideComponent(
    { imgHero, imgHeight, title, textTitle, size, maMargin, matext, pad, text, img, show, caption, }) {
    return (
        <>
            <div className='zk-layer'></div>
            <img src={imgHero} className={`${imgHeight}`} />
            <Carousel.Caption className={`${caption}`}>
                <Title
                    title={title}
                    text={textTitle}
                    maMargin={maMargin}
                    size={size}
                    matext={matext}
                />
                <div className='zk-btns-div'>
                    <Button
                        img={img}
                        text={text}
                        pad={pad}
                        show={show}
                    />
                    <div>
                        <img src={plus} className='zk-btns-div-img' />
                        <img src={like} className='zk-btns-div-img' />
                        <img src={voice} className='zk-btns-div-img' />
                    </div>
                </div>
            </Carousel.Caption>
        </>
    );
}
