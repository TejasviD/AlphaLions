import React, { Component } from "react";
import alpha1 from "../assets/ALPHA_CYBORG_01.png";
import alpha2 from "../assets/ALPHA_GUERILLA_02.png";
import alpha3 from "../assets/ALPHA_SPARTAN_01.png";
import alpha4 from "../assets/ALPHA_CYBORG_KING.png";
import alpha5 from "../assets/ALPHA_GUERILLA_KING.png";
import alpha6 from "../assets/ALPHA_SPARTAN_02.png";
import alpha7 from "../assets/ALPHA_SPARTAN_KING.png";
import alpha8 from "../assets/ALPHA_GUERILLA_01.png";
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
                            By joining Alpha Lions, you will be part of a growing community united by the same dreams towards the revolution.
                            Minting one Alpha Lions NFT will get you access to the exclusive benefits thoroughly detailed in the roadmap.
                            </p>
                        </div>
                    </div>

                </div>
                <Slider {...settings}>
                    <img className="carousel-img" src={alpha1} alt="alphalion" />
                    <img className="carousel-img" src={alpha2} alt="alphalion" />
                    <img className="carousel-img" src={alpha3} alt="alphalion" />
                    <img className="carousel-img" src={alpha4} alt="alphalion" />
                    <img className="carousel-img" src={alpha5} alt="alphalion" />
                    <img className="carousel-img" src={alpha6} alt="alphalion" />
                    <img className="carousel-img img-7" src={alpha7} alt="alphalion" />
                    <img className="carousel-img img-8" src={alpha8} alt="alphalion" />
                </Slider>
                </div>
            </div>

        );
    }
}