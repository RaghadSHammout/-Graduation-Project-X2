
import './ShowsPageOpenR.css'
import ShowOpenHero from '../../Components/MoviesOpenHero/MoviesOpenHero'
import Seasons from "../../Components/Seasons/Seasons"
import Reviews from "../../Components/Reviews/Reviews";
import Description from "../../Components/Description/Description";
import CastCarousel from "../../Components/CastCarousel/CastCarousel";
import { CastImages } from "../../Components/Data/CardImages";
import ReleasedYear from "../../Components/ReleasedYear/ReleasedYear"
import img11 from "../../assets/photos/Shows open page images/Director img.png"
import img12 from "../../assets/photos/Shows open page images/Music img.png"
export default function ShowsPageOpenR() {
  return (
    <>
    <ShowOpenHero/>
      <section className="ma-section-show Desktop-padding-left-right">
        <div className="ma-sec-div-one">
          <div className="ma-div-show ma-margin-30 ma-div-Seasons ">
            <Seasons/>
          </div>
          <div className="ma-div-show ma-margin-30 ">
            <Description
              title = {"Description"} 
              text = {"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."}
              />
          </div>
          <div className="ma-div-show ma-margin-30  ma-div-CastCarousel">
            <CastCarousel
                lunaPad ={true}
                CastImages={CastImages}
              />
          </div>
            <div className="ma-div-show ma-div-CastCarousel">
              <Reviews
                cardGroup={"reviews-card-group"} 
              />
            </div>
        </div>
        <div  className="ma-sec-div-two">
          <ReleasedYear
            Director= {img11}
            Music = {img12}
            titleOne = {"The Duffer Brothers"}
            textOne = {"From USA"}
            titleTwo = {"Kyle Dixon"}
            textTwo = {"From USA"}          
          />
        </div>
        <div className="ma-addition-show">
          <div className="ma-div-show ma-margin-30">
            <CastCarousel
              lunaPad ={true}
              CastImages={CastImages}
            />
          </div>
          <div className="ma-div-show">
            <Reviews
              cardGroup={"reviews-card-group"} 
            />
          </div>
        </div>
      </section>
    </>
  )
}

