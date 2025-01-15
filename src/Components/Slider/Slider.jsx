import React, { useRef, useState, useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import ExploreCard from '../ExploreCard/ExploreCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import './Slider.css';
import Title from "../Title/Title";

const CustomSlider = (props) => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 991);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cardDataSubset = useMemo(() => {
        return isSmallScreen ? props.cardData.slice(0, 4) : props.cardData;
    }, [isSmallScreen, props.cardData]);

    const totalIndicators = Math.ceil(cardDataSubset.length / (isSmallScreen ? 1 : props.lgSize));

    const sliderSettings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: props.lgSize,
        slidesToScroll: props.lgSize,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
        beforeChange: (current, next) => {
            const newIndex = next % totalIndicators;
            setActiveIndex(newIndex);
        },
    };

    const renderCard = (card, index) => {
        if (props.cardType === 'movie') {
            return <MovieCard key={index} title={card.title} image={card.image} link={card.link} />;
        }
        else if (props.cardType === 'explore') {
            return <ExploreCard key={index} title={card.title} image={card.image} link={card.link} />;
        }
    };

    const handleNext = () => sliderRef.current.slickNext();
    const handlePrev = () => sliderRef.current.slickPrev();

    const handleDotClick = (index) => {
        const cardsPerIndicator = isSmallScreen ? 1 : props.lgSize;
        sliderRef.current.slickGoTo(index * cardsPerIndicator);
    };

    return (
        <div>

            <div className='slider-upper-div'>
                <Title
                    title="Explore our wide variety of categories"
                    text="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
                    size={true}
                    maMargin={true}
                />

                <div className="custom-arrows">
                    <button className="prev-arrow" onClick={handlePrev}>
                        <div className="slider-arrow-div">
                            <img className="slider-arrow-img" src="src/assets/photos/Vector 619.png" alt="Previous" />
                        </div>
                    </button>

                    <div className="custom-indicators">
                        {Array.from({ length: totalIndicators }).map((_, index) => (
                            <button
                                className={`to-indicator ${activeIndex === index ? 'active' : ''}`}
                                key={index}
                                onClick={() => handleDotClick(index)}
                            ></button>
                        ))}
                    </div>

                    <button className="next-arrow" onClick={handleNext}>
                        <div className="slider-arrow-div">
                            <img className="slider-arrow-img" src="src/assets/photos/Vector 619.png" alt="Next" />
                        </div>
                    </button>
                </div>
            </div>

            <Slider key={isSmallScreen ? 'small-screen' : 'large-screen'} ref={sliderRef} {...sliderSettings}>
                {cardDataSubset.map((card, index) => renderCard(card, index))}
            </Slider>
        </div>
    );
};

CustomSlider.defaultProps = {
    cardData: [],
    lgSize: 5,
    cardType: 'explore',
};

CustomSlider.propTypes = {
    cardData: PropTypes.array.isRequired,
    lgSize: PropTypes.number,
    cardType: PropTypes.string,
};

export default CustomSlider;
