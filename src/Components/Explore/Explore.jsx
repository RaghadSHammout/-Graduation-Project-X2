import React from 'react';
import Title from '../Title/Title';
import ExploreCard from '../ExploreCard/ExploreCard';
import './Explore.css';

const cardData = [
    {
        title: "Action",
        image: "src/assets/photos/Home page images/Exploreb section card(1).png",
        link: "/action",
    },
    {
        title: "Adventure",
        image: "src/assets/photos/Home page images/Explore section card(2).png",
        link: "/adventure",
    },
    {
        title: "Comedy",
        image: "src/assets/photos/Home page images/Explore section card(3).png",
        link: "/comedy",
    },
    {
        title: "Drama",
        image: "src/assets/photos/Home page images/Explore section card(4).png",
        link: "/drama",
    },
    {
        title: "Horror",
        image: "src/assets/photos/Home page images/Explore section card(5).png",
        link: "/horror",
    },
];

function Explore() {
    return (
        <section className="bg-color home-padding">
            <div>
                <Title
                    title="Explore our wide variety of categories"
                    text="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
                    size={true}
                    maMargin={false}
                />
                <div className="explore-cards-container d-flex gap-3 justify-content-between">
                    {cardData.map((card, index) => (
                        <ExploreCard
                            key={index}
                            image={card.image}
                            title={card.title}
                            link={card.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Explore;
