
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MoviesAndShows from "./Pages/MoviesAndShows/MoviesAndShows";
import Subscription from "./Pages/Subscription/Subscription";
import Support from "./Pages/Support/Support";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar";
import MoviesPageOpenR from "./Pages/MoviesPageOpenR/MoviesPageOpenR.jsx";
import ShowsPageOpenR from "./Pages/ShowsPageOpenR/ShowsPageOpenR.jsx";


export default function App() {
  
import HashLoader from "react-spinners/HashLoader";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const color = "#e50000";


  return (
    <>
      {loading && (
        <div className="loader"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 999800999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(6, 6, 6, 0.78)",
          }}
        >
          <HashLoader
            color={color}
            loading={loading}
            size={100}
            cssOverride={{
              position: "absolute",
            }}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MoviesAndShows" element={<MoviesAndShows />} />
          <Route path="/MoviesPageOpenR/movie/:id" element={<MoviesPageOpenR />} />
          <Route path="/ShowsPageOpenR/show/:id" element={<ShowsPageOpenR />} />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
        <Footer />
      </>

    
    </>
  );
}
