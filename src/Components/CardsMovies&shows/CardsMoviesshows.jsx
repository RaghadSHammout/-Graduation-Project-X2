import "./CardsMoviesshows.css";
import {cardsDataReleasesMovies , cardsDataTrendingMovies ,CardDataWatchMovies} from"../Data/CardmoviesData";
import {CardDataMustWatchShows,CardDataReleasedShows,CardDataTrendingShows} from "../Data/CardShowData";
import cardData from "../Data/toCardData";
import cardData2 from "../Data/toPopularData";
import NotButton from "../notButton/notButton";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import React from 'react'
import './CardsMoviesshows.css'
import CustomSlider from "../Slider/Slider";
import Card from "../../Components/CardTrinding/Card";
import CardWatchMovies from "../../Components/CardWatchMovies/CardWatchMovies";
import {
  CardReleasedShwos,
  cardsDataNewReleases,
  cardsDataTrending,
  CardShwos,
  CardWatchMoviesData,
  CardWatchMoviesData2
} from '../Data/CardmoviesData';
import { cardData, cardDataShows } from '../Data/toCardData';
import { cardData2, cardData2Shows } from '../Data/toPopularData';
import NotButton from '../notButton/notButton';

import { useParams } from "react-router-dom";

function CardsMoviesshows() {
  const { id } = useParams();
  return (
    <section className='cards-container-zq home-padding'>
     <div className="Tabs-container">
        <button
          className={`${ActiveTab === "Movies" ? "LActive" : "Dis-LActive"}`}
          onClick={() => setActiveTab("Movies")}
        >
          Movies
        </button>
        <button
          className={`${ActiveTab === "Shows" ? "LActive" : "Dis-LActive"}`}
          onClick={() => setActiveTab("Shows")}
        >
          Shows
        </button>
      </div>
      
  <div
        className={`containers-container ${
          ActiveTab !== "Movies" ? "displayDiv" : " "
        }`}
      >        <NotButton div="moviesNotButton" divText="moviesNotButtonText" text="Movies" />
        <div className="cards-container" id="genres">
          <CustomSlider
            cardData={cardData}
            lgSize={5}
            title="Our Genres"
            text=''
            cardGroup="card-group-2"
            upperMb="to-slider-upper-mb2"
            cardType={"explore"}
            cardWidth="MS-explore-card"
            isThereText={false}
            customIndicatorsSml="custom-indicators-sml2"
            padding="MS-explore-card-padding"
          />
        </div>

        <div className="cards-container" id="popular">
          <CustomSlider
            cardData={cardData2}
            lgSize={4}
            title="New Released Shows"
            text=''
            cardGroup="to-card-group-2"
            upperMb="to-slider-upper-mb2"
            cardType={"exploreTop10"}
            cardWidth="explore-card-2"
            isThereText={false}
            customIndicatorsSml="custom-indicators-sml2"
            padding="explore-card-padding2"
          />
        </div>

        <div className="cards-container"  id="trending">
          <CustomSlider
            cardData={cardsDataTrending}
            lgSize={5}
            title="New Released Shows"
            text=''
            cardGroup="card-group-zq"
            upperMb="to-slider-upper-mb2"
            cardType={"cardsDataTrending"}
            isThereText={false}
            customIndicatorsSml="custom-indicators-sml2"
          />
        </div>

        <div className="cards-container" id="new-release" >
          <CustomSlider
            cardData={cardsDataNewReleases}
            lgSize={5}
            title="New Released Shows"
            text=''
            cardGroup="card-group-zq1"
            upperMb="to-slider-upper-mb2"
            cardType={"cardsDataNewReleases"}
            isThereText={false}
            customIndicatorsSml="custom-indicators-sml2"
          />
        </div>

        <div className="cards-container" id="new-release">
          <CustomSlider
            cardData={CardWatchMoviesData}
            lgSize={4}
            title="New Released Shows"
            text=''
            cardGroup="card-group-zq2"
            upperMb="to-slider-upper-mb2"
            cardType={"CardWatchMoviesData"}
            isThereText={false}
            customIndicatorsSml="custom-indicators-sml2"
          />
        </div>
      </div>


 <div
        className={`containers-container ${
          ActiveTab !== "Shows" ? "displayDiv" : ""
        }`}
      >        <NotButton div="moviesNotButton" divText="moviesNotButtonText" text="Shows" />
        <div className="cards-container" id="genres-Shows">
          <CustomSlider
            cardData={cardDataShows}
            lgSize={5}
            title="Our Genres"
            text=''
            cardGroup="card-group-2"
            upperMb="to-slider-upper-mb2"
            cardType={"explore"}
            cardWidth="MS-explore-card"
            isThereText={false}
            customIndicatorsSml="custom-indicators-sml2"
            padding="MS-explore-card-padding"
            
          />
        </div>

        <div className="cards-container" id="popular-Shows">
          <CustomSlider
            cardData={cardData2Shows}
            lgSize={4}
            title="New Released Shows"
            text=''
            cardGroup="to-card-group-2"
            upperMb="to-slider-upper-mb2"
            cardType={"exploreTop10"}
            cardWidth="explore-card-2"
            isThereText={false}
            customIndicatorsSml="custom-indicators-sml2"
            padding="explore-card-padding2"
          />
        </div>

        <div className="cards-container" id="trending-Shows">
          <CustomSlider
            cardData={cardsDataTrending}
            lgSize={5}
            title="New Released Shows"
            text=''
            cardGroup="card-group-zq"
            upperMb="to-slider-upper-mb2"
            cardType={"cardsDataTrending"}
            isThereText={false}
            customIndicatorsSml="custom-indicators-sml2"
          />
        </div>

        <div className="cards-container" id="new-release-Shows">
          <CustomSlider
            cardData={cardsDataNewReleases}
            lgSize={5}
            title="New Released Shows"
            text=''
            cardGroup="card-group-zq1"
            upperMb="to-slider-upper-mb2"
            cardType={"cardsDataNewReleases"}
            isThereText={false}
            customIndicatorsSml="custom-indicators-sml2"
          />
        </div>

        <div className="cards-container">
          <CustomSlider
            cardData={CardWatchMoviesData}
            lgSize={4}
            title="New Released Shows"
            text=''
            cardGroup="card-group-zq2"
            upperMb="to-slider-upper-mb2"
            cardType={"CardWatchMoviesData"}
            isThereText={false}
            customIndicatorsSml="custom-indicators-sml2"
          />
        </div>
      </div>

    </section>
  )
}

export default CardsMoviesshows