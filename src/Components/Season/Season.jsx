import React, { useState } from "react";
import "./Season.css";
import vbottom from "../../assets/Icons/Vectorbottom.png";
import vtop from "../../assets/Icons/Vectortop.png";
import clock from "../../assets/Icons/clock.png";

function Season({ season, activeId, onToggle, id }) {
  const isActive = activeId === id;

  return (
    <div className={`season ${isActive ? "hd-active" : ""}`}>
      <div className="season-header" onClick={() => onToggle(id)}>
        <div
          className={`hd-title ${season.name === "Season 01" ? "w-218" : ""}${
            season.name == "Season 02" ? "w-222" : ""
          }  `}
        >
          <h4
            className={`hd-h4 ${season.name === "Season 01" ? "w-116" : ""} `}
          >
            {season.name}
          </h4>
          <p
            className={`s-text ${season.name === "Season 03" ? "w-90" : ""} ${
              season.name === "Season 02" ? "w-81" : ""
            }`}
          >
            {season.episodes.length} Episodes
          </p>
        </div>
        <button className="hd-btn">
          <img className="vector" src={isActive ? vtop : vbottom} />
        </button>
      </div>

      {isActive && (
        <div className="season-episodes">
          {season.episodes.map((episode, index) => (
            <div
              key={episode.id || index}
              className={`episode ${index === 0 ? "first-episode" : ""} ${
                index === season.episodes.length - 1 ? "last-episode" : ""
              }`}
            >
              <div className="episode-inner">
                <p className="e-number">
                  {episode.id < 10 ? `0${episode.id}` : episode.id}
                </p>
                <div
                  className="e-img"
                  style={{
                    backgroundImage: `url(${episode.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <div className="chapter">
                <div className="chap1">
                  <h5 className="hd-h5">{episode.title}</h5>
                  <div className="chap-clock">
                    <img src={clock} />
                    <p className="min">{episode.duration}</p>
                  </div>
                </div>
                <p className="description"> {episode.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Season;
