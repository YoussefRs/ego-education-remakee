import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubHeader from "../../globals/SubHeader/SubHeader";
import ContactWidget from "../../globals/Widgets/ContactWidget";

function ConfirmPolicy() {
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
      <div className="p-5 row">
        <div className="col-lg-8 mb-5">
          <h6>
            To properly enrol, make sure you have all the following documents
            ready:
          </h6>{" "}
          <br />
          <ul className="custom-list-style">
            <li className="d-flex mb-2">
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
              <span>
                Previous academic career (Exams + ECTS if you have taken exams
                at other universities and have not yet graduated).
              </span>
            </li>
            <li>
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
              <span>
                Degree obtained. Qualifications issued in English, Spanish,
                French, Italian are accepted.
              </span>
            </li>
            <li>
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
              <span>Updated CV in English.</span>
            </li>
            <li>
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
              <span>Copy of a valid identification document.</span>
            </li>
            <li>
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
              <span>
                For other languages, the qualification must be translated into
                English or Italian.
              </span>
            </li>
            <br />
            <li>
              <div class="content">
                Linguistic certifications held among the following, if not
                native or not possessing a degree in the following languages:
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
                            class="bi bi-dot"
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
                    class="bi bi-dot"
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
                            class="bi bi-dot"
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
                To access the Bachelor’s, at least a{" "}
                <span className="fw-bold ego-green">B2</span> level of knowledge
                of the English or Italian language is required, while for the
                Master’s, at least a{" "}
                <span className="fw-bold ego-green">C1 </span>
                level is <span className="fw-bold ego-green">required</span>
                .
                <br />
                <br />
                All educational qualifications (such as high school diploma,
                bachelor’s, master’s) should be apostilled through a
                certification of value at the Maltese or Italian embassies
                abroad.
                <br />
                <br />
                Once registration is complete, our team will review your
                documents and information within 72 hours. We&#39;ll email you
                an update.
                <br />
                <br />
                Upon{" "}
                <span className="fw-bold ego-green">payment confirmation</span>
                , you&#39;ll get your username and password via email to start
                your online learning journey.
                <br />
                <br />
                <span className="fw-bold ego-green">
                  Welcome to eGO Education.
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
            I confirm that I have thoroughly reviewed and understood all the
            entry requirements.
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
            Apply
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
