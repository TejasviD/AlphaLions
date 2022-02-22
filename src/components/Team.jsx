import React from "react";
import Card from "./Card";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";

export default function Team() {
  const data = [
    {
      image: super1,
      name: "Imad",
      role: "The visionary",
    },
    {
      image: super2,
      name: "Shini",
      role: "The Architect",
    },
    {
      image: super3,
      name: "UltraPog",
      role: "The Artist",
    },
    {
      image: super4,
      name: "Mexican",
      role: "The Architect",
    },

  ];
  return (
    <div className="team">
      <div className="title-container">
        <h2 className="title">MEET THE</h2>
        <h2 className="title2">TEAM</h2>
      </div>
      <div className="cards">
        {data.map(({ image, name, role }, index) => (
          <Card
            image={image}
            series={name}
            title={role}
          />
        ))}
      </div>
    </div>
  );
}
