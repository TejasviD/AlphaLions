import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import discord from "../assets/discord-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import medium from "../assets/medium-icon.png";
import alpha from "../assets/alphalions-logo.png";
export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container" id="navbar">
        <div className="brand">
          <img src={alpha} alt="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="social-media-container-1">
            <ul className="social-links-1">
              <li>
                <a className="header-icon-1" target="_blank" href="https://discord.gg/Pw5JCMxfVh">
                  <img className="social-icon-1" src={discord} alt="discord" />
                </a>
              </li>
              <li>
                <a className="header-icon-1" target="_blank" href="https://twitter.com/CroAlphaLions">
                  <img className="social-icon-1" src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a className="header-icon-1" target="_blank" href="https://medium.com/@cronosalphalions">
                  <img className="social-icon-1" src={medium} alt="medium" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <a href="#story">THE LORE</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#roadmap">ROADMAP</a>
          </li>
          <li>
            <a href="#team">TEAM</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          {/* <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li> */}
        </ul>
      </div>
      <div className="social-media-container">
        <ul className="social-links">
          <li>
            <a className="header-icon" target="_blank" href="https://discord.gg/Pw5JCMxfVh">
              <img className="social-icon" src={discord} alt="discord" />
            </a>
          </li>
          <li>
            <a className="header-icon" target="_blank" href="https://twitter.com/CroAlphaLions">
              <img className="social-icon" src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a className="header-icon" target="_blank" href="https://medium.com/@cronosalphalions">
              <img className="social-icon medium" src={medium} alt="medium" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
