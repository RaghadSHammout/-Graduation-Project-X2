import React from 'react';
import "./Card.css";
export default function Card({ image, views, duration , releaseDate,iconViews,iconDuration }) {
  return (
    <div className='card-zq'>

      <div className='zq-imgcard'>
        <img className='imgcard-zq' src={image} alt="Card Image" />
      </div>

      <div className='conterCard-zq'>
      {duration && (
        <div className='durationcard-zq'>
          <img src={iconDuration} alt="Card Image durationcard" />
          <p>{duration}</p>
        </div>
      )} 
      
      {views &&(
        <div className='viewcard-zq'>
          <img src={iconViews} alt="Card Image views" />
          <p>{views}</p>
        </div>
      )}

{ releaseDate && (
        <div className=' releaseDatecard-zq'>
            <p>Released at</p>
          <span>{ releaseDate}</span>
        </div>
      )}
    
      </div>
       
    </div>
  );
}



