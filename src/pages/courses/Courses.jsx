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
    param: [
      "name",
      "thumb",
      "id",
      "institute",
      "degree",
      "slogan",
      "price",
      "totalModules",
    ],
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

                                <p className="mb-0 d-flex align-items-center gap-1">
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#046635"
                                    className="bi bi-card-checklist"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                                  </svg>{" "}
                                  Modules :{" "}
                                  <span className="fw-bold">
                                    {crs.totalModules}
                                  </span>
                                </p>
                                <p className="mb-0 d-flex align-items-center gap-1">
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#046635"
                                    class="bi bi-globe"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                  </svg>{" "}
                                  Location :{" "}
                                  <span className="fw-bold">Online</span>
                                </p>
                                <p className="mb-0 d-flex align-items-center gap-1">
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="#046635"
                                    class="bi bi-tags-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"></path>
                                    <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"></path>
                                  </svg>{" "}
                                  Price :{" "}
                                  <span className="fw-bold">{crs.price} €</span>
                                </p>
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
