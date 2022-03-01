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
      console.log("Not In View");
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    let top = rect.top + window.scrollY - window.innerHeight / 2;
    let trigger = window.scrollY - top;
    const calculatedScroll = Math.min(trigger, initHeight);
    if (trigger > 0) {
      setScrolled(calculatedScroll);
    }
    console.log("In view", calculatedScroll, "trigger-->", trigger, initHeight);
  };
  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
      const height = getComputedStyle(node).height;
      setInitHeight(parseInt(height));
      console.log("[FIRST useEffect]", height);
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
    <div className="roadmap">
      <section className="timeline-section" id="timeline">
        <div className="timeline-progress" style={progressBarStyle}></div>
        <div className="timeline-items">
          <div ref={setRefs} className="timeline-indicator"></div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-percent">#1</div>
            <div className="timeline-content">
              <div className="timeline-number">
                <h3>10%</h3>
              </div>
              <h2>timeline item title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
              <h2>timeline item title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
              <h2>timeline item title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
              <h2>timeline item title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
              <h2>timeline item title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
              <h2>timeline item title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
              <h2>timeline item title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="timeline-dot"></div>
      </section>
    </div>
  );
};

export default Roadmap;
