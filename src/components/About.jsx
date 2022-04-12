import React from "react";
import TypeAnimation from 'react-type-animation';
import liongif from "../assets/alpha-gif.gif";
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
                                    Alpha Lions is a collection of 500 NFTs per faction built with a sophisticated variety of distinctive traits on the crypto blockchain.
                                    With over 100 hand-drawn features, each NFT is unique.
                                </p>
                                <p className="about-desc">You dreamt of it, we made it for you!</p>
                                <p>
                                    Join our growing community united by the same dreams and get access to incredible benefits and services.
                                </p>
                                <div className="twitter-link">
                                    <a href="https://twitter.com/AlphaLions04" target="_blank" className="join-twitter">Follow on twitter <span><BsTwitter /></span></a>
                                </div>

                            </div>

                        </div>
                        <div className="about-content-wrap">
                            <div className="about-gif">
                                <img src={liongif} alt="alphalions" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}