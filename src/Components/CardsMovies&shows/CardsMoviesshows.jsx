import React from 'react'
import './CardsMoviesshows.css'
import CustomSlider from "../Slider/Slider";
import Card from "../../Components/CardTrinding/Card";
import CardWatchMovies from "../../Components/CardWatchMovies/CardWatchMovies";
import { CardReleasedShwos, cardsDataNewReleases, cardsDataTrending, CardShwos, CardWatchMoviesData, CardWatchMoviesData2 } from '../Data/CardmoviesData';

function CardsMoviesshows() {

  return (
    <div className='cards-container-zq' >
    
      <div className="cards-container">
      <CustomSlider
          cardData={cardsDataTrending}
          lgSize={5}
          title="New Released Shows"
          text=""
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
          text=""
          cardGroup="card-group-zq"
          upperMb="to-slider-upper-mb"
          cardType={"cardsDataNewReleases"}
        />
      </div>
      <div className="cards-container">
      <CustomSlider
          cardData={CardWatchMoviesData}
          lgSize={5}
          title="New Released Shows"
          text=""
          cardGroup="card-group-zq"
          upperMb="to-slider-upper-mb"
          cardType={"CardWatchMoviesData"}
        />
      </div>
        
      <div className='cards-container'>
        <CustomSlider
          cardData={CardReleasedShwos}
          lgSize={4}
          title="New Released Shows"
          text=""
          cardGroup="card-group-zq"
          upperMb="to-slider-upper-mb"
          cardType={"ReleasedShwos"}
        />
      </div>


      <div className="cards-container">
      <CustomSlider
          cardData={CardShwos}
          lgSize={4}
          title="New Released Shows"
          text=""
          cardGroup="card-group-zq"
          upperMb="to-slider-upper-mb"
          cardType={"CardShwos"}
        />
      </div>
      <div className="cards-container">
      <CustomSlider
          cardData={CardWatchMoviesData2}
          lgSize={4}
          title="New Released Shows"
          text=""
          cardGroup="card-group-zq"
          upperMb="to-slider-upper-mb"
          cardType={"CardWatchMoviesData2"}
        />
      </div>
    </div>
  )
}

export default CardsMoviesshows