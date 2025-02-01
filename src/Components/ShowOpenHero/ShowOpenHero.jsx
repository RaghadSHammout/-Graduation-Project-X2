import "./ShowOpenHero.css"
import "bootstrap/dist/css/bootstrap.min.css";
import herobg3 from "../../assets/photos/Shows open page images/Hero bg.png"
import triangle from "../../assets/photos/Home page images/triangle.png";
import SlideComponent from '../../Components/SlideComponent/SlideComponent';
export default function ShowOpenHero({show}) {
  return (
    <>
     <div className="zk-container zk-hero home-padding ">
       <div className="zk-carousel">
        <div className="Slide2">
        <SlideComponent 
              imgHero={show.figure}
              imgHeight={"img-hero"}
              title={show.LQtit}
              textTitle={"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl. "}
              size={true}
              maMargin={true}
              matext={"zk-text3"}
              pad={"zk-pad"}
              text={"Play Now"}
              img={triangle}
              show={true}
              caption={"zk-caption"}
            />
            </div>
           </div>
      </div> 

    </>
  );
}