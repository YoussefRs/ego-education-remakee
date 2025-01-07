import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubHeader from "../../globals/SubHeader/SubHeader";
import ContactWidget from "../../globals/Widgets/ContactWidget";
import { useTranslation } from "react-i18next";

function ConfirmPolicy() {
  const {t} = useTranslation()
  const {heading, documents, linguisticCertifications, educationalQualifications, reviewProcess, paymentConfirmation, welcomeMessage, checkboxLabel, applyButton} = t("apply")
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

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

  return (
    <div>
      <SubHeader
        title={"Entry Requirement"}
        path={[{ url: "/", label: "home" }]}
        current={"Entry Requirement"}
      />
      <div className="px-md-5 py-md-5 py-3 ps-2 pe-1 row" id="apply-page">
        <div className="col-lg-8 mb-5">
          <h6>
            {heading}
          </h6>{" "}
          <br />
          <ul className="custom-list-style ps-0">
            <li className="d-flex mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="#046635"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              </svg>
              <span>
               {documents.academicCareer}
              </span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="#046635"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              </svg>
              <span>
              {documents.degreeObtained}
              </span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="#046635"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              </svg>
              <span> {documents.cv}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="#046635"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              </svg>
              <span>{documents.idDocument}</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="#046635"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              </svg>
              <span>
              {documents.translationRequirement}
              </span>
            </li>
            <br />
            <li>
              <div className="content">
                {linguisticCertifications.heading}
                <ul className="custom-list-style">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="#046635"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-dot"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                  <span style={{ fontWeight: 600 }}>English</span>
                  <li className="d-flex mb-2">
                    <ul className="custom-list-style d-flex flex-column">
                      {requiredDocuments?.english.options.map((option, i) => (
                        <span key={i}>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            color="#046635"
                            width="25"
                            height="10"
                            fill="currentColor"
                            className="bi bi-dot"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                          </svg>
                          {option}
                        </span>
                      ))}
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
                    className="bi bi-dot"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                  <span style={{ fontWeight: 600 }}>Italian</span>
                  <li className="d-flex mb-2">
                    <ul className="custom-list-style d-flex flex-column">
                      {requiredDocuments?.italian.options.map((option, i) => (
                        <span key={i}>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            color="#046635"
                            width="25"
                            height="10"
                            fill="currentColor"
                            className="bi bi-dot"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                          </svg>
                          {option}
                        </span>
                      ))}
                    </ul>
                  </li>
                </ul>
                {/* To access the Bachelor’s, at least a{" "}
                <span className="fw-bold ego-green">B2</span> level of knowledge
                of the English or Italian language is required, while for the
                Master’s, at least a{" "}
                <span className="fw-bold ego-green">C1 </span>
                level is <span className="fw-bold ego-green">required</span>
                . */}
                {linguisticCertifications.bachelorRequirement}
                <br />
                <br />
                {educationalQualifications}
                <br />
                <br />
                {reviewProcess}
                <br />
                <br />
                {paymentConfirmation}
                <br />
                <br />
                <span className="fw-bold ego-green">
                  {welcomeMessage}
                </span>
                <br />
              </div>
            </li>
          </ul>
          <label>
            <input
              type="checkbox"
              style={{ marginRight: 10, marginBottom: 10 }}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            {checkboxLabel}
          </label>{" "}
          <br />
          <Link
            className={`apply-btn ${isChecked ? "" : "entry_inactive"}`}
            to={"/apply-enrollement"}
            // onClick={openModal}
            // state={{
            //   course: course.name,
            //   degree: course.degree,
            //   inst: course.institute,
            // }}
          >
            {applyButton}
          </Link>
        </div>
        <div className="col-lg-4 ">
          <ContactWidget />
        </div>
      </div>
    </div>
  );
}

export default ConfirmPolicy;
