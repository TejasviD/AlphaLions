import React from "react";
import Tilt from "react-tilt";
export default function Card({ image, series, title }) {
  return (
    <div className="team-card">
      <div className="card-team">
      <Tilt className="card-image">
        <img src={image} alt="super1" />
      </Tilt>
      <div className="card-content">
        <div className="card-heading">
          <h3 className="card-series">{series}</h3>
        </div>
        <div className="card-details">
          <p className="card-title">{title}</p>
        </div>
      </div>
      </div>
    </div>
  );
}
