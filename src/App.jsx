import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MoviesAndShows from "./Pages/MoviesAndShows/MoviesAndShows";
import Subscription from "./Pages/Subscription/Subscription";
import Support from "./Pages/Support/Support";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar";
import MoviesPageOpenR from "./Pages/MoviesPageOpenR/MoviesPageOpenR.jsx";
import ShowsPageOpenR from "./Pages/ShowsPageOpenR/ShowsPageOpenR.jsx";
import HashLoader from "react-spinners/HashLoader";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import './App.css';
export default function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const color = "#e50000";

  const isErrorPage = ![
    "/", 
    "/MoviesAndShows", 
    "/MoviesPageOpenR/movie/:id", 
    "/ShowsPageOpenR/show/:id", 
    "/Subscription", 
    "/Support",
    "/AboutUs" 
  ].includes(location.pathname);

  
  return (
    <>
      {loading && (
        <div className="loader">
          <HashLoader
            color={color}
            loading={loading}
            size={100}
            cssOverride={{ position: "absolute" }}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}


      {!isErrorPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MoviesAndShows" element={<MoviesAndShows />} />
        <Route path="/MoviesPageOpenR/movie/:id" element={<MoviesPageOpenR />} />
        <Route path="/ShowsPageOpenR/show/:id" element={<ShowsPageOpenR />} />
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/AboutUs" element={<AboutUs />} /> 
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {!isErrorPage && <Footer />}
    </>
  );
}
