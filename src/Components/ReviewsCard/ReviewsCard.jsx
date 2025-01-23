import React from 'react';
import "../ReviewsCard/ReviewsCard.css";

export default function ReviewsCard({ name, description, country, icon, num }) {
  return (
    <div className="reviews-card">
      <div className="reviews-card-upper">

        <div>
          <h5 className="name">{name}</h5>
          <p className="country">{country}</p>
        </div>

        <div className="stars-div">
          <div>
            <img className='stars' src={icon} alt="" />
          </div>

          <p className="num">{num}</p>

        </div>
      </div>

      <p className="paragraph">{description}</p>
    </div>
  );
}
