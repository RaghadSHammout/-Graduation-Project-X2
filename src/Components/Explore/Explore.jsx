import "./Explore.css";
import CustomSlider from "../Slider/Slider";
import { cardData, cardDataShows } from "../Data/toCardData";

function Explore() {
    return (
        <section className="bg-color home-padding explore-m-bot" id="Categories">
            <div className="carousel-container">
                <CustomSlider
                    cardData={cardData}
                    lgSize={5}
                    title="Explore our wide variety of categories"
                    text="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
                    cardGroup="card-group"
                    upperMb="to-slider-upper-mb"
                    cardType='explore'
                    isThereText={true}
                />
            </div>
        </section>
    );
}

export default Explore;
