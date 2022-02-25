import React, { Component } from "react";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            //autoplay: true,
            centerPadding: "60px",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
                <div className="carousel">
                    <h2>Center Mode</h2>
                    <Slider {...settings}>
                        <div>
                            <img src={super1} alt="" />
                        </div>
                        <div>
                            <img src={super2} alt="" />
                        </div>
                        <div>
                            <img src={super4} alt="" />
                        </div>
                        <div>
                            <img src={super3} alt="" />
                        </div>
                        <div>
                            <img src={super3} alt="" />
                        </div>
                        <div>
                            <img src={super4} alt="" />
                        </div>
                        <div>
                            <img src={super2} alt="" />
                        </div>
                    </Slider>
                </div>
        );
    }
}