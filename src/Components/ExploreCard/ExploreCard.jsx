import React from 'react';
import './ExploreCard.css';
import arrow from '../../assets/photos/Vector 619.png';
import { Link } from 'react-router-dom';
import NotButton from '../notButton/notButton';
function ExploreCard({ image, title, link, isTop10, cardWidth }) {
    return (
        <div className={`explore-card d-flex flex-column  ${cardWidth}`}>
            <Link>
                <div className='explore-card-padding w-100'>
                    <img src={image} alt={title} className="explore-card-image" />
                    <div className="explore-card-content d-flex justify-content-between align-items-center">
                        <div className='d-flex flex-column btn-h-gap '>

                            {isTop10 && (
                                <NotButton />
                            )}

                            <h3 className="explore-card-title d-inline-block">{title}</h3>
                        </div>

                        <div href={link} className="explore-card-link">
                            <img className='arrow' src={arrow} alt="arrow" />
                        </div>
                    </div>
                </div>
            </Link>


        </div>
    );
};
ExploreCard.defaultProps = {
    isTop10: false,
};
export default ExploreCard;