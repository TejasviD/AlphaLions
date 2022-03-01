import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import discord from "../assets/discord-icon.svg";
import twitter from "../assets/twitter-icon.svg";
//import logo from "../assets/logo.png";
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
                <a className="header-icon-1" href="#features">
                  <img className="social-icon-1" src={discord} alt="" />
                </a>
              </li>
              <li>
                <a className="header-icon-1" href="#features">
                  <img className="social-icon-1" src={twitter} alt="" />
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
            <a className="header-icon" href="#features">
              <img className="social-icon" src={discord} alt="" />
            </a>
          </li>
          <li>
            <a className="header-icon" href="#features">
              <img className="social-icon" src={twitter} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
