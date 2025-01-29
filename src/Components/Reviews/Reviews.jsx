import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ShowCardData from '../Data/ShowCardData';
import 'swiper/css';
import 'swiper/css/navigation';
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import plus from '../../assets/Icons/icon (3).png';
import arrow from '../../assets/photos/Vector 619.png';
import '../Reviews/Reviews.css';

function Reviews({ title, text, cardGroup, upperMb }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 991);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = '.prev-arrow';
      swiperRef.current.params.navigation.nextEl = '.next-arrow';
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const groupCards = (cards, itemsPerGroup) => {
    return cards.reduce((groups, card, index) => {
      const groupIndex = Math.floor(index / itemsPerGroup);
      if (!groups[groupIndex]) groups[groupIndex] = [];
      groups[groupIndex].push(card);
      return groups;
    }, []);
  };

  const itemsPerGroup = isSmallScreen ? 1 : 2;
  const slicedCards = isSmallScreen ? ShowCardData.slice(0, 4) : ShowCardData;
  const groupedCards = groupCards(slicedCards, itemsPerGroup);

  const handleDotClick = (index) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <section className='reviews'>
      <div className='d-flex flex-column w-100 reviews-gap'>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='reviews-h'>Reviews</h5>
          <button className='reviews-btn d-flex justify-content-center align-items-center'>
            <div>
              <img className='reviews-btn-icn' src={plus} alt="plus sign" />
            </div>
            <p className='reviews-btn-p'>Add Your Review</p>
          </button>
        </div>

        <div>
          <Swiper
            modules={[Navigation]}
            navigation
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            loop
          >
            {groupedCards.map((group, groupIndex) => (
              <SwiperSlide key={groupIndex}>
                <div className={`${cardGroup}`}>
                  {group.map((card, cardIndex) => (
                    <ReviewsCard
                      key={cardIndex}
                      name={card.name}
                      description={card.description}
                      country={card.country}
                      icon={card.icon}
                      num={card.num}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="reviews-arrows">
            <button className="prev-arrow">
              <div className="reviews-arrow-div">
                <img className="reviews-arrow-img"  src={arrow} alt="Previous" />
              </div>
            </button>
            <div className="reviews-indicators">
              {groupedCards.map((_, index) => (
                <button
                  key={index}
                  className={`to-reviews-indicator ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
            <button className="next-arrow">
              <div className="reviews-arrow-div">
                <img className="reviews-arrow-img" src={arrow} alt="Next" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

Reviews.defaultProps = {
  title: '',
  text: '',
  cardGroup: '',
  upperMb: '',
};

export default Reviews;
