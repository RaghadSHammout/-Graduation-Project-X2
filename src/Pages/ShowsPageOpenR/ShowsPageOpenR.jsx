import './ShowsPageOpenR.css'
import Seasons from "../../Components/Seasons/Seasons"
import Reviews from "../../Components/Reviews/Reviews";
import Description from "../../Components/Description/Description";
import CastCarousel from "../../Components/CastCarousel/CastCarousel";
 import {CardDataMustWatchShows,CardDataReleasedShows,CardDataTrendingShows} from "../../Components/Data/CardShowData";
 import {cardDataShows} from "../../Components/Data/toCardData"
 import { cardData2Shows} from "../../Components/Data/toPopularData"
import { CastImages } from "../../Components/Data/CardImages";
import {useParams } from "react-router-dom";
import ReleasedYear from "../../Components/ReleasedYear/ReleasedYear"
import img11 from "../../assets/photos/Shows open page images/Director img.png"
import img12 from "../../assets/photos/Shows open page images/Music img.png"
import ShowOpenHero from '../../Components/ShowOpenHero/ShowOpenHero';
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
export default function ShowsPageOpenR() {
  const { id } = useParams();
  const show =
    CardDataMustWatchShows.find((item) => item.id === parseInt(id)) ||
    CardDataReleasedShows.find((item) => item.id === parseInt(id)) ||
    CardDataTrendingShows.find((item) => item.id === parseInt(id))||
    cardDataShows.find((item) => item.id === parseInt(id)) ||
    cardData2Shows.find((item) => item.id === parseInt(id))
  if (!show) return <h2>Movie not found</h2>;
  return (
    <>
    <Navbar/>
      <ShowOpenHero show = {show} />
      <section className="ma-section-show Desktop-padding-left-right explore-m-bot home-padding">
        <div className="ma-sec-div-one">
          <div className="ma-div-show ma-margin-30 ma-div-Seasons ">
            <Seasons />
          </div>
          <div className="ma-div-show ma-margin-30 ">
            <Description
              title={"Description"}
              text={
                "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
              }
            />
          </div>
          <div className="ma-div-show ma-margin-30  ma-div-CastCarousel">
            <CastCarousel lunaPad={true} CastImages={CastImages} />
          </div>
          <div className="ma-div-show ma-div-CastCarousel">
            <Reviews cardGroup={"reviews-card-group"} />
          </div>
        </div>
        <div className="ma-sec-div-two">
          <ReleasedYear
            Director={img11}
            Music={img12}
            titleOne={"The Duffer Brothers"}
            textOne={"From USA"}
            titleTwo={"Kyle Dixon"}
            textTwo={"From USA"}
          />
        </div>
        <div className="ma-addition-show">
          <div className="ma-div-show ma-margin-30">
            <CastCarousel lunaPad={true} CastImages={CastImages} />
          </div>
          <div className="ma-div-show">
            <Reviews cardGroup={"reviews-card-group"} />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

