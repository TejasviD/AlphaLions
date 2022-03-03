import React from "react";
import TypeAnimation from 'react-type-animation';
import gif from "../assets/about_gif.gif";
import liongif from "../assets/lion-legends.gif";
import { BsTwitter } from "react-icons/bs";

export default function About() {
    return (
        <div className="about" id="about">
            <div className="about-main-container">
                <div className="about-container">
                    <div className="about-title">
                        <h2>
                            ALPHA LIONS
                        </h2>
                        <h2>
                            IS THE
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                    ' FUTURE',
                                    2000,
                                    ' REVOLUTION',
                                    2000,
                                    ' FUTURE OF BUSINESS',
                                    2000,
                                ]}
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </h2>
                    </div>
                    <div className="about-content">
                        <div className="about-content-wrap">
                            <div className="about-card">
                                <p className="about-description">
                                    Alpha Lions is a collection of 7,777 unique NFTs built with a sophisticated variety of distinctive traits on the crypto blockchain.
                                    With over 150 hand-drawn features, each NFT is unique.
                                </p>
                                <p className="about-desc">You dreamt of it, we made it for you!</p>
                                <p>
                                    Join our growing community united by the same dreams and get access to incredible benefits and services.
                                </p>
                                <div className="twitter-link">
                                    <a href="https://discord.com/invite/alpha" target="_blank" className="join-twitter">Follow on twitter <span><BsTwitter /></span></a>
                                </div>

                            </div>

                        </div>
                        <div className="about-content-wrap">
                            <div className="about-gif">
                                <img src={liongif} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}