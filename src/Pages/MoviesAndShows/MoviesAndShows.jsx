import CardWatchMovies from "../../Components/CardWatchMovies/CardWatchMovies";
import "../../Components/Hero2/Hero2";
import Hero2 from "../../Components/Hero2/Hero2";
import img1 from "../../assets/photos/Movies & shows page images/Must watches movies section card(1).jpg";
import star4_5 from "../../assets/photos/Container(10).png";
import star4 from "../../assets/photos/Container(12).png";
export default function MoviesAndShows() {
  return (
    <>
      <Hero2 />
      <CardWatchMovies
        id={"1"}
        image={img1}
        duration={"1h 57min"}
        star={star4_5}
      />
    </>
  );
}
