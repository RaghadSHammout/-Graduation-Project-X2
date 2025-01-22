import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PropTypes from 'prop-types';
import ExploreCard from '../ExploreCard/ExploreCard';
import Title from '../Title/Title';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';

const CustomSlider = ({ cardData, lgSize, title, text }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991);
    const [activeIndex, setActiveIndex] = useState(0);
    const [ActiveTabs, setActiveTabs] = useState("Movies");
    const swiperRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth <= 991);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const groupCards = (cards, itemsPerGroup) => {
        return cards.reduce((groups, card, index) => {
            const groupIndex = Math.floor(index / itemsPerGroup);
            if (!groups[groupIndex]) groups[groupIndex] = [];
            groups[groupIndex].push(card);
            return groups;
        }, []);
    };

    const itemsPerGroup = isSmallScreen ? 2 : lgSize;
    const slicedCards = isSmallScreen ? cardData.slice(0, 8) : cardData;
    const groupedCards = groupCards(slicedCards, itemsPerGroup).slice(0, 4);

    const handleDotClick = (index) => {
        swiperRef.current?.slideTo(index);
    };

    return (
        <div>
            <div className="slider-upper-div">
                <Title title={title} text={text} size="to-title" matext="to-text" />
                <div className="custom-arrows">
                    <button className="prev-arrow">
                        <div className="slider-arrow-div">
                            <img className="slider-arrow-img" src="src/assets/photos/Vector 619.png" alt="Previous" />
                        </div>
                    </button>
                    <div className="custom-indicators">
                        {groupedCards.map((_, index) => (
                            <button
                                key={index}
                                className={`to-indicator ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                    <button className="next-arrow">
                        <div className="slider-arrow-div">
                            <img className="slider-arrow-img" src="src/assets/photos/Vector 619.png" alt="Next" />
                        </div>
                    </button>
                </div>
            </div>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.prev-arrow',
                    nextEl: '.next-arrow',
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1}
                loop
            >
                {groupedCards.map((group, groupIndex) => (
                    <SwiperSlide key={groupIndex}>
                        <div className="card-group">
                            {group.map((card, cardIndex) => (
                                <ExploreCard
                                    key={cardIndex}
                                    title={card.title}
                                    image={card.image}
                                    link={card.link}
                                />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-indicators-sml">
                {groupedCards.map((_, index) => (
                    <button
                        key={index}
                        className={`to-indicator ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

CustomSlider.defaultProps = {
    cardData: [],
    lgSize: 5,
};

CustomSlider.propTypes = {
    cardData: PropTypes.array.isRequired,
    lgSize: PropTypes.number,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default CustomSlider;
