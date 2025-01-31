import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeLecturers() {
  const { t } = useTranslation();
  const { title, subtitle, specialWord, lecturers } = t("home.homeLecturers");

  const {
    ouur,
    lecc,
  } = t("about");

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  return (
    <>
      {/* <h2
        className="container-heading-green"
        data-aos={"zoom-in"}
        data-aos-delay={"600"}
      >
        {title}
      </h2> */}
     <div className="lecturers-section-about d-flex flex-column py-5">
          {/*   <h2
            className="container-heading-green"
            style={{ color: "#046635" }}
            data-aos={"zoom-in"}
          >
            Our Lecturers
          </h2> */}
          <h1
            className="container-title-extra text-black fw-bold text-center mb-5"
            data-aos={"zoom-in"}
          >
            {ouur}
            <span style={{ color: "#046635" }}> {lecc} </span>
          </h1>
          <div className="container d-flex align-items-center justify-content-center">
            <div className="row">
              {lecturers?.map((lecturer, i) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 "
                  data-aos={"flip-up"}
                >
                  <div className="card mb-3">
                    <img
                      className="card-img-top"
                      src={lecturer.img}
                      height="380"
                      alt="Card image cap"
                    />
                    <div className="lecturer-detail">
                      <h5 className="card-title heading text-center">
                        {lecturer.name}{" "}
                      </h5>
                      <span className="subheading">{lecturer.title}</span>
                      <blockquote>
                        <p>{lecturer.description} </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
}

export default HomeLecturers;
