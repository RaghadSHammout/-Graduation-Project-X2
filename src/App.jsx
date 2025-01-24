import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MoviesAndShows from "./Pages/MoviesAndShows/MoviesAndShows";
import Subscription from "./Pages/Subscription/Subscription";
import Support from "./Pages/Support/Support";

import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar";
import MoviesPageOpenR from "./Pages/MoviesPageOpenR/MoviesPageOpenR.jsx";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MoviesAndShows" element={<MoviesAndShows />}/>
        <Route path="/MoviesPageOpenR/movie/:id" element={<MoviesPageOpenR/>} />
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/Support" element={<Support />} />

      </Routes>
      <Footer />
    </>
  );
}
