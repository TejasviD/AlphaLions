import React from "react";
import Card from "./TeamCard";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";

const data = [
    {
      image: super1,
      name: "card",
      role: "The visionary",
    },
    {
      image: super2,
      name: "card",
      role: "The Architect",
    },
    {
      image: super3,
      name: "card",
      role: "The Artist",
    },
    {
      image: super4,
      name: "card",
      role: "The Architect",
    },

  ];
  
export default function List_3D() {
    return (
        <div className="List">
            {data.map(({ image, name }, index) => (
                <Card image={image}
                series={name}
                key={index} />
            ))}
        </div>
    )
}
