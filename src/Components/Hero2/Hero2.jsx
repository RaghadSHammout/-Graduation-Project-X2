import "./Hero2.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import herobg from "../../assets/photos/Movies & shows page images/Hero bg.png";
import Title from "../Title/Title";
import Button from "../Button/Button";
import plus from "../../assets/photos/plus.png";
import voice from "../../assets/photos/voice.png";
import like from "../../assets/photos/like.png";
import triangle from "../../assets/photos/Home page images/triangle.png";
import SlideComponent from '../../Components/SlideComponent/SlideComponent';
export default function Hero2() {
  return (
    <>
      <section className="zk-hero">
        <div className="zk-container">
          <Carousel className="zk-carousel">
            <Carousel.Item className="slide">
              <img src={herobg} className=" h-100  img-hero" />
              <Carousel.Caption className="zk-caption">
                <Title
                  maMargin={true}
                  size={true}
                  title={"Avengers:Endgame"}
                  text={
                    "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.    "
                  }
                  matext={"zk-text"}
                />
                <div className="zk-btns-div">
                  {" "}
                  <Button img={triangle} text={" Play Now"}
                  pad={"zk-pad"} show={true}
                  />
                  <div>
                    <img src={plus} />
                    <img src={like} />
                    <img src={voice} />
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="slide">
              <img src={herobg} className=" h-100  img-hero" />
              <Carousel.Caption className="zk-caption">
                <Title
                  maMargin={true}
                  size={true}
                  title={"Avengers:Endgame"}
                  text={
                    "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.    "
                  }
                  matext={"zk-text"}
                />
                <div className="zk-btns-div">
                  {" "}
                  <Button img={triangle} text={" Play Now"}
                  pad={"zk-pad"} show={true}
                  />
                  <div>
                    <img src={plus} />
                    <img src={like} />
                    <img src={voice} />
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slide">
              <img src={herobg} className=" h-100  img-hero" />
              <Carousel.Caption className="zk-caption">
                <Title
                  maMargin={true}
                  size={true}
                  title={"Avengers:Endgame"}
                  text={
                    "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.    "
                  }
                  matext={"zk-text"}
                />
                <div className="zk-btns-div">
                  {" "}
                  <Button img={triangle} text={" Play Now"}
                  pad={"zk-pad"} show={true}
                  />
                  <div>
                    <img src={plus} />
                    <img src={like} />
                    <img src={voice} />
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slide">
              <img src={herobg} className=" h-100  img-hero" />
              <Carousel.Caption className="zk-caption">
                <Title
                  maMargin={true}
                  size={true}
                  title={"Avengers:Endgame"}
                  text={
                    "With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.    "
                  }
                  matext={"zk-text"}
                />
                <div className="zk-btns-div">
                  {" "}
                  <Button img={triangle} text={" Play Now"}
                  pad={"zk-pad"} show={true}
                  />
                  <div>
                    <img src={plus} />
                    <img src={like} />
                    <img src={voice} />
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
        </div>
      </section>
    </>
  );
}
