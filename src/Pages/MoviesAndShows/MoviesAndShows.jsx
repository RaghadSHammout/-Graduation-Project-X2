import "./MoviesAndShows.css";
// import { Outlet } from 'react-router-dom';

import CardsMoviesshows from "../../Components/CardsMovies&shows/CardsMoviesshows";
import Hero2 from "../../Components/Hero2/Hero2";

export default function MoviesAndShows() {
 
  return (
    <>
    
     <Hero2/>
      <CardsMoviesshows/>
    </>

  );
}
