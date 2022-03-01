import React, { useEffect, useRef } from "react";
import Card from "./Card";
import lion from "../assets/alien.png";
import VanillaTilt from 'vanilla-tilt';
import Grid from '@material-ui/core/Grid';

export default function Team() {

  function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
  }

  const options = {
    scale: 1.2,
    speed: 800,
    max: 10
  };
  const data = [
    {
      image: lion,
      name: "Imad",
      role: "The Visionary",
    },
    {
      image: lion,
      name: "Shini",
      role: "The Architect",
    },
    {
      image: lion,
      name: "UltraPog",
      role: "The Artist",
    },
    {
      image: lion,
      name: "Cesar",
      role: "The Mastermind",
    },

  ];
  return (


    // <div className="team" id="team">
    //   <div className="title-container">
    //     <h2 className="title">MEET THE</h2>
    //     <h2 className="title2">TEAM</h2>
    //   </div>
    //   <div className="cards">
    //     {data.map(({ image, name, role }, index) => (
    //       <Card
    //         image={image}
    //         series={name}
    //         title={role}
    //         key={index}
    //       />
    //     ))}
    //   </div>
    // </div>

    //***************************************** */
    <div className="team" id="team">
      <div className="team-container">
        <div className="title-container">
          <h2 className="title">THE TEAM</h2>
        </div>
        <div className="team-section">
          {data.map(({ image, name, role }, index) => (
            <div className="team-card" key={index}>
              <Tilt className="card-image" >
                <img className="team-image" src={image} alt="lion" />
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
