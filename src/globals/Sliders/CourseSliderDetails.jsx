import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CourseSliderDetails() {
  const { t } = useTranslation();
  const { courses } = t("home.courseSlider");

  const [shuffledCourses, setShuffledCourses] = useState([]);

  useEffect(() => {
    // Shuffle the courses array
    const shuffled = [...courses].sort(() => Math.random() - 0.5);
    setShuffledCourses(shuffled);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    className: "sample",
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="container">
      {shuffledCourses?.map((course, i) => (
        <Link to={course?.link}>
          <div className="swiper-slide-nocontent">
            <img src={course.imgSrc} className="slide-image" alt="" />
          </div>
        </Link>
      ))}
    </Slider>
  );
}

export default CourseSliderDetails;
