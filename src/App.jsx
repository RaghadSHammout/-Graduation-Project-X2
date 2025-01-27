import { Route, Routes , useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MoviesAndShows from "./Pages/MoviesAndShows/MoviesAndShows";
import Subscription from "./Pages/Subscription/Subscription";
import Support from "./Pages/Support/Support";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar";
import MoviesPageOpenR from "./Pages/MoviesPageOpenR/MoviesPageOpenR.jsx";
import ShowsPageOpenR from "./Pages/ShowsPageOpenR/ShowsPageOpenR.jsx";
import { useEffect } from "react";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MoviesAndShows" element={<MoviesAndShows />}/>
        <Route path="/MoviesPageOpenR/movie/:id" element={<MoviesPageOpenR/>} />
        <Route path="/ShowsPageOpenR/show/:id" element={<ShowsPageOpenR/>} />        
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/Support" element={<Support />} />
      </Routes>
      <Footer />
    </>
  );
}
