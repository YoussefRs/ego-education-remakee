import React from "react";
import IntroVideo from "../../assets/Home/finalIntro.mp4";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeHero() {
  const { t } = useTranslation();
  const { line1, line2, line3, button } = t("home.hero");
  return (
    <section id="home" data-stellar-background-ratio="0.5">
      <div className="container mt-5" data-aos={"zoom-in"} >
        <div className="row">
          <div className="col-md-12 col-lg-4 col-sm-12 d-flex align-items-center">
            <div className="d-flex flex-column text-white gap-3">
              <h1>{line1} </h1>
              <h2 className="text-white _font">{line2}</h2>
              {/* <span className="mx-0">{line3}</span> */}

              <button>{button}</button>
            </div>
          </div>

          <div className="col-md-12 col-lg-8 col-sm-12 d-flex align-items-center" id="video_container">
            <div className="embed-responsive embed-responsive-16by9">
              <video
                muted
                autoPlay
                loop
                id="video-background"
                className="videoo"
              >
                // <source src={IntroVideo} type="video/mp4" />
                //{" "}
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
