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
  Date,
  routePath
}) {
  return (

    <div>
      <Link to={`${routePath}${id}`} className="card">
        <img className="cardImage" src={image} alt="Card Image" />
        <div className="ha-container">
          <div className={`sub-container1 ${sub1_width}`}>
            <i className="icon-clock">
              <img className="clock" src={clock} alt="Card Image" />
            </i>
            <p className="text">{duration}</p>
          </div>
          <div className="sub-container2">
            <i className="icon-star">
              <img src={star} alt="Card Image" />
            </i>
            <p className="text2">{Date}</p>
          </div>
        </div>
      </Link>
    </div>

  );
}
<Outlet />
export default CardWatchMovies;

