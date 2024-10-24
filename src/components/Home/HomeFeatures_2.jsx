import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeFeatures_2() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  const { t } = useTranslation();
  const { title, subtitle, description, specialWord, normalWord, features } = t(
    "home.homeFeatures_2"
  );
  return (
    <div
      className="features-video pt-110 pb-110"
      style={{
        backgroundImage:
          "url(https://wallpaperboat.com/wp-content/uploads/2020/10/30/58688/graduation-04.jpg)",
      }}
    >
      <div className="video-overlay"></div>
      <div className="container" data-aos={"fade-up"}>
        <div className="row ">
          <div className="col-xl-6 col-lg-6 col-md-2"></div>
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="section-title mb-4">
              <div className="section-title mb-4 ">
                <h2 className="container-heading text-start" >
                  {title}
                </h2>
                <h1 className="container-title-extra text-white fw-bold mb-4">
                  {subtitle} <span style={{color: "#ffd23c"}}>{specialWord}</span> {normalWord}
                </h1>
                <p
                  className="container-p text-white mb-4"
                  style={{ maxWidth: 650 }}
                >
                  {description}
                </p>
              </div>
            </div>
            {features?.map((feature, i) => (
              <div className="single-video-box" key={i}>
                <i>
                  <FontAwesomeIcon icon={feature?.icon} color="#ffd23c"/>
                </i>
                <h5>{feature?.title} </h5>
                <p>{feature?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFeatures_2;
