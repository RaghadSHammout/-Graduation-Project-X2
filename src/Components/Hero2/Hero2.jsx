import "./Hero2.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import SlideComponent from '../../Components/SlideComponent/SlideComponent';
import { Hero2SlideData } from "../Data/Hero2SlideData";
export default function Hero2() {
  return (
    <>
      <div className="zk-container zk-hero">
        <Carousel className="zk-carousel">
          {Hero2SlideData.map((e,index) => {
            return (
              <Carousel.Item className="slide">
                <SlideComponent
                  key={index}
                  imgHero={e.imgHero}
                  imgHeight={e.imgHeight}
                  title={e.title}
                  textTitle={e.textTitle}
                  size={e.size}
                  maMargin={e.maMargin}
                  matext={e.matext}
                  pad={e.pad}
                  text={e.text}
                  img={e.img}
                  show={e.show}
                  caption={e.caption}
                  
                />
              </Carousel.Item>
            )

          })}
        </Carousel>
      </div>

    </>
  );
}
