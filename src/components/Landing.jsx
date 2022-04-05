import React from "react";
import vid from "../assets/landing-video.mp4";

export default function Landing() {
    return (
      <div className="landing">
        <div className="container">
            <video className="video" src={vid} loop="loop" autoPlay="autoPlay" muted="muted"></video>
        </div>
      </div>
    );
  }