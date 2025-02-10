import React, { useState } from "react";
import n1 from "../../assets/news/uniitalo.webp";
import n3 from "../../assets/news/news-800x500-3.jpg";
import s2 from "../../assets/news/unitalo.webp";
import n4 from "../../assets/news/unijaguaribe2.webp";
import n5 from "../../assets/news/VillaVehia.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./news.css";
import { useTranslation } from "react-i18next";

function News() {
  const slides = [
    {
      image: s2,
      title:
        "eGO Education and Italo-Brasileira Announce Strategic Academic Partnership",
      author: "A.Daniele Pallotta",
      date: "Oct 22, 2024",
      category: "Education",
    },
    {
      image: n4,
      title:
        "eGO Education Explores New Collaboration Opportunities with UniJaguaribe",
      author: "A.Daniele Pallotta",
      date: "Jun 04, 2024",
      category: "Education",
    },
    {
      image: n1,
      title:
        "eGO Education and Fabio Porta Forge Strategic Partnership in São Paulo",
      author: "A.Daniele Pallotta",
      date: "Jan 16, 2025",
      category: "Education",
    },
    {
      image: n5,
      title:
        "eGO Education Shines at QS Ranking Event for Latin America in Vila Velha",
      author: "A.Daniele Pallotta",
      date: "Jan 22, 2025",
      category: "Education",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <div className="slick-next">&#10095;</div>,
    prevArrow: <div className="slick-prev">&#10094;</div>,
  };

  const { t } = useTranslation();
  const { subtitle, specialWord } = t("home.news");

  return (
    <div className="container mb-5 mt-5">
      <div className="row ">
        <h1
          className="container-title text-black fw-bold "
          style={{ fontFamily: '"Gotham Light"' }}
        >
          {subtitle}{" "}
          <span style={{ color: "rgb(4, 102, 53)" }}>{specialWord} </span>
        </h1>

        <div className="col-12 col-lg-6  pb-0 slider_container">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="carousel-item">
                <div className="card border-0 rounded-0 text-light overflow zoom">
                  <div className="position-relative">
                    <div className="ratio_left-cover-1 image-wrapper">
                      <a href="#">
                        <img
                          className="img-fluid w-100"
                          id="big_img"
                          src={slide.image}
                          alt={`Slide ${index + 1}`}
                        />
                      </a>
                    </div>
                    <div class="overlay border">
                      <div class="mb-2">
                        <a
                          class="badge badge-primary border  text-uppercase font-weight-semi-bold p-2"
                          style={{
                            backgroundColor: "#046635",
                            marginRight: "1rem",
                          }}
                          href="/news"
                        >
                          {slide.category}
                        </a>
                        <a class="text-black" href="">
                          {slide.date}
                        </a>
                      </div>
                      <a
                        class="h4 m-0 text-black text-uppercase fw-bold"
                        href="/news"
                      >
                        {slide.title}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="col-12 col-lg-6 s_img pl-md-1">
          <div className="row">
            {slides.map((slide, index) => (
              <div key={index} className="col-6 ">
                <div className="card border-0 rounded-0 text-white overflow zoom">
                  <div className="position-relative">
                    <div className="ratio_right-cover-2 image-wrapper">
                      <a href="/news">
                        <img
                          className="img-fluid"
                          src={slide.image}
                          alt={slide.category}
                        />
                      </a>
                    </div>
                    <div
                      className=" p-2 p-lg-3 b-0 w-100 border"
                      style={{ fontFamily: "Gotham Light" }}
                    >
                      <a
                        className="p-1 text-white border badge badge-primary rounded-0"
                        style={{ backgroundColor: "#046635" }}
                        href="/news"
                      >
                        {slide.category}
                      </a>
                      <a href="/news">
                        <h2
                          className="h6 text-black my-1"
                          style={{ fontFamily: "Gotham Light" }}
                        >
                          {slide.title}
                        </h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
