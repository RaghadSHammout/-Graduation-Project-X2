import "./MoviesAndShows.css";

import CardsMoviesshows from "../../Components/CardsMovies&shows/CardsMoviesshows";
import Hero2 from "../../Components/Hero2/Hero2";
import { Outlet } from "react-router-dom"
export default function MoviesAndShows() {
 
  return (
    <>
     <Hero2/>
      <CardsMoviesshows/>
      
      <Outlet />
    </>

  );
}
