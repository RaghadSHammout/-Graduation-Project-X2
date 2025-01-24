import React from "react";
import ExploreCard from "../ExploreCard/ExploreCard";
import "./Explore.css";
import CustomSlider from "../Slider/Slider";
import cardData from "../Data/toCardData";

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
        <section className="bg-color home-padding explore-m-bot">
            <div className="carousel-container">
                <CustomSlider
                    cardData={cardData}
                    lgSize={5}
                    title="Explore our wide variety of categories"
                    text="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
                    cardGroup="card-group"
                    upperMb="to-slider-upper-mb"
                    cardType={"explore"}
                />
            </div>
        </section>
    );
}

export default Explore;
