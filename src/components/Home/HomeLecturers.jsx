import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeLecturers() {
  const { t } = useTranslation();
  const { title, subtitle, specialWord, lecturers } = t("home.homeLecturers");
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  return (
    <>
      <h2
        className="container-heading-green"
        data-aos={"zoom-in"}
        data-aos-delay={"600"}
      >
        {title}
      </h2>
      <h1
        className="container-title-extra text-center fw-bold"
        data-aos={"zoom-in"}
        data-aos-delay={"600"}
      >
        {subtitle} <span style={{ color: "#046635" }}>{specialWord}</span>
      </h1>

      <section id="lecturers">
        <div className="container py-2">
          <div className="row">
            {lecturers?.map((lecturer, i) => (
              <div className="col-lg-4 col-md-6 mb-4 pt-4">
                <div className="card shadow-sm border-0 m-0" data-aos={"flip-up"}>
                  <div className="card-body">
                    {/* <div className="user-picture">
                      <img
                        src={lecturer?.img}
                        alt={lecturer?.name}
                        className="shadow-sm rounded-circle"
                        height="130"
                        width="130"
                      />
                    </div> */}
                    <div className="user-content">
                      <h5 className="text-capitalize user-name">
                        {lecturer?.name}
                      </h5>
                      {/* <p className=" text-capitalize text-muted small blockquote-footer">
                        {lecturer?.title}
                      </p> */}
                      <p className="small text-muted mb-0">
                       {lecturer?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeLecturers;
