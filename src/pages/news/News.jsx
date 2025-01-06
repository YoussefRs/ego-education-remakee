import React, { useState } from "react";
import n2 from "../../assets/news/news-800x500-2.jpg";
import n1 from "../../assets/news/news-800x500-1.jpg";
import n3 from "../../assets/news/news-800x500-3.jpg";
import s1 from "../../assets/news/news-700x435-1.jpg";
import s2 from "../../assets/news/news-700x435-2.jpg";
import s3 from "../../assets/news/news-700x435-3.jpg";
import s4 from "../../assets/news/news-700x435-4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./news.css";

function News() {
  const slides = [
    {
      image: s2,
      title: "Slide Title 1",
      author: "Jennifer",
      date: "Oct 22, 2019",
      category: "Bussiness",
    },
    {
      image: n2,
      title: "Slide Title 2",
      author: "Michael",
      date: "Nov 10, 2019",
      category: "Bussiness",
    },
    {
      image: n3,
      title: "Slide Title 3",
      author: "Emma",
      date: "Dec 5, 2019",
      category: "Bussiness",
    },
    {
      image: n1,
      title: "Slide Title 4",
      author: "Sophia",
      date: "Jan 15, 2020",
      category: "Bussiness",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div className="slick-next">&#10095;</div>,
    prevArrow: <div className="slick-prev">&#10094;</div>,
  };

  return (
    <div className="container">
      <div className="row">
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
                          src={slide.image}
                          alt={`Slide ${index + 1}`}
                        />
                      </a>
                    </div>
                    <div class="overlay">
                      <div class="mb-2">
                        <a
                          class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                          href=""
                        >
                          Busines
                        </a>
                        <a class="text-white" href="">
                          Jan 01, 2045
                        </a>
                      </div>
                      <a
                        class="h2 m-0 text-white text-uppercase font-weight-bold"
                        href="/news"
                      >
                        Lorem ipsum dolor sit amet elit. Proin vitae porta
                        diam...
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
                      <a href="#">
                        <img
                          className="img-fluid"
                          src={slide.image}
                          alt={slide.category}
                        />
                      </a>
                    </div>
                    <div className="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                      <a
                        className="p-1 badge badge-primary rounded-0"
                        href="/news"
                      >
                        {slide.category}
                      </a>
                      <a href="/news">
                        <h2 className="h5 text-white my-1">{slide.title}</h2>
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
