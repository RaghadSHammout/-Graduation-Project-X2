import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./CastCarousel.css";
import "swiper/css";
import "swiper/css/navigation";
import LeftArrow from "./../../assets/Icons/Vector 619.png";
import RightArrow from "./../../assets/Icons/Vector.png";

const CastCarousel = (props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupImages = (images, itemsPerGroup) => {
    const grouped = [];
    for (let i = 0; i < images.length; i += itemsPerGroup) {
      grouped.push(images.slice(i, i + itemsPerGroup));
    }
    return grouped;
  };

  const itemsPerGroup = isSmallScreen ? 4 : 8;
  const slicedImages = isSmallScreen
    ? props.CastImages.slice(0, 8)
    : props.CastImages;
  const groupedImages = groupImages(slicedImages, itemsPerGroup).slice(0, 4);

  return (
    <div className = {props.lunaPad? '': 'LQ-show'}>
      <div className="LQ-casting">
        <div className="lq-sub-title-icon">
          <span className="lq-mini-title">Cast</span>
          <div className="LQ-father-buttons">
            <button className="lq-left-arrow">
              <img src={LeftArrow} />
            </button>
            <button className="lq-right-arrow">
              <img src={RightArrow} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".lq-left-arrow",
            nextEl: ".lq-right-arrow",
          }}
          slidesPerView={1} 
          loop={true}
        >
          {groupedImages.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <div className="LQ-photos-container">
                {group.map((cast) => (
                  <img src={cast.image} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

CastCarousel.defaultProps = {
  CastImages: [],
};

export default CastCarousel;