import React from 'react';
import "./Card.css";
export default function Card({ image, views, duration , releaseDate,iconViews,iconDuration,cardShow_zq,viewcardShow_zq,durationcardStyle  }) {
  return (
    <div className={`card-zq ${cardShow_zq}`}>

      <div className='zq-imgcard'>
        <img className='imgcard-zq' src={image} alt="Card Image" />
      </div>

      <div className='conterCard-zq'>
      {duration && (
        <div className="durationcard-zq ">
          <img src={iconDuration} alt="Card Image durationcard" />
          <p className='pa-zq'>{duration}</p>
        </div>
      )} 
      
      {views &&(
        <div className={`viewcard-zq ${viewcardShow_zq}`}>
          <img src={iconViews} alt="Card Image views" />
          <p className='pa-zq'>{views}</p>
        </div>
      )}

{ releaseDate && (
        <div className=' releaseDatecard-zq'>
            <p className='pa-zq'>Released at</p>
          <span>{ releaseDate}</span>
        </div>
      )}
    
      </div>
       
    </div>
  );
}



