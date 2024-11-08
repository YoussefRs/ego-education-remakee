import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  faFlask,
  faUsers,
  faComments,
  faPersonChalkboard,
  faBookOpenReader,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function HomeFeatures() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  const { t } = useTranslation();
  const { b1, b2, b3 } = t("home.homeFeatures.bulls");
  return (
    <div id="about" className="section">
      <div className="container" id="about_ctr">
        <div className="row gap-5">
          <div className="col-xl-5 col-lg-5 d-flex align-items-center">
            <div
              className="drem-job d-none d-sm-block wow fadeInRight"
              data-wow-delay=".7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInRight",
              }}
            >
              <img
                src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/02/new-Blog-6-JPG.webp"
                alt=""
                style={{ height: 400 }}
                data-aos={"fade-up"}
              />
              <div className="dr-sm-img">
                <img
                  src="https://corporate.bestbuy.com/wp-content/uploads/2022/07/computing-blog-bts-e1659126841179.png"
                  alt=""
                  data-aos={"fade-up"}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center flex-column justify-content-center gap-4" id="feat">
            <div className="section-header">
             {/*  <h2 className="container-heading text-start" data-aos={"slide-left"}>
                {t("home.homeFeatures.sectionHeader.title")}
              </h2> */}
              <h1 className="container-title-extra text-start text-white" data-aos={"slide-left"} style={{ fontFamily : 'Gotham Light'}}>
                {t("home.homeFeatures.sectionHeader.subtitle")}{" "}
                <span style={{ color: "#ffd23c" }}>life</span>
              </h1>
              <p className="container-p text-start text-white" data-aos={"slide-left"}>
                {t("home.homeFeatures.sectionHeader.description")}
              </p>
            </div>

            <div className="feature d-flex justify-content-between w-100" data-aos={"zoom-in"}>
              <FontAwesomeIcon icon={faFlask}  className="feature-icon" />

              <div className="feature-content">
                <h4 style={{ fontFamily : 'Gotham Light'}}>{t("home.homeFeatures.features.0.title")}</h4>
                <p>{t("home.homeFeatures.features.0.description")}</p>
              </div>
            </div>

            <div className="feature" data-aos={"zoom-in"}>
              <FontAwesomeIcon icon={faUsers} className="feature-icon" />
              <div className="feature-content">
                <h4 style={{ fontFamily : 'Gotham Light'}}>{t("home.homeFeatures.features.1.title")}</h4>
                <p>{t("home.homeFeatures.features.1.description")}</p>
              </div>
            </div>

            <div className="feature" data-aos={"zoom-in"}>
              <FontAwesomeIcon icon={faComments} className="feature-icon" />
              <div className="feature-content">
                <h4 style={{ fontFamily : 'Gotham Light'}}>{t("home.homeFeatures.features.2.title")}</h4>
                <p>{t("home.homeFeatures.features.2.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFeatures;
