import React from "react";
import "./CardWatchMovies.css";
import clock from "../../assets/photos/Movies & shows page images/clock.png";
import { Link, Outlet } from "react-router-dom";




function CardWatchMovies({
  id,
  image,
  duration,
  star,
  sub1_width,
  sub2_width,
 Date
}) {
  return (
  
   <div>
      <Link to={`/MoviesAndShows/MoviesPageOpen/movie/${id}`} className="card">
      <img className="cardImage" src={image} alt="Card Image" />
      <div className="ha-container">
        <div className={`sub-container1 ${sub1_width}`}>
          <i className="icon-clock">
            <img className="clock" src={clock} alt="Card Image" />
          </i>
          <p className="text">{duration}</p>
        </div>
        <div className={`sub-container2 ${sub2_width ? "sub2-width" : ""}`}>
          <i className="icon-star">
            <img className="icon-star-zq" src={star} alt="Card Image" />
          </i>
          <p className="text2">{Date}</p>
        </div>
      </div>
    </Link>
   </div>
   
  );
}
<Outlet/>
export default CardWatchMovies;

