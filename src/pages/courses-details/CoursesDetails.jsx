import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faListCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarAlt,
  faCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./CoursesDetails.css";
import SubHeader from "../../globals/SubHeader/SubHeader";
import InfoWidget from "../../globals/Widgets/InfoWidget";
import ContactWidget from "../../globals/Widgets/ContactWidget";
import CourseSliderDetails from "../../globals/Sliders/CourseSliderDetails";
import { useTranslation } from "react-i18next";
import Modal from "../../globals/Modal/Modal";
import { useModal } from "../../globals/Modal/useModal";
import ApplyWidget from "../../globals/Widgets/ApplyWidget";

function extractIdFromPathname(pathname) {
  // Split the pathname by '/'
  const pathParts = pathname.split("/");
  // The last part of the path should be the id
  const id = pathParts[pathParts.length - 1];
  return id;
}

function CoursesDetails() {
  const [activePane, setActivePane] = useState("Overview");
  const { t } = useTranslation();
  const location = useLocation();
  const courseId = extractIdFromPathname(location.pathname);
  const [course, setCourse] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const { showModal, openModal, closeModal } = useModal();

  const [isImage1Visible, setIsImage1Visible] = useState(true);
  const [isImage2Visible, setIsImage2Visible] = useState(true);
  const [isParagraph1Visible, setIsParagraph1Visible] = useState(false);
  const [isParagraph2Visible, setIsParagraph2Visible] = useState(false);

  const handleImage1Click = () => {
    setIsImage1Visible(false);
    setIsImage2Visible(false);
    setIsParagraph1Visible(true);
  };

  const handleImage2Click = () => {
    setIsImage1Visible(false);
    setIsImage2Visible(false);
    setIsParagraph2Visible(true);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
  const {
    title,
    title1,
    title2,
    title3,
    title4,
    title5,
    tab2,
    tab3,
    tab4,
    tab5,
  } = t("home.courseDetails");

  const { button } = t("widget.apply");

  const requiredDocuments = {
    english: {
      options: [
        "TOEFL IBT",
        "IELTS",
        "Cambridge Certificates",
        "English Speaking Board (International) Ltd",
        "Pearson English International Certificate",
        "Trinity College London Certificates",
        "City & Guilds International ESOL (IESOL)",
      ],
    },
    italian: {
      language: "Italian",
      options: ["CELI", "CILS", "AIL", "PLIDA", "IT"],
    },
  };

  useEffect(() => {
    if (courseId) {
      const { coursesData } = t("home.courseDetails");
      const courseDetails = coursesData.find(
        (course) => course.id === courseId
      );
      setCourse(courseDetails);
    } else {
      setCourse(null);
    }
  }, [courseId, t]);

  if (!course) {
    return null;
  }
  return (
    <>
      <SubHeader
        title={course?.name}
        path={[
          { url: "/", label: "Home" },
          { url: "/courses", label: "Courses" },
        ]}
        current={course?.name}
      />

      <Modal title="My Modal" show={showModal} onHide={closeModal}></Modal>

      <div className="content container mb-5">
        <div className="page-content mt-5">
          <div className="row page-row gap-4">
            <section className="ban_sec">
              <div className="container p-0">
                <div className="ban_img">
                  <img src={course?.media?.source} alt="banner" border="0" />
                  <div className="ban_text">
                    <strong>
                      <span>{course?.name} </span>
                      <br />
                    </strong>
                    <p>{course?.slogan}</p>
                    <Link onClick={openModal}>Apply</Link>
                  </div>
                </div>
              </div>
            </section>
            <div className="row page-row">
              <div className="courses-wrapper col-lg-8 col-md-8 col-12">
                <div className="featured-courses tabbed-info page-row">
                  <ul className="nav nav-tabss">
                    <li
                      className="nav-item"
                      onClick={() => {
                        setActivePane("Overview");
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          activePane === "Overview" ? "active" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-view-stacked"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                        </svg>
                        {title}
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => {
                        setActivePane("Modules");
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          activePane === "Modules" ? "active" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-card-checklist"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                          <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                        </svg>
                        {tab3}
                      </Link>
                    </li>

                    <li
                      className="nav-item"
                      onClick={() => {
                        setActivePane("Duration");
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          activePane === "Duration" ? "active" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-clock"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                        </svg>
                        {tab4}
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => {
                        setActivePane("Lecturer");
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          activePane === "Lecturer" ? "active" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-person-video"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z" />
                        </svg>
                        {tab5}
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => {
                        setActivePane("Entry");
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          activePane === "Entry" ? "active" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-file-earmark-check"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                        {tab2}
                      </Link>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => {
                        setActivePane("Sponsor");
                      }}
                    >
                      <Link
                        className={`nav-link ${
                          activePane === "Sponsor" ? "active" : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-file-earmark-check"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                        Sponsor
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className={`tab-pane ${
                        activePane === "Overview" ? "active" : ""
                      }`}
                      id="tab2"
                    >
                      <h2 className="mb-4 fw-bold">{title} </h2>
                      <div className="tab row">
                        <div className="col">
                        {/*   <div className="mb-4 w-100">
                            <ul className="list-unstyled no-margin-bottom">
                              <li>
                                <strong>
                                  <FontAwesomeIcon
                                    icon={faCalendarAlt}
                                    color="#046635"
                                  />{" "}
                                  {title4}:
                                </strong>{" "}
                                <em>{course?.startDate}</em>
                              </li>
                            </ul>
                          </div> */}
                          <article className="welcome col-12">
                            <p className="mb-4">{course?.description}</p>
                            <h2 className="mb-4 fw-bold">{title1} </h2>
                            <ul className="custom-list-style mb-3">
                              {course?.career?.map((carr, i) => (
                                <li key={i}>
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    color="#046635"
                                    size={20}
                                    style={{ paddingRight: 10, marginTop: 3 }}
                                  />
                                  {carr}
                                </li>
                              ))}
                            </ul>
                          </article>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activePane === "Entry" ? "active" : ""
                      }`}
                      id="tab1"
                    >
                      {/* <h2 className="mb-4 fw-bold">Entry Requirements</h2> */}
                      <div className="tab row">
                        <div className="col">
                          <div class="content">
                            {isImage1Visible && isImage2Visible && (
                              <div class="grid">
                                <figure class="effect-layla">
                                  <img
                                    src="https://t3.ftcdn.net/jpg/04/11/83/68/360_F_411836831_iAmsQWfsq1NZoid8XwiM60iz0WDTjGsI.jpg"
                                    alt="img06"
                                  />
                                  <figcaption>
                                    <h2>
                                      Request <span>Evalution</span>
                                    </h2>
                                    <a onClick={handleImage1Click}>View more</a>
                                  </figcaption>
                                </figure>
                                <figure class="effect-layla">
                                  <img
                                    src="https://images.ctfassets.net/8bbwomjfix8m/migrated_1694_image1/810539178d1fd8891ed772d4963f1fd5/Study_Abroad_Intakes_In_Ireland_-_Why_The_Timing_Of_Your_Application_Matters_"
                                    alt="img03"
                                  />
                                  <figcaption>
                                    <h2>
                                      Apply <span>Now</span>
                                    </h2>
                                    <a onClick={handleImage2Click}>View more</a>
                                  </figcaption>
                                </figure>
                              </div>
                            )}
                            {isParagraph2Visible && (
                              <article className="welcome col-12">
                                <div className="para-div mb-3 d-flex align-items-center justify-content-between">
                                  <h6 className=" fw-bold">
                                    <FontAwesomeIcon
                                      icon={faListCheck}
                                      color="#046635"
                                    />{" "}
                                    Entry Requirements
                                  </h6>
                                  <button
                                    className="button-green d-flex align-items-center gap-2"
                                    onClick={() => {
                                      setIsImage1Visible(true);
                                      setIsImage2Visible(true);
                                      setIsParagraph1Visible(false);
                                      setIsParagraph2Visible(false);
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-box-arrow-left"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                                      />
                                    </svg>
                                    <span>Back</span>
                                  </button>
                                </div>
                                <h6>
                                  Around here, we know your time is valuable.
                                  That&#39;s why our enrolment process is
                                  simple, quick and is available all year round.
                                </h6>{" "}
                                On the next page you will be able to give us all
                                the information necessary to complete your
                                registration. You will be required to upload the
                                following documents:
                                <br />
                                <br />
                                <ul className="custom-list-style">
                                  <li className="d-flex mb-2">
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      color="#046635"
                                      size={20}
                                      style={{ paddingRight: 10, marginTop: 3 }}
                                    />
                                    <span>
                                      Previous academic career (Exams + ECTS if
                                      you have taken exams at other universities
                                      and have not yet graduated).
                                    </span>
                                  </li>
                                  <li>
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      color="#046635"
                                      size={20}
                                      style={{ paddingRight: 10 }}
                                    />
                                    <span>
                                      Degree obtained. Qualifications issued in
                                      English, Spanish, French, Italian are
                                      accepted.
                                    </span>
                                  </li>
                                  <li>
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      color="#046635"
                                      size={20}
                                      style={{ paddingRight: 10 }}
                                    />
                                    <span>
                                      For other languages, the qualification
                                      must be translated into English or
                                      Italian.
                                    </span>
                                  </li>
                                  <li>
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      color="#046635"
                                      size={20}
                                      style={{ paddingRight: 10 }}
                                    />
                                    <div class="content">
                                      Linguistic certifications held among the
                                      following:
                                      <ul className="custom-list-style">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          color="#046635"
                                          width="25"
                                          height="25"
                                          fill="currentColor"
                                          class="bi bi-dot"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <span style={{ fontWeight: 600 }}>
                                          English
                                        </span>
                                        <li className="d-flex mb-2">
                                          <ul className="custom-list-style d-flex flex-column">
                                            {requiredDocuments?.english.options.map(
                                              (option, i) => (
                                                <span key={i}>
                                                  {" "}
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    color="#046635"
                                                    width="25"
                                                    height="10"
                                                    fill="currentColor"
                                                    class="bi bi-dot"
                                                    viewBox="0 0 16 16"
                                                  >
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                  </svg>
                                                  {option}
                                                </span>
                                              )
                                            )}
                                          </ul>
                                        </li>
                                      </ul>
                                      <ul className="custom-list-style">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          color="#046635"
                                          width="25"
                                          height="25"
                                          fill="currentColor"
                                          class="bi bi-dot"
                                          viewBox="0 0 16 16"
                                        >
                                          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                        </svg>
                                        <span style={{ fontWeight: 600 }}>
                                          Italian
                                        </span>
                                        <li className="d-flex mb-2">
                                          <ul className="custom-list-style d-flex flex-column">
                                            {requiredDocuments?.italian.options.map(
                                              (option, i) => (
                                                <span key={i}>
                                                  {" "}
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    color="#046635"
                                                    width="25"
                                                    height="10"
                                                    fill="currentColor"
                                                    class="bi bi-dot"
                                                    viewBox="0 0 16 16"
                                                  >
                                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                                  </svg>
                                                  {option}
                                                </span>
                                              )
                                            )}
                                          </ul>
                                        </li>
                                      </ul>
                                      To access the Bachelor’s, at least a{" "}
                                      <span className="fw-bold ego-green">
                                        B2
                                      </span>{" "}
                                      level of knowledge of the English or
                                      Italian language is required, while for
                                      the Master’s, at least a{" "}
                                      <span className="fw-bold ego-green">
                                        C1{" "}
                                      </span>
                                      level is{" "}
                                      <span className="fw-bold ego-green">
                                        required
                                      </span>
                                      .
                                      <br />
                                      <br />
                                      In the absence of a linguistic
                                      certification, at the time of enrolment
                                      there will be an entrance test to
                                      ascertain linguistic knowledge and general
                                      culture. In case of deficiency there will
                                      be foundation courses.
                                      <br />
                                      <br />
                                      To properly enrol, all educational
                                      qualifications (such as high school
                                      diploma, bachelor’s, master’s) should be
                                      apostilled through a{" "}
                                      <span className="fw-bold ego-green">
                                        certification of value at the Maltese or
                                        Italian embassies abroad
                                      </span>
                                      .
                                      <br />
                                      <br />
                                      In any case, while waiting for the
                                      apostille or to simply understand if one
                                      is eligible, a normal copy of the
                                      aforementioned qualifications is enough.
                                      <br />
                                      <br />
                                      Once registration is complete, our team
                                      will review your documents and information
                                      within 72 hours. We&#39;ll email you an
                                      update.
                                      <br />
                                      <br />
                                      Upon{" "}
                                      <span className="fw-bold ego-green">
                                        payment confirmation
                                      </span>
                                      , you&#39;ll get your username and
                                      password via email to start your online
                                      learning journey.
                                      <br />
                                      <br />
                                      <span className="fw-bold ego-green">
                                        Welcome to eGO Education.
                                      </span>
                                      <br />
                                      <br />
                                      <label className="mb-3">
                                        <input
                                          type="checkbox"
                                          checked={isChecked}
                                          onChange={handleCheckboxChange}
                                          style={{
                                            marginRight: 10,
                                            marginBottom: 10,
                                          }}
                                        />
                                        I confirm that I have thoroughly
                                        reviewed and understood all the entry
                                        requirements.
                                      </label>
                                      <br />
                                      <Link
                                        className={`${
                                          isChecked ? "" : "entry_inactive"
                                        }`}
                                        // to={`/apply/${course?.id}`}
                                        onClick={openModal}
                                        state={{
                                          course: course.name,
                                          degree: course.degree,
                                          inst: course.institute,
                                        }}
                                      >
                                        Apply
                                      </Link>
                                    </div>
                                  </li>
                                </ul>
                              </article>
                            )}
                            {isParagraph1Visible && (
                              <article className="welcome col-12">
                                <div className="para-div mb-3 d-flex align-items-center justify-content-between">
                                  <h6 className=" fw-bold">
                                    <FontAwesomeIcon
                                      icon={faListCheck}
                                      color="#046635"
                                    />{" "}
                                    Evaluation
                                  </h6>
                                  <button
                                    className="button-green d-flex align-items-center gap-2"
                                    onClick={() => {
                                      setIsImage1Visible(true);
                                      setIsImage2Visible(true);
                                      setIsParagraph1Visible(false);
                                      setIsParagraph2Visible(false);
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      class="bi bi-box-arrow-left"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                                      />
                                    </svg>
                                    <span>Back</span>
                                  </button>
                                </div>
                                <h6>
                                In any case, while waiting for the apostille or to simply understand if one is eligible, a normal copy of the following qualifications is enough:
                                </h6>{" "}
                                <br />
                                <ul className="custom-list-style">
                                  <li className="d-flex mb-2">
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      color="#046635"
                                      size={20}
                                      style={{ paddingRight: 10, marginTop: 3 }}
                                    />
                                    <span>
                                      Previous academic career (Exams + ECTS if
                                      you have taken exams at other universities
                                      and have not yet graduated).
                                    </span>
                                  </li>
                                  <li>
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      color="#046635"
                                      size={20}
                                      style={{ paddingRight: 10 }}
                                    />
                                    <span>
                                    Updated CV in English.
                                    </span>
                                  </li>
                                  <li>
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      color="#046635"
                                      size={20}
                                      style={{ paddingRight: 10 }}
                                    />
                                    <span>
                                    Degree obtained. Qualifications issued in English, Spanish, French, Italian are accepted.
                                    </span>
                                  </li>
                                </ul>
                                <h6 className="mb-5">
                                The student will receive via email the evaluation of their academic and/or work credits and will assign them their study plan and year of enrolment
                               </h6>{" "}
                               <button className="text-white button-green" onClick={openModal}>
          {button}
        </button>

        <Modal
        title="My Modal"
        show={showModal}
        onHide={closeModal}
        size="lg"
      ></Modal>
                              </article>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activePane === "Modules" ? "active" : ""
                      }`}
                      id="tab2"
                    >
                      <h2 className="mb-4 fw-bold">Modules</h2>
                      <div className="tab">
                        <main className="modules-container">
                          <section id="faq" className="faq">
                            <div className="container">
                              <div className="faq-list">
                                <ul>
                                  {course?.modules?.map((module, i) => (
                                    <li key={i}>
                                      <a
                                        data-bs-toggle="collapse"
                                        className="collapse"
                                        data-bs-target={`#faq-list-${i + 1}`}
                                      >
                                        <div className="row">
                                          <div className="col-8">
                                            {module?.title}{" "}
                                          </div>
                                          <div className="col-4 text-end">
                                            ECTS : {module?.ects}
                                          </div>
                                        </div>
                                      </a>
                                      <div
                                        id={`faq-list-${i + 1}`}
                                        className="collapse close"
                                        data-bs-parent=".faq-list"
                                      >
                                        <p>{module?.description}</p>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </section>
                        </main>
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activePane === "Duration" ? "active" : ""
                      }`}
                      id="tab2"
                    >
                      <h2 className="mb-4 fw-bold">Duration</h2>
                      {/* <div className="tab">
                        <main className="modules-container">
                          <h6 className="fw-bold mb-4">
                            {course?.admission?.desc}{" "}
                          </h6>
                          <ul className="custom-list-style mb-3">
                            {course?.admission?.req?.map((reqq, i) => (
                              <li key={i}>
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  color="#046635"
                                  size={20}
                                  style={{ paddingRight: 10, marginTop: 3 }}
                                />
                                {reqq}
                              </li>
                            ))}
                          </ul>
                        </main>
                      </div> */}
                      <p>
                        Programme can be delivered full and/or part time
                        depending on the availability of students.
                      </p>
                      <div className="row">
                        <div className="col mb-2">
                          {" "}
                          <div class="outer">
                            <div class="progress dark">
                              <div class="left">
                                <div className="fw-bold">Part Time</div>
                                <div>Semester 1</div>
                                <div>Semester 2</div>
                                <div>Semester 3</div>
                                <div>Semester 4</div>
                                <div>Semester 5</div>
                              </div>
                              <div class="right">
                                <div className="fw-bold">32 Months</div>
                                <div>Module 1, 2</div>
                                <div>Module 3, 4</div>
                                <div>Module 5</div>
                                <div>Module 6 + Dissertation kick off</div>
                                <div>complete dissertation</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          {" "}
                          <div class="outer">
                            <div class="progress dark">
                              <div class="left">
                                <div className="fw-bold">Full-Time</div>
                                <div>Semester 1</div>
                                <div>Semester 2</div>
                                <div>Semester 3</div>
                              </div>
                              <div class="right">
                                <div className="fw-bold">18 Months</div>
                                <div>Module 1, 2, 3, 4</div>
                                <div>Module 5, 6 + Dissertation kick off</div>
                                <div>complete dissertation</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activePane === "Lecturer" ? "active" : ""
                      }`}
                      id="tab2"
                    >
                      <h2 className="mb-4 fw-bold">Lecturer</h2>
                      <div className="tab">
                        <main className="modules-container">
                          <div className="row">
                            <div className="col-sm-12 col-md-7">
                              <p>
                                {course?.lecturer?.desc}
                                <br />
                                <br />
                                {course?.lecturer?.desc2}
                              </p>
                            </div>
                            <div className="col-sm-12 col-md-5">
                              <div className="lecturer-card">
                                <img
                                  src={course?.lecturer?.img}
                                  alt="lecturer"
                                />
                                <div className="lecturer-desc">
                                  <span>{course?.lecturer?.name}</span>
                                  <p>{course?.lecturer?.speciality} </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </main>
                      </div>
                    </div>

                    <div
                      className={`tab-pane ${
                        activePane === "Sponsor" ? "active" : ""
                      }`}
                      id="tab2"
                    >
                      <div className="tab">
                        <main className="modules-container"></main>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="fw-bold mb-4 mt-5">{title3} </h2>
                  <CourseSliderDetails />
                </div>
              </div>

              <aside className="page-sidebar col-lg-4 col-md-4">
                <h2 className="fw-bold">{title2} </h2>
                <div className="right_box mb-5">
                  <div className="p-4">
                    <InfoWidget course={course} />
                  </div>
                </div>
                {/* <div className="mb-5">
                  <ApplyWidget />
                </div> */}
                <div>
                  <ContactWidget />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesDetails;
