import React, { useState }  from 'react';
import "./Card.css";
import { NavLink  } from "react-router-dom";

export default function Card({routePath, id,image, views, duration , releaseDate,iconViews,iconDuration,cardShow_zq,viewcardShow_zq,durationcardStyle  }) {

  return (
       <NavLink to={`${routePath}${id}`}  
       >
       
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
                  <p className='pa-zq'>Released at <span>{ releaseDate}</span> </p>
              </div>
            )}

          </div>
            
          </div>
       </NavLink>
  );
}




