import React, { useEffect, useState } from "react";
import CourseSlider from "../../globals/Sliders/CourseSlider";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function HomeCourseSlider() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  const { t } = useTranslation();
  const { title, subtitle, specialWord } = t("home.courseSlider");
  

  return (
    <div className="swiper-container" data-aos={"zoom-in"}>
<div className="container mt-5" data-aos={"zoom-in"} >
  <div className="row">
    <div className="col-md-12 col-lg-4 col-sm-12 d-flex align-items-center">
      
     <h1 className="container-title text-black fw-bold ">
             {subtitle} <span style={{ color: "#046635" }}>{specialWord}</span>
          </h1>
    </div>

    <div className="col-md-12 col-lg-8 col-sm-12 d-flex align-items-center">
    
<CourseSlider />
    </div>
  </div>
</div>
</div>
  );
}

export default HomeCourseSlider;
