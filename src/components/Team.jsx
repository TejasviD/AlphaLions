import React, { useEffect, useRef } from "react";
import alpha1 from "../assets/TEAM_01.png";
import alpha2 from "../assets/TEAM_02.png";
import alpha3 from "../assets/TEAM_03.png";
import alpha4 from "../assets/TEAM_04.png";
import VanillaTilt from 'vanilla-tilt';

export default function Team() {

  function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
  }

  const data = [
    {
      image: alpha1,
      name: "Oxymore",
      role: "The Visionary",
    },
    {
      image: alpha3,
      name: "Spicy",
      role: "The Architect",
    },
    {
      image: alpha2,
      name: "UltraPog",
      role: "The Artist",
    },
    {
      image: alpha4,
      name: "Cesar",
      role: "The marketing strategist",
    },

  ];
  return (
    <div className="team" id="team">
      <div className="team-container">
        <div className="title-container">
          <h2 className="title">THE TEAM</h2>
        </div>
        <div className="team-section">
          {data.map(({ image, name, role }, index) => (
            <div className="team-card" key={index}>
              <Tilt className="card-image" >
                <img className="team-image" src={image} alt="alphalions" />
              </Tilt>
              <div className="team-info">
                <h3 className="card-series" >{name}</h3>
                <p className="card-title" >{role}</p>
              </div>
            </div>

          ))}
          </div>
      </div>

    </div>
  );
}
