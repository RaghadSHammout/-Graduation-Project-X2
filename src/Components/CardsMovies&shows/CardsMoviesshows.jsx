import React from 'react'
import './CardsMoviesshows.css'
import CustomSlider from "../Slider/Slider";
import Card from "../../Components/CardTrinding/Card";
import CardWatchMovies from "../../Components/CardWatchMovies/CardWatchMovies";
import { CardReleasedShwos, cardsDataNewReleases, cardsDataTrending, CardShwos, CardWatchMoviesData, CardWatchMoviesData2 } from '../Data/CardmoviesData';
import cardData from '../Data/toCardData';
import cardData2 from '../Data/toPopularData';
import NotButton from '../notButton/notButton';

function CardsMoviesshows() {

  return (
    <section className='cards-container-zq home-padding' >
      <div className="containers-container">
        <NotButton div="moviesNotButton" divText="moviesNotButtonText" text="Movies" />
        <div className="cards-container">
          <CustomSlider
            cardData={cardData}
            lgSize={5}
            title="Our Genres"
            cardGroup="card-group"
            upperMb="to-slider-upper-mb"
            cardType={"explore"}
          />
        </div>

        <div className="cards-container">
          <CustomSlider
            cardData={cardData2}
            lgSize={4}
            title="New Released Shows"
            cardGroup="to-card-group-2"
            upperMb="to-slider-upper-mb"
            cardType={"exploreTop10"}
            cardWidth="explore-card-2"
          />
        </div>

        <div className="cards-container">
          <CustomSlider
            cardData={cardsDataTrending}
            lgSize={5}
            title="New Released Shows"
            cardGroup="card-group-zq"
            upperMb="to-slider-upper-mb"
            cardType={"cardsDataTrending"}
          />
        </div>

        <div className="cards-container">
          <CustomSlider
            cardData={cardsDataNewReleases}
            lgSize={5}
            title="New Released Shows"
            cardGroup="card-group-zq1"
            upperMb="to-slider-upper-mb"
            cardType={"cardsDataNewReleases"}
          />
        </div>

        <div className="cards-container">
          <CustomSlider
            cardData={CardWatchMoviesData}
            lgSize={4}
            title="New Released Shows"
            cardGroup="card-group-zq2"
            upperMb="to-slider-upper-mb"
            cardType={"CardWatchMoviesData"}
          />
        </div>
      </div>


      <div className="containers-container">
        <NotButton div="moviesNotButton" divText="moviesNotButtonText" text="Shows" />
        <div className="cards-container">
          <CustomSlider
            cardData={cardData}
            lgSize={5}
            title="Our Genres"
            cardGroup="card-group"
            upperMb="to-slider-upper-mb"
            cardType={"explore"}
          />
        </div>

        <div className="cards-container">
          <CustomSlider
            cardData={cardData2}
            lgSize={4}
            title="New Released Shows"
            cardGroup="to-card-group-2"
            upperMb="to-slider-upper-mb"
            cardType={"exploreTop10"}
            cardWidth="explore-card-2"
          />
        </div>
        <div className='cards-container'>
          <CustomSlider
            cardData={CardReleasedShwos}
            lgSize={4}
            title="New Released Shows"
            cardGroup="card-group-zq3"
            upperMb="to-slider-upper-mb"
            cardType={"ReleasedShwos"}
          />
        </div>

        <div className="cards-container">
          <CustomSlider
            cardData={CardShwos}
            lgSize={4}
            title="New Released Shows"
            cardGroup="card-group-zq4"
            upperMb="to-slider-upper-mb"
            cardType={"CardShwos"}
          />
        </div>

        <div className="cards-container">
          <CustomSlider
            cardData={CardWatchMoviesData2}
            lgSize={4}
            title="New Released Shows"
            cardGroup="card-group-zq5"
            upperMb="to-slider-upper-mb"
            cardType={"CardWatchMoviesData2"}
          />
        </div>
      </div>
    </section>
  )
}

export default CardsMoviesshows