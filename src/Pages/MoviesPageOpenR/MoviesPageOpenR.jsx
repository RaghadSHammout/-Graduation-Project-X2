import "./MoviesPageOpenR.css"
import MoviesOpenHero from '../../Components/MoviesOpenHero/MoviesOpenHero'
import Description from "../../Components/Description/Description"
import CastCarousel from "../../Components/CastCarousel/CastCarousel"
import Reviews from "../../Components/Reviews/Reviews"
import ReleasedYear from "../../Components/ReleasedYear/ReleasedYear"
import img11 from "../../assets/photos/Movies open page images/Director img.png"
import img12 from "../../assets/photos/Movies open page images/Music img.png"
import { CastImages } from "../../Components/Data/CardImages";
import {  Outlet, useParams } from "react-router-dom";

export default function MoviesPageOpenR() {
  const { id } = useParams();
  return (
    <>
    <MoviesOpenHero/>
    <section className="ma-sec-all Desktop-padding-left-right">
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
             npm i framer-motion
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
      <Outlet/>
      
    </>
  )
}
