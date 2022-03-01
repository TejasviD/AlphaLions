import React from "react";
import { useState, useRef, useEffect } from "react";

export default function Roadmap() {
    // let position = 0;
    // const [scrollPosition, setScrollPosition] = useState(0);
    // const handleScroll = () => {
    //   position = window.pageYOffset;
    //   setScrollPosition(position);
    //   console.log("position:" + position);
    // };
  
    // useEffect(() => {
    //   window.addEventListener("scroll", handleScroll);
  
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, []);
    
    // document.getElementById("navbar").clientHeight + document.getElementById("home").clientHeight
    // + document.getElementById("superare").clientHeight +
 
//     onScrollPage(){
//         const winHeightPx =
//         document.documentElement.scrollHeight -
//         (document.documentElement.clientHeight);

//       //   const winHeightPx =
//       //   document.documentElement.scrollHeight -
//       //   (document.getElementById("navbar").clientHeight + document.getElementById("home").clientHeight
//       //      + document.getElementById("superare").clientHeight + 50);

//     const scrolledPercentage = `${this.state.scrolled / winHeightPx * 100}%`;
//     this.setState({
//        scrolledbar: scrolledPercentage,
//     })
//     this.setState({
//        scrolled: document.documentElement.scrollTop,
//     });
//   };

    // const winHeightPx =
    // document.documentElement.scrollHeight -
    // (document.documentElement.clientHeight);
    //var element = document.getElementById('roadmap');

     //var domRect = element.getBoundingClientRect();

    let percent = `${document.documentElement.scrollHeight / document.documentElement.clientHeight * 100}%`;
    //let percent = `${position - 3050 / document.documentElement.clientHeight * 100}%`;

  
      const progressBarStyle = {
        width: "3px !important",
        background: "#fff !important",
        color:"#fff",
        // -webkit-filter: blur(6px),
        boxShadow: "0 0 12px rgb(217 216 218 / 80%)",
        willChange:"width, height",
        // height: this.state.scrolledbar
        height: percent
      };
  
      return (
        <div className="roadmap" id="roadmap">
        <section className="timeline-section" id="timeline">
            <div className="timeline-progress" style={progressBarStyle}>
            </div>
            <div className="timeline-items">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-percent">#1</div>
                    <div className="timeline-content">
                        <div className="timeline-number">
                            <h3>10%</h3>
                        </div>
                        <h2>timeline item title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>
            <div className="timeline-dot"></div>
        </section>
    </div>
      );
  }


  
// export default function Roadmap() {
//     const prevScrollY = useRef(0);
//     const [goingUp, setGoingUp] = useState(false);
  
//     const onScroll = (e) => {
//       const currentScrollY = e.target.scrollTop;
//       if (prevScrollY.current < currentScrollY && goingUp) {
//         setGoingUp(false);
//       }
//       if (prevScrollY.current > currentScrollY && !goingUp) {
//         setGoingUp(true);
//       }
//       prevScrollY.current = currentScrollY;
//       console.log(goingUp, currentScrollY);
//     };

//     const progressBarStyle = {
//         background: "#e91e63",
//         height: this.state.currentScrollY
//       };
  

//     return (
//         <div className="roadmap">
//             <section className="timeline-section">
//                 <div className="timeline-progress" style={progressBarStyle} onScroll={onScroll}>
//                 </div>
//                 <div className="timeline-items">
//                     <div className="timeline-item">
//                         <div className="timeline-dot"></div>
//                         <div className="timeline-percent">2015</div>
//                         <div className="timeline-content">
//                             <div className="timeline-number">
//                                 <p>#1</p>
//                             </div>
//                             <h2>timeline item title</h2>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
//                         </div>
//                     </div>
//                     <div className="timeline-item">
//                         <div className="timeline-dot"></div>
//                         <div className="timeline-percent">2016</div>
//                         <div className="timeline-content">
//                             <div className="timeline-number">
//                                 <p>#2</p>
//                             </div>
//                             <h2>timeline item title</h2>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
//                         </div>
//                     </div>
//                     <div className="timeline-item">
//                         <div className="timeline-dot"></div>
//                         <div className="timeline-percent">2017</div>
//                         <div className="timeline-content">
//                             <div className="timeline-number">
//                                 <p>#3</p>
//                             </div>
//                             <h2>timeline item title</h2>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
//                         </div>
//                     </div>
//                     <div className="timeline-item">
//                         <div className="timeline-dot"></div>
//                         <div className="timeline-percent">2018</div>
//                         <div className="timeline-content">
//                             <div className="timeline-number">
//                                 <p>#4</p>
//                             </div>
//                             <h2>timeline item title</h2>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
//                         </div>
//                     </div>
//                     <div className="timeline-item">
//                         <div className="timeline-dot"></div>
//                         <div className="timeline-percent">2019</div>
//                         <div className="timeline-content">
//                             <div className="timeline-number">
//                                 <p>01</p>
//                             </div>
//                             <h2>timeline item title</h2>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
//                         </div>
//                     </div>
//                     <div className="timeline-item">
//                         <div className="timeline-dot"></div>
//                         <div className="timeline-percent">2020</div>
//                         <div className="timeline-content">
//                             <div className="timeline-number">
//                                 <p>01</p>
//                             </div>
//                             <h2>timeline item title</h2>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
//                         </div>
//                     </div>
//                     <div className="timeline-item">
//                         <div className="timeline-dot"></div>
//                         <div className="timeline-percent">2021</div>
//                         <div className="timeline-content">
//                             <div className="timeline-number">
//                                 <p>01</p>
//                             </div>
//                             <h2>timeline item title</h2>
//                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>

//     );
// }