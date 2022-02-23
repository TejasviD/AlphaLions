import React from "react";
import Tilt from "react-tilt";
export default function Card({ image, series, title }) {
  return (
    <Tilt>
      <div className="teamCard">
        <img src={image} alt="super1" />
        <div className="card-content">
          <div className="card-heading">
            <h3 className="card-series">{series}</h3>
          </div>
          <div className="card-details">
            <p className="card-title">{title}</p>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
