import React, { useEffect, useState, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
const Roadmap = () => {
  const [scrolled, setScrolled] = useState(0);
  const [initHeight, setInitHeight] = useState(0);
  const ref = useRef();
  const [inViewRef, inView] = useInView();

  // useEffect(() => {
  //   const height = getComputedStyle(ref.current).height;
  //   setInitHeight(parseInt(height));
  //   console.log("[FIRST useEffect]",height);
  // }, []);
  useEffect(() => {
    if (!inView) {
      setScrolled(0);
    }
    // console.log("[2nd useEffect]",inView);
    document.addEventListener("scroll", onScrollPage);
    return () => document.removeEventListener("scroll", onScrollPage);
  }, [inView]);

  const onScrollPage = () => {
    if (!inView) {
      //console.log("Not In View");
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    let top = rect.top + window.scrollY - window.innerHeight / 2;
    let trigger = window.scrollY - top;
    const calculatedScroll = Math.min(trigger, initHeight);
    if (trigger > 0) {
      setScrolled(calculatedScroll);
    }
    //console.log("In view", calculatedScroll, "trigger-->", trigger, initHeight);
  };
  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
      const height = getComputedStyle(node).height;
      setInitHeight(parseInt(height));
      //console.log("[FIRST useEffect]", height);
    },
    [inViewRef]
  );
  const progressBarStyle = {
    width: "3px",
    background: "#fff !important",
    color: "#fff",
    boxShadow: "0 0 12px rgb(217 216 218 / 80%)",
    willChange: "width, height",
    height: scrolled,
  };
  return (
    <div className="roadmap" id="roadmap">
      <h2>ROADMAP</h2>
      <section className="timeline-section" id="timeline">
        <div className="timeline-wrap">
        <div className="timeline-progress" style={progressBarStyle}></div>
        <div className="timeline-items">
          <div ref={setRefs} className="timeline-indicator"></div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-percent">#1</div>
            <div className="timeline-content">
              <div className="timeline-number">
                <h3>
                  10%
                </h3>
              </div>
              <h2>Launch of Discord</h2>
              <p>
                Set up of discord server to allow the community to interact with each other and discuss about the project.
                <br />
                <br />
                The discord is also where all important information related to the project will be announced.{" "}
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-percent">#2</div>
            <div className="timeline-content">
              <div className="timeline-number">
                <h3>20%</h3>
              </div>
              <h2>Launch of AlphaLions website</h2>
              <p>
                The website will serve as a “showcase website” in the first place.{" "}
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-percent">#3</div>
            <div className="timeline-content">
              <div className="timeline-number">
                <h3>30%</h3>
              </div>
              <h2>Marketing / Partnership</h2>
              <p>
                The team will indulge in marketing and partnership strategies in order to bring to you unique opportunities and benefits.{" "}
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-percent">#4</div>
            <div className="timeline-content">
              <div className="timeline-number">
                <h3>40%</h3>
              </div>
              <h2>Mint of AlphaLions NFTS</h2>
              <p>
                1,500 AlphaLions NFTs  will be available on #Cronos and once sold out, they will be available on secondary markets ( EbisusBay ).{" "}
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-percent">#5</div>
            <div className="timeline-content">
              <div className="timeline-number">
                <h3>50%</h3>
              </div>
              <h2>Airdrop &amp; royalites</h2>
              <p>
                Random airdrop each week to reward the holders of AlphaLions NFTs.{" "}
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-percent">#6</div>
            <div className="timeline-content">
              <div className="timeline-number">
                <h3>60%</h3>
              </div>
              <h2>DECENTRALIZED AUTONOMOUS ORGANIZATION</h2>
              <p>
                Make a real impact.
                <br />
                <br />
                Everyone who owns an AlphaLions NFT can decide on the future direction of the project through our DAO. It’s all about community.{" "}
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-percent">#7</div>
            <div className="timeline-content">
              <div className="timeline-number">
                <h3>70%</h3>
              </div>
              <h2>AlphaLioness Collection</h2>
              <p>
                Launch of the second collection: The AlphaLioness, after the genesis collection.{" "}
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-percent">#8</div>
            <div className="timeline-content">
              <div className="timeline-number">
                <h3>80%</h3>
              </div>
              <h2>Breeding</h2>
              <p>
                Each holder who has 1 lion and 1 lioness will get a unique baby lion.{" "}
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-percent">#9</div>
            <div className="timeline-content">
              <div className="timeline-number">
                <h3>90%</h3>
              </div>
              <h2>Roadmap 2.0</h2>
              <p>
                Activation of the whole post mint Roadmap.{" "}
              </p>
            </div>
          </div>
        </div>
        </div>
        {/* <div className="timeline-dot"></div> */}
      </section>
    </div>
  );
};

export default Roadmap;
