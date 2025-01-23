import React from 'react'

import Card from "../../Components/CardTrinding/Card";
import CardWatchMovies from "../../Components/CardWatchMovies/CardWatchMovies";
import { CardReleasedShwos, cardsDataNewReleases, cardsDataTrending, CardShwos, CardWatchMoviesData, CardWatchMoviesData2 } from '../Data/CardmoviesData';

function CardsMoviesshows() {
  return (
    <div>
      <div className="cards-container">
              {CardReleasedShwos?.map((movie, index) => (
                <Card
                  key={index}
                  image={movie.image}
                  cardShow_zq={movie.cardShow_zq}
                  viewcardShow_zq={movie.viewcardShow_zq}
                  iconDuration={movie.iconDuration}
                  duration={movie.duration}
                  durationcard_zq={movie.durationcard_zq}
                  iconViews={movie.iconViews}
                  views={movie.views}
                />
              ))}
            </div>
      
            <div className="cards-container">
              {CardShwos?.map((movie, index) => (
                <Card
                  key={index}
                  image={movie.image}
                  cardShow_zq={movie.cardShow_zq}
                  viewcardShow_zq={movie.viewcardShow_zq}
                  iconDuration={movie.iconDuration}
                  duration={movie.duration}
                  iconViews={movie.iconViews}
                  views={movie.views}
                />
              ))}
            </div>
            <div className="cards-container">
              {CardWatchMoviesData2?.map((movie) => (
                <CardWatchMovies
                  key={movie.id}
                  id={movie.id}
                  image={movie.image}
                  duration={movie.duration}
                  star={movie.star}
                  Date={movie.Date}
                />
              ))}
            </div>
            <div className="cards-container">
              {cardsDataTrending?.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  views={card.views}
                  duration={card.duration}
                  iconViews={card.iconViews}
                  iconDuration={card.iconDuration}
                />
              ))}
            </div>
            <div className="cards-container">
              {cardsDataNewReleases?.map((card, index) => (
                <Card key={index} image={card.image} releaseDate={card.releaseDate} />
              ))}
            </div>
            <div className="cards-container">
              {CardWatchMoviesData?.map((movie) => (
                <CardWatchMovies
                  key={movie.id}
                  id={movie.id}
                  image={movie.image}
                  duration={movie.duration}
                  star={movie.star}
                  Date={movie.Date}
                />
              ))}
            </div>
    </div>
  )
}

export default CardsMoviesshows