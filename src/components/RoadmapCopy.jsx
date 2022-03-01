import React from "react";
import { useState, useRef } from "react";
import ReactDOM from 'react-dom'

class Roadmap extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        scrolled: 0,
        scrolledbar: 0,
      };
    this.onScrollPage = this.onScrollPage.bind(this);
    }
    componentDidMount(){
      ReactDOM.findDOMNode(this.domNode).addEventListener("scroll", this.onScrollPage);
    }
    
    componentWillUnmount(){
        ReactDOM.findDOMNode(this.domNode).removeEventLister("scroll", this.onScrollPage);
    }
    // document.getElementById("navbar").clientHeight + document.getElementById("home").clientHeight
    // + document.getElementById("superare").clientHeight +
    onScrollPage(){
        // console.log("timeline height:" + document.getElementById("timeline").clientHeight)
        // console.log("client height:" + document.documentElement.clientHeight)
        // console.log("navbar height:" + document.getElementById("navbar").clientHeight)
        // console.log("home height:" + document.getElementById("home").clientHeight)
        // console.log("superare height:" + document.getElementById("superare").clientHeight)
        // console.log("scroll height:" + document.documentElement.scrollHeight)
        // console.log("state:" + this.state.scrolled);
        //   const winHeightPx = 1200+
        //   document.documentElement.scrollHeight -
        //   document.documentElement.clientHeight;

        //   const winHeightPx =
        //   document.documentElement.scrollHeight -
        //   (document.documentElement.clientHeight);

          const winHeightPx =
          document.documentElement.scrollHeight + document.getElementById("team").clientHeight + document.getElementById("faq").clientHeight + document.getElementById("community").clientHeight -
          (document.getElementById("navbar").clientHeight + document.getElementById("home").clientHeight
             + document.getElementById("superare").clientHeight + 120);

      const scrolledPercentage = `${this.state.scrolled / winHeightPx * 100}%`;
      this.setState({
         scrolledbar: scrolledPercentage,
      })
      //console.log(document.documentElement.scrollTop);
      this.setState({
         scrolled: document.documentElement.scrollTop,
      });

      //console.log("scrolled percentage" + this.state.scrolledbar);
    }
    render(){
       const progressContainerStyle = {
        background: "#f8bbd0",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        height: "5px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 90
      };
  
      const progressBarStyle = {
        width: "3px",
        background: "#fff !important",
        color:"#fff",
        // -webkit-filter: blur(6px),
        boxShadow: "0 0 12px rgb(217 216 218 / 80%)",
        willChange:"width, height",
        height: this.state.scrolledbar
      };
  
      return (
        <div className="roadmap" ref={node => this.domNode = node}>
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
  }

  export default Roadmap; 