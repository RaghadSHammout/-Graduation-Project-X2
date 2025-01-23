import CastCarousel from "../../Components/CastCarousel/CastCarousel";
import MoviesOpenHero from "../../Components/MoviesOpenHero/MoviesOpenHero";

export default function MoviesPageOpen() {
  return (
    <>
      <MoviesOpenHero/>
       <CastCarousel CastImages={CastImages} lunaPad={true} /> 
    </>
  );
}
