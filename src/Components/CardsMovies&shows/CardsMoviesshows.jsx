import React from 'react'
import './CardsMoviesshows.css'
import CustomSlider from "../Slider/Slider";
import { CardReleasedShwos, cardsDataNewReleases, cardsDataTrending, CardShwos, CardWatchMoviesData, CardWatchMoviesData2 } from '../Data/CardmoviesData';
import cardData from '../Data/toCardData';
import cardData2 from '../Data/toPopularData';
import NotButton from '../notButton/notButton';
import { useLocation } from 'react-router-dom';
import { useEffect} from 'react'

function CardsMoviesshows() {

  const location = useLocation(); 
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        }
      }
    };
    handleScrollToHash();
    window.addEventListener('hashchange', handleScrollToHash);
    return () => {
      window.removeEventListener('hashchange', handleScrollToHash);
    };
  }, [location]);
  return (
    <section className='cards-container-zq home-padding' >
      <div className="containers-container">
        <NotButton div="moviesNotButton" divText="moviesNotButtonText" text="Movies" />
        <div className="cards-container" id='genres'>
          <CustomSlider
            cardData={cardData}
            lgSize={5}
            title="Our Genres"
            text=''
            cardGroup="card-group"
            upperMb="to-slider-upper-mb"
            cardType={"explore"}
          />
          
        </div>

        <div className="cards-container" id='popular' >
          <CustomSlider
            cardData={cardData2}
            lgSize={4}
            title="Popular Top 10 In Genres"
            text=''
            cardGroup="to-card-group-2"
            upperMb="to-slider-upper-mb"
            cardType={"exploreTop10"}
            cardWidth="explore-card-2"
          />
        </div>

        <div className="cards-container" id='trending' >
          <CustomSlider
            cardData={cardsDataTrending}
            lgSize={5}
            title="Trending Now"
            text=''
            cardGroup="card-group-zq"
            upperMb="to-slider-upper-mb"
            cardType={"cardsDataTrending"}
          />
        </div>

        <div className="cards-container" id='new-release'>
          <CustomSlider
            cardData={cardsDataNewReleases}
            lgSize={5}
            title="New Releases"
            text=''
            cardGroup="card-group-zq1"
            upperMb="to-slider-upper-mb"
            cardType={"cardsDataNewReleases"}
          />
        </div>

        <div className="cards-container">
          <CustomSlider
            cardData={CardWatchMoviesData}
            lgSize={4}
            title="Must - Watch Movies"
            text=''
            cardGroup="card-group-zq2"
            upperMb="to-slider-upper-mb"
            cardType={"CardWatchMoviesData"}
          />
        </div>
      </div>


      <div className="containers-container">
        <NotButton div="moviesNotButton" divText="moviesNotButtonText" text="Shows" />
        <div className="cards-container"  id='genres-Shows'>
          <CustomSlider
            cardData={cardData}
            lgSize={5}
            title="Our Genres"
            cardGroup="card-group"
            upperMb="to-slider-upper-mb"
            cardType={"explore"}
          />
        </div>

        <div className="cards-container" id='popular-Shows'>
          <CustomSlider
            cardData={cardData2}
            lgSize={4}
            title="Popular Top 10 In Genres"
            cardGroup="to-card-group-2"
            upperMb="to-slider-upper-mb"
            cardType={"exploreTop10"}
            cardWidth="explore-card-2"
          />
        </div>
        <div className='cards-container'  id='trending-Shows'>
        <CustomSlider
            cardData={CardShwos}
            lgSize={4}
            title="Trending Shows Now"
            cardGroup="card-group-zq4"
            upperMb="to-slider-upper-mb"
            cardType={"CardShwos"}
          />
         
        </div>

        <div className="cards-container" id='new-release-Shows' >
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
            cardData={CardWatchMoviesData2}
            lgSize={4}
            title="Must - Watch Shows"
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