import "./MoviesPageOpenR.css"
import MoviesOpenHero from '../../Components/MoviesOpenHero/MoviesOpenHero'
import {cardsDataReleasesMovies , cardsDataTrendingMovies ,CardDataWatchMovies} from"../../Components/Data/CardmoviesData"
import {cardData} from "../../Components/Data/toCardData"
import {cardData2} from "../../Components/Data/toPopularData"
import Description from "../../Components/Description/Description"
import CastCarousel from "../../Components/CastCarousel/CastCarousel"
import Reviews from "../../Components/Reviews/Reviews"
import ReleasedYear from "../../Components/ReleasedYear/ReleasedYear"
import img11 from "../../assets/photos/Movies open page images/Director img.png"
import img12 from "../../assets/photos/Movies open page images/Music img.png"
import { CastImages } from "../../Components/Data/CardImages"
import {  Outlet, useParams } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

export default function MoviesPageOpenR() {
  const { id } = useParams();
  const movie = cardsDataReleasesMovies.find((item) => item.id === parseInt(id)) ||
                 cardsDataTrendingMovies.find((item) => item.id === parseInt(id)) ||
                 CardDataWatchMovies.find((item) => item.id === parseInt(id)) ||
                 cardData.find((item) => item.id === parseInt(id)) ||
                 cardData2.find((item) => item.id === parseInt(id))

   if (!movie) return <h2>Movie not found</h2> ;
  return (
    <>
    <Navbar/>
    <MoviesOpenHero movie = {movie} />
    <section className="ma-sec-all Desktop-padding-left-right explore-m-bot">
        <div className="ma-sec-left">
          <div className="ma-Description ma-hover">
            <Description
            title = {"Description"} 
            text = {"A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands."}
            />
          </div>
          <div className="ma-CastCarousel ma-hover"> 
            <CastCarousel
              lunaPad ={true}
              CastImages={CastImages}
             />
          </div>
          <div className="ma-Reviews ma-hover"> 
            <Reviews
            cardGroup={"reviews-card-group"} />
          </div>
        </div>
        <div className="ma-sec-right">
          <ReleasedYear
            Director= {img11}
            Music = {img12}
            titleOne = {"Rishab Shetty"}
            textOne = {"From India"}
            titleTwo = {"B. Ajaneesh Loknath"}
            textTwo = {"From India"}
          />
        </div>
        <div className="ma-addition">
        <div className="ma-CastCarousel ma-hover"> 
            <CastCarousel
              lunaPad ={true}
              CastImages={CastImages}
             />
          </div>
          <div className="ma-Reviews ma-hover"> 
            <Reviews/>
          </div>
        </div>
      </section>
      <Footer/>
      <Outlet/>
      
    </>
  )
}
