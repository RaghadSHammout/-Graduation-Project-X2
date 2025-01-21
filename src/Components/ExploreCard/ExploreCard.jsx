import React from 'react';
import './ExploreCard.css';

function ExploreCard({ image, title, link }) {
    return (
        <div className="explore-card d-flex flex-column">
            <div className='explore-card-padding w-100'>
                <img src={image} alt={title} className="explore-card-image" />
                <div className="explore-card-content d-flex justify-content-between align-items-center">

                    <div className='d-flex flex-column btn-h-gap '>
                       
                        <h3 className="explore-card-title d-inline-block">{title}</h3>
                    </div>

                    <a href={link} className="explore-card-link d-inline-block d-flex justify-content-center align-items-center">
                        <img className='arrow' src="src/assets/photos/Vector 619.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ExploreCard;