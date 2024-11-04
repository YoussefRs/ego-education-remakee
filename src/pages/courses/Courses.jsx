import React, { useState } from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import useCourse from "../../hooks/useCourses";
import SubHeader from "../../globals/SubHeader/SubHeader";
import ApplyWidget from "../../globals/Widgets/ApplyWidget";
import { useTranslation } from "react-i18next";
import ContactWidget from "../../globals/Widgets/ContactWidget";
import egoBlack from "../../assets/Logos/logo-ego-black.png";
function Courses() {
  const { t } = useTranslation();
  const { tab } = t("courseTab");
  const { d1, d2, d3 } = t("degrees");
  const { button } = t("home.courseDetails");

  const courses = useCourse({
    type: "byProperties",
    param: ["name", "thumb", "id", "institute", "degree", "slogan", "price", "totalModules"],
  });
  const [activePane, setActivePane] = useState("our_courses");

  return (
    <>
      <SubHeader
        title={"Courses"}
        path={[{ url: "/", label: "Home" }]}
        current={"Courses"}
      />
      <div className="container mt-5 mb-5">
        <div className="row page-row">
          <div className="courses-wrapper col-lg-8 col-md-12 col-12">
            <div className="featured-courses tabbed-info page-row">
              {/*  <ul className="nav nav-tabss">
                <li
                  className="nav-item"
                  onClick={() => {
                    setActivePane("our_courses");
                  }}
                >
                  <Link
                    className={`nav-link ${
                      activePane === "our_courses" ? "active" : ""
                    }`}
                  >
                    <div className="course-logo-ctr">
                      <img src={egoBlack} alt="eGo Education" />
                    </div>
                    {tab}
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    setActivePane("Featured");
                  }}
                >
                  <Link
                    className={`nav-link ${
                      activePane === "Featured" ? "active" : ""
                    }`}
                  >
                    <div className="course-logo-ctr">
                      <img
                        src="https://pegasointernational.eu/app/templates/public/default/assets/images/logo.png"
                        alt="pegaso icon"
                      />
                    </div>
                    Pegaso International
                  </Link>
                </li>
              </ul> */}
              <div className="tab-content">
                <div
                  className={`tab-pane ${
                    activePane === "Featured" ? "active" : ""
                  }`}
                  id="tab1"
                >
                  <div className="row course-list">
                    <p
                      className="col-12 fw-bold h4 mt-3"
                      style={{ color: "#046635" }}
                    >
                      {d1}
                    </p>
                    <div className="course-list">
                      {courses
                        .filter(
                          (course) =>
                            course.institute === "Pegaso" &&
                            (course.degree === "Master Degree" ||
                              course?.degree === "Mestrado")
                        )
                        .map((crs, i) => (
                          <div className="course" key={i}>
                            <Link to={`/courses/${crs.id}`}>
                              <img src={crs.thumb} alt="HTML Course " />
                              <div className="description">
                                <h2>{crs.name} </h2>
                                <p>{crs.slogan}</p>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-end w-100">
                                <button className="text-start">
                                  <FontAwesomeIcon
                                    icon={faGraduationCap}
                                    className="me-1"
                                  />
                                  {button}
                                </button>
                              </div>
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="row course-list">
                    <p
                      className="col-12 fw-bold h4 mt-3"
                      style={{ color: "#046635" }}
                    >
                      {d2}
                    </p>

                    <div className="course-list">
                      {courses
                        .filter(
                          (course) =>
                            course.institute === "Pegaso" &&
                            (course.degree === "Bachelor Degree" ||
                              course.degree === "Bacharelado")
                        )
                        .map((crs, i) => (
                          <div className="course" key={i}>
                            <Link to={`/courses/${crs.id}`}>
                              <img src={crs.thumb} alt="img" />
                              <div className="description">
                                <h2>{crs.name} </h2>
                                <p>{crs.slogan}</p>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-end w-100">
                                <button className="text-start">
                                  <FontAwesomeIcon
                                    icon={faGraduationCap}
                                    className="me-1"
                                  />
                                  {button}
                                </button>
                              </div>
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* <div className="row course-list">
                    <p
                      className="col-12 fw-bold h4 mt-3"
                      style={{ color: "#046635" }}
                    >
                      {d3}
                    </p>
                    <div className="course-list">
                      {courses
                        .filter(
                          (course) =>
                            course.institute === "Pegaso" &&
                            (course.degree === "PhD" ||
                              course.degree === "Doutorado")
                        )
                        .map((crs) => (
                          <div className="course" key={crs.id}>
                            <Link to={`/courses/${crs.id}`}>
                              <img src={crs.thumb} alt="HTML Course Image" />
                              <div className="description">
                                <h2>{crs.name} </h2>
                                <p>{crs.slogan}</p>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-end w-100">
                                <button className="text-start">
                                  <FontAwesomeIcon
                                    icon={faGraduationCap}
                                    className="me-1"
                                  />
                                  {button}
                                </button>
                              </div>
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div> */}
                </div>
                <div
                 /*  className={`tab-pane ${
                    activePane === "our_courses" ? "active" : ""
                  }`} */
                  id="tab2"
                >
                  <div className="row course-list">
                    <p
                      className="col-12 fw-bold h4 mt-3"
                      style={{ color: "#046635" }}
                    >
                      {d1}
                    </p>
                    <div className="course-list">
                      {courses
                        .filter(
                          (course) => course.institute === "Ego Education"
                        )
                        .map((crs) => (
                          <div className="course" key={crs.id}>
                            <Link
                              to={{
                                pathname: `/courses/${crs.id}`,
                              }}
                            >
                              <img src={crs.thumb} alt="HTML Course Image" />
                              <div className="description">
                                <h2>{crs.name} </h2>
                                <p>{crs.slogan}</p>

                                <p className="mb-0">Modules : <span className="fw-bold">{crs.totalModules}</span></p>
                                <p>Price : <span className="fw-bold">{crs.price} €</span></p>
                              </div>
                              <hr />
                              <div className="d-flex justify-content-end w-100">
                                <button className="text-start">
                                  <FontAwesomeIcon
                                    icon={faGraduationCap}
                                    className="me-1"
                                  />
                                  {button}
                                </button>
                              </div>
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-sidebar  col-lg-4 col-md-12">
            <div className="right_box mb-5">
              <div>
                <ApplyWidget />
              </div>
            </div>
            <div className="right_box">
              <ContactWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
