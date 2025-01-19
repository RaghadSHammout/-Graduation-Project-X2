import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Season from "../Season/Season";
import "./Seasons.css";
import { SeasonsData } from "../Data/SeasonsData";

function Seasons() {
  const [activeId, setActiveId] = useState(2);
  const toggleSeason = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="seasons">
      <h4 className="title">Seasons and Episodes</h4>
      <div className="seasons-list">
        {SeasonsData.map((season) => (
          <Season
            key={season.id}
            id={season.id}
            season={season}
            activeId={activeId}
            onToggle={toggleSeason}
          />
        ))}
      </div>
    </div>
  );
}

export default Seasons;
