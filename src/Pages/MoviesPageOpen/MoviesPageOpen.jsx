import CastCarousel from "../../Components/CastCarousel/CastCarousel";
import MoviesOpenHero from "../../Components/MoviesOpenHero/MoviesOpenHero";
import Reviews from "../../Components/Reviews/Reviews";

export default function MoviesPageOpen() {
  return (
    <>
      <MoviesOpenHero />
      <Reviews cardGroup={"reviews-card-group"} />
    </>
  );
}
