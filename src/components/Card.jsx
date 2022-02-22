import React from "react";
export default function Card({ image, series, title }) {
  return (
    <div className="teamCard">
      <div className="card-image">
        <img src={image} alt="super1" />
      </div>
      <div className="card-content">
        <div className="card-heading">
          <h3 className="card-series">{series}</h3>
        </div>
        <div className="card-details">
          <p className="card-title">{title}</p>
        </div>
      </div>
    </div>
  );
}
