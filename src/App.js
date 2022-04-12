import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Video from "./components/Video";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Story from "./components/Story";
//import ScrollToTop from "./components/ScrollToTop";
import Discord from "./components/discord";
import Faq from "./components/Faq";
import Carousel from "./components/Carousel";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import JoinCommunity from "./components/JoinCommunity";
import scrollreveal from "scrollreveal";
import ReactDOM from 'react-dom';
import { SmoothProvider } from 'react-smooth-scrolling'
import "./sass/index.scss";
function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  // useEffect(() => {
  //   const registerAnimations = () => {
  //     const sr = scrollreveal({
  //       origin: "bottom",
  //       distance: "80px",
  //       duration: 2000,
  //       reset: false,
  //       smooth: true,
  //     });
  //     sr.reveal(
  //       `
  //       nav,
  //       .home,
  //       .about,
  //       .story,
  //       .carousel,
  //       .roadmap
  //       .team,
  //       .faq,
  //       .community,
  //       footer
  //   `,
  //       {
  //         interval: 500,
  //       }
  //     );
  //   };
  //   registerAnimations();
  // }, []);
  window.setTimeout(() => {
    // const home = document.getElementsByClassName("home");
    // home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div data-theme={theme} className="app-container">
      <Discord />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      {/* <Landing /> */}
      <Video />
      <About />
      <Story />
      <Carousel />
      <Roadmap />
      <Team />
      <Faq />
      <JoinCommunity />
      <Footer />
    </div >
  );
}

export default App;
