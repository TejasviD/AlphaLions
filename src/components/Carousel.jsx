import React, { Component } from "react";
import alien from "../assets/alien.png";
import alien1 from "../assets/alien1.png";
import alien2 from "../assets/alien2.png";
import alien3 from "../assets/alien3.png";
import alien4 from "../assets/Alien4.png";
import alien5 from "../assets/alien5.png";
import teamImg from "../assets/teamImg.png";
//import alien4 from "../assets/alien4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            //centerPadding: "60px",
            slidesToShow: 4,
            speed: 500,
            autoplay: true,
            loop: true,
            //centerPadding: "60px",
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1270,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        //initialSlide: 2
                    }
                },
                {
                    breakpoint: 1240,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        //initialSlide: 2
                    }
                },
                {
                    breakpoint: 875,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        //initialSlide: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        //initialSlide: 2
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
                <div className="carousel-container">
                    <div className="carouselText">
                    <div className="text-content-container">
                        <h2 className="text-title">
                            EXPLORE ALPHA LIONS
                        </h2>
                        <div className="text-content">
                            <p>
                                There is no ordinary project ! Alpha Lions is a life changing NFT project.
                            </p>
                            <br />
                            <br />
                            <p>
                                By joining the All Stars Club, you have the unique opportunity to meet your favorite artists and celebrities in this new and unique way.
                                Get access to the most iconic exclusive club granting you access to concerts, luxury yacht trips and others idylllic events, on earth and in the Metaverse.
                            </p>
                        </div>
                    </div>

                </div>
                <Slider {...settings}>
                    <img className="carousel-img" src={alien} alt="" />
                    <img className="carousel-img" src={alien1} alt="" />
                    <img className="carousel-img" src={alien2} alt="" />
                    <img className="carousel-img" src={alien3} alt="" />
                    <img className="carousel-img" src={alien4} alt="" />
                    <img className="carousel-img" src={alien5} alt="" />
                    <img className="carousel-img img-7" src={alien2} alt="" />
                    <img className="carousel-img img-8" src={alien3} alt="" />
                </Slider>
                </div>
            </div>

        );
    }
}