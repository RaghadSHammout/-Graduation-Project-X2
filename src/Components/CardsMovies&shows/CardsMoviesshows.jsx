import "./CardsMoviesshows.css";
import React from "react";
import CustomSlider from "../Slider/Slider";
import {cardsDataReleasesMovies , cardsDataTrendingMovies ,CardDataWatchMovies} from"../Data/CardmoviesData";
import {CardDataMustWatchShows,CardDataReleasedShows,CardDataTrendingShows} from "../Data/CardShowData";
import {cardData, cardDataShows } from "../Data/toCardData";
import  { cardData2, cardData2Shows }from "../Data/toPopularData";
import NotButton from "../notButton/notButton";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function CardsMoviesshows() {
  const location = useLocation();
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    handleScrollToHash();
    window.addEventListener("hashchange", handleScrollToHash);
    return () => {
      window.removeEventListener("hashchange", handleScrollToHash);
    };
  }, [location]);

  const { id } = useParams();

  const [ActiveTab, setActiveTab] = useState("Movies");

  return (
    <section className="cards-container-zq home-padding">
      
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
      >
        <NotButton
          div="moviesNotButton"
          divText="moviesNotButtonText"
          text="Movies"
        />
        <div className="cards-container" id="genres">
          <CustomSlider
            cardData={cardData}
            lgSize={5}
            title="Our Genres"
            text=""
            cardGroup="card-group"
            upperMb="to-slider-upper-mb"
            cardType={"explore"}
          />
        </div>

        <div className="cards-container" id="popular">
          <CustomSlider
            cardData={cardData2}
            lgSize={4}
            title="New Released Shows"
            text=""
            cardGroup="to-card-group-2"
            upperMb="to-slider-upper-mb"
            cardType={"exploreTop10"}
            cardWidth="explore-card-2"
          />
        </div>

        <div className="cards-container" id="trending">
          <CustomSlider
            cardData={cardsDataTrendingMovies}
            lgSize={5}
            title="New Released Shows"
            text=""
            cardGroup="card-group-zq"
            upperMb="to-slider-upper-mb"
            cardType={"cardsDataTrendingMovies"}
          />
        </div>

        <div className="cards-container" id="new-release">
          <CustomSlider
            cardData={cardsDataReleasesMovies}
            lgSize={5}
            title="New Released Shows"
            text=""
            cardGroup="card-group-zq1"
            upperMb="to-slider-upper-mb"
            cardType={"cardsDataReleasesMovies"}
          />
        </div>

        <div className="cards-container">
          <CustomSlider
            cardData={CardDataWatchMovies}
            lgSize={4}
            title="Must - Watch Movies"
            text=""
            cardGroup="card-group-zq2"
            upperMb="to-slider-upper-mb"
            cardType={"CardDataWatchMovies"}
          />
        </div>
      </div>


      <div
        className={`containers-container ${
          ActiveTab !== "Shows" ? "displayDiv" : ""
        }`}
      >
        <NotButton
          div="moviesNotButton"
          divText="moviesNotButtonText"
          text="Shows"
        />
        <div className="cards-container" id="genres-Shows">
          <CustomSlider
           cardData={cardDataShows}
           lgSize={5}
           title="Our Genres"
           text=''
           cardGroup="to-card-group-2"
           upperMb="to-slider-upper-mb2"
           cardType={"explore"}
           cardWidth="MS-explore-card"
           isThereText={false}
          //  customIndicatorsSml="custom-indicators-sml2"
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
            //  customIndicatorsSml="custom-indicators-sml2"
             padding="explore-card-padding2"
          />
        </div>
        <div className="cards-container" id="trending-Shows">
          <CustomSlider
             cardData={CardDataReleasedShows}
             lgSize={4}
             title="New Released Shows"
             cardGroup="card-group-zq3"
             upperMb="to-slider-upper-mb"
             cardType={"ReleasedShwos"}
             isThereText={false}
            // customIndicatorsSml="custom-indicators-sml2"
          />
        </div>

        <div className="cards-container" id="new-release-Shows">
          <CustomSlider
          cardData={CardDataTrendingShows}
          lgSize={4}
          title="New Released Shows"
          cardGroup="card-group-zq4"
          upperMb="to-slider-upper-mb"
          cardType={"CardShwos"}
          // cardType={"cardsDataNewReleases"}
          isThereText={false}
          // customIndicatorsSml="custom-indicators-sml2"
          />
        </div>

        <div className="cards-container">
          <CustomSlider
             cardData={CardDataMustWatchShows}
             lgSize={4}
             title="New Released Shows"
             text=''
             cardGroup="card-group-zq2"
             upperMb="to-slider-upper-mb2"
             cardType={"CardWatchMoviesData"}
             isThereText={false}
            //  customIndicatorsSml="custom-indicators-sml2"
          />
        </div>
      </div>
    </section>
  );
}

export default CardsMoviesshows;
