import React from "react";
import "./CardWatchMovies.css";
import clock from "../../assets/photos/Movies & shows page images/clock.png";
import { Link } from "react-router-dom";
// import img1 from "../../assets/photos/Movies & shows page images/Must watches movies section card(1).png";
// import img2 from "../../assets/photos/Movies & shows page images/Must watches movies section card(2).png";
// import img3 from "../../assets/photos/Movies & shows page images/Must watches movies section card(3).png";
// import img4 from "../../assets/photos/Movies & shows page images/Must watches movies section card(4).png";
// import star4_5 from "../../assets/photos/Container(10).png";
// import star4 from "../../assets/photos/Container(12).png";
// const CardWatchMoviesData = [
//   {
//     id: 1,
//     image: img1,
//     sub1_width: "",
//     duration: "1h 57min",
//     sub2_width: "",
//     star: star4_5,
//   },
//   {
//     id: 2,
//     image: img2,
//     sub1_width: "sub-w-100 ",
//     duration: "1h 57min",
//     sub2_width: "sub2-width",
//     star: star4,
//   },
//   {
//     id: 3,
//     image: img3,
//     sub1_width: "sub-w-108 ",
//     duration: "1h 57min",
//     sub2_width: "",
//     star: star4_5,
//   },
//   {
//     id: 4,
//     image: img4,
//     sub1_width: "sub-w-109 ",
//     duration: "1h 57min",
//     sub2_width: "sub2-width",
//     star: star4,
//   },
// ];

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
    <Link to={`/MoviesPageOpen/movie/${id}`} className="card">
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
  );
}

export default CardWatchMovies;
