import "./Hero2.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import herobg from "../../assets/photos/Movies & shows page images/Hero bg.png";
import herobg2 from "../../assets/photos/Movies open page images/Hero bg.png"
import triangle from "../../assets/photos/Home page images/triangle.png";
import SlideComponent from '../../Components/SlideComponent/SlideComponent';
import { Hero2SlideData } from "../Data/Hero2SlideData";
export default function Hero2() {
  return (
    <>
      <div className="zk-container zk-hero">
        <Carousel className="zk-carousel">
          {Hero2SlideData.map((e, index) => {
            return (
              <Carousel.Item className="slide">
                <SlideComponent
                  key={index}
                  imgHero={e.imgHero}
                  title={e.title}
                  textTitle={e.textTitle}
                  size={e.size}
                  maMargin={e.maMargin}
                  matext={e.matext}
                  pad={e.pad}
                  text={e.text}
                  img={e.img}
                  show={e.show}
                />
              </Carousel.Item>
            )

          })}
        </Carousel>
      </div>

    </>
  );
}


{/* <Carousel.Item className="slide">
            <SlideComponent
              imgHero={herobg}
              title={"Avengers:Endgame"}
              textTitle={"With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen."}
              size={true}
              maMargin={true}
              matext={"zk-text"}
              pad={"zk-pad"}
              text={"Play Now"}
              img={triangle}
              show={true}
            />
            </Carousel.Item>
            <Carousel.Item className="slide">
            <SlideComponent
              imgHero={herobg2}
              title={"Avengers:Endgame"}
              textTitle={"With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen."}
              size={true}
              maMargin={true}
              matext={"zk-text"}
              pad={"zk-pad"}
              text={"Play Now"}
              img={triangle}
              show={true}
            />
            </Carousel.Item>
            <Carousel.Item className="slide">
            <SlideComponent
              imgHero={herobg}
              title={"Avengers:Endgame"}
              textTitle={"With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen."}
              size={true}
              maMargin={true}
              matext={"zk-text"}
              pad={"zk-pad"}
              text={"Play Now"}
              img={triangle}
              show={true}
            />
             
            </Carousel.Item>
            <Carousel.Item className="slide">
            <SlideComponent
              imgHero={herobg}
              title={"Avengers:Endgame"}
              textTitle={"With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen."}
              size={true}
              maMargin={true}
              matext={"zk-text"}
              pad={"zk-pad"}
              text={"Play Now"}
              img={triangle}
              show={true}
            />
            </Carousel.Item>*/}
