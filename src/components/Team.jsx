import React, { useEffect, useRef } from "react";
import alpha1 from "../assets/Junkratscu.jpg";
import alpha2 from "../assets/Ultrapog.jpg";
import alpha3 from "../assets/Spicy.jpg";
import alpha4 from "../assets/DMKrypto.jpg";
import alpha5 from "../assets/Cyber.jpg";
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
      name: "Junkratscu",
      role: "The Founder",
    },
    {
      image: alpha2,
      name: "UltraPog",
      role: "Artist Founder",
    },
    {
      image: alpha3,
      name: "Spicy",
      role: "The architect",
    },
    {
      image: alpha5,
      name: "Cyber",
      role: "Discord Admin",
    },
    {
      image: alpha4,
      name: "DMKrypto",
      role: "Marketing Manager",
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
