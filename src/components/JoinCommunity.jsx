import React from "react";
import TypeAnimation from 'react-type-animation';

export default function JoinCommunity() {
  return (
    <div className="community" id="community">
      <div className="container">
          <div className="content">
            <h1 className="title">
              <p className="sub-title">O</p>
              <TypeAnimation
                cursor={false}
                sequence={['JOIN THE COMMUNITY!', 1000, '']}
                wrapper="span"
                repeat={Infinity}
              />
            </h1>
            <p className="description">Ready to be an Alpha? Join us on Discord and be part of this adventure.</p>
            <a href="https://discord.com/invite/z8hyV7eXya" target="_blank" className="join-discord"> Join Discord </a>
          </div>
        </div>

    </div>
  );
}
