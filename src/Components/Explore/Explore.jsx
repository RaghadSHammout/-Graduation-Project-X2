import React from "react";

import ExploreCard from "../ExploreCard/ExploreCard";
import "./Explore.css";
import CustomSlider from "../Slider/Slider";

const cardData = [
    { title: "Action", image: "src/assets/photos/Home page images/Exploreb section card(1).png", link: "/action" },
    { title: "Adventure", image: "src/assets/photos/Home page images/Explore section card(2).png", link: "/adventure" },
    { title: "Comedy", image: "src/assets/photos/Home page images/Explore section card(3).png", link: "/comedy" },
    { title: "Drama", image: "src/assets/photos/Home page images/Explore section card(4).png", link: "/drama" },
    { title: "Horror", image: "src/assets/photos/Home page images/Explore section card(5).png", link: "/horror" },
    { title: "Action", image: "src/assets/photos/Home page images/Exploreb section card(1).png", link: "/action" },
    { title: "Adventure", image: "src/assets/photos/Home page images/Explore section card(2).png", link: "/adventure" },
    { title: "Comedy", image: "src/assets/photos/Home page images/Explore section card(3).png", link: "/comedy" },
    { title: "Drama", image: "src/assets/photos/Home page images/Explore section card(4).png", link: "/drama" },
    { title: "Horror", image: "src/assets/photos/Home page images/Explore section card(5).png", link: "/horror" },
    { title: "Action", image: "src/assets/photos/Home page images/Exploreb section card(1).png", link: "/action" },
    { title: "Adventure", image: "src/assets/photos/Home page images/Explore section card(2).png", link: "/adventure" },
    { title: "Comedy", image: "src/assets/photos/Home page images/Explore section card(3).png", link: "/comedy" },
    { title: "Drama", image: "src/assets/photos/Home page images/Explore section card(4).png", link: "/drama" },
    { title: "Horror", image: "src/assets/photos/Home page images/Explore section card(5).png", link: "/horror" },
    { title: "Action", image: "src/assets/photos/Home page images/Exploreb section card(1).png", link: "/action" },
    { title: "Adventure", image: "src/assets/photos/Home page images/Explore section card(2).png", link: "/adventure" },
    { title: "Comedy", image: "src/assets/photos/Home page images/Explore section card(3).png", link: "/comedy" },
    { title: "Drama", image: "src/assets/photos/Home page images/Explore section card(4).png", link: "/drama" },
    { title: "Horror", image: "src/assets/photos/Home page images/Explore section card(5).png", link: "/horror" },
];

function Explore() {
    return (
        <section className="bg-color home-padding">
            <div>
                <div className="upper-div">

                    <div className="indicators">
                        
                    </div>
                </div>

                <div className="carousel-container">
                    <CustomSlider cardData={cardData} lgSize={5}/>
                        

                </div>
            </div>
        </section>
    );
}

export default Explore;
