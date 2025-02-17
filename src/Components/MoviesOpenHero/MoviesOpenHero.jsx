import "./MoviesOpenHero.css"
import "bootstrap/dist/css/bootstrap.min.css";
import herobg2 from "../../assets/photos/Movies open page images/Hero bg.png"
import triangle from "../../assets/photos/Home page images/triangle.png";
import SlideComponent from '../../Components/SlideComponent/SlideComponent';
export default function MoviesOpenHero({ movie }) {
  return (
    <>
      <div className="zk-container zk-hero home-padding">
        <div className="zk-carousel">
          <div className="Slide2">
            <SlideComponent
              imgHero={movie.photo}
              imgHeight={"img-hero"}
              title={movie.LqTitle}
              textTitle={"A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands."}
              size={true}
              maMargin={true}
              matext={"zk-text2"}
              pad={"zk-pad"}
              text={"Play Now"}
              img={triangle}
              show={true}
              caption={"zk-caption2"}
            />
          </div>
        </div>
      </div>

    </>
  );
}