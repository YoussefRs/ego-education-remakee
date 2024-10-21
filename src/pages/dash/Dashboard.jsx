import React, { useEffect, useState } from "react";
import "./styles.css";

import logo from "../../assets/Logos/logo-ego-white.png";
import { useNavigate } from "react-router-dom";
import AppicantRow from "./components/ApplicantRow/AppicantRow";
import LoginModal from "./components/LoginModal/LoginModal";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const data = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      telephone: "555-1234",
      dateOfBirth: "1990-05-15",
      countryOfBirth: "Some Country",
      cityOfBirth: "Some City",
      gender: "m",
      address: "somewhere 123 something",
      zip: "52134",
      acedemicCareer:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      DegreeObtained:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      Cv: "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      IdentificationDocument:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      LinguisticCertification:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      telephone: "555-5678",
      dateOfBirth: "1988-07-22",
      countryOfBirth: "Some Country",
      cityOfBirth: "Some City",
      gender: "m",
      address: "somewhere 123 something",
      zip: "52134",
      acedemicCareer:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      DegreeObtained:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      Cv: "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      IdentificationDocument:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      // LinguisticCertification:
      //   "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      email: "michael.johnson@example.com",
      telephone: "555-8765",
      dateOfBirth: "1985-11-03",
      countryOfBirth: "Some Country",
      cityOfBirth: "Some City",
      gender: "m",
      address: "somewhere 123 something",
      zip: "52134",
      acedemicCareer:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      DegreeObtained:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      Cv: "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      IdentificationDocument:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      LinguisticCertification:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
    },
    {
      firstName: "Emily",
      lastName: "Williams",
      email: "emily.williams@example.com",
      telephone: "555-4567",
      dateOfBirth: "1992-01-30",
      countryOfBirth: "Some Country",
      cityOfBirth: "Some City",
      gender: "m",
      address: "somewhere 123 something",
      zip: "52134",
      acedemicCareer:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      DegreeObtained:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      Cv: "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      IdentificationDocument:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      LinguisticCertification:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
    },
    {
      firstName: "Chris",
      lastName: "Brown",
      email: "chris.brown@example.com",
      telephone: "555-7890",
      dateOfBirth: "1989-09-15",
      countryOfBirth: "Some Country",
      cityOfBirth: "Some City",
      gender: "m",
      address: "somewhere 123 something",
      zip: "52134",
      acedemicCareer:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      DegreeObtained:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      Cv: "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      IdentificationDocument:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      LinguisticCertification:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
    },
    {
      firstName: "Jessica",
      lastName: "Taylor",
      email: "jessica.taylor@example.com",
      telephone: "555-4321",
      dateOfBirth: "1991-03-17",
      countryOfBirth: "Some Country",
      cityOfBirth: "Some City",
      gender: "m",
      address: "somewhere 123 something",
      zip: "52134",
      acedemicCareer:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      DegreeObtained:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      Cv: "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      IdentificationDocument:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      LinguisticCertification:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
    },
    {
      firstName: "Daniel",
      lastName: "Miller",
      email: "daniel.miller@example.com",
      telephone: "555-7654",
      dateOfBirth: "1990-08-12",
      countryOfBirth: "Some Country",
      cityOfBirth: "Some City",
      gender: "m",
      address: "somewhere 123 something",
      zip: "52134",
      acedemicCareer:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      DegreeObtained:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      Cv: "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      IdentificationDocument:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      LinguisticCertification:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
    },
    {
      firstName: "Sophia",
      lastName: "Davis",
      email: "sophia.davis@example.com",
      telephone: "555-0987",
      dateOfBirth: "1993-02-25",
      countryOfBirth: "Some Country",
      cityOfBirth: "Some City",
      gender: "m",
      address: "somewhere 123 something",
      zip: "52134",
      acedemicCareer:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      DegreeObtained:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      Cv: "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      IdentificationDocument:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      LinguisticCertification:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
    },
    {
      firstName: "David",
      lastName: "Martinez",
      email: "david.martinez@example.com",
      telephone: "555-6789",
      dateOfBirth: "1987-06-19",
      countryOfBirth: "Some Country",
      cityOfBirth: "Some City",
      gender: "m",
      address: "somewhere 123 something",
      zip: "52134",
      acedemicCareer:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      DegreeObtained:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      Cv: "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      IdentificationDocument:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      LinguisticCertification:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
    },
    {
      firstName: "Olivia",
      lastName: "Garcia",
      email: "olivia.garcia@example.com",
      telephone: "555-2345",
      dateOfBirth: "1994-12-01",
      countryOfBirth: "Some Country",
      cityOfBirth: "Some City",
      gender: "m",
      address: "somewhere 123 something",
      zip: "52134",
      acedemicCareer:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      DegreeObtained:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      Cv: "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      IdentificationDocument:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
      LinguisticCertification:
        "https://drive.google.com/file/d/1IInFTZ_la7_hNu4J_DRONgmW-DnSJcV_/view?usp=sharing",
    },
  ];

  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      {authState && (
        <main className="dash_container">
          <div className="_dash_nav">
            <div
              className="_brand"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={logo} alt="" />
            </div>
          </div>
          <p className="_dash_title">Applicants Details</p>
          <div className="_dash_table_box">
            <section className="_dash_table">
              <div className="_header">
                <div className="_fname">First name</div>
                <div className="_lname">Last name</div>
                <div className="_email">Email</div>
                <div className="_tel">Telephone</div>
                <div className="_dob">Date of birth</div>
                <div className="_details">Details</div>
                {/* <div className="">
                  <div className="_open_applicant_modal_btn">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#fff"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <circle cx={12} cy={12} r={4} fill="#fff" />
                        <path
                          d="M21 12C21 12 20 4 12 4C4 4 3 12 3 12"
                          stroke="#fff"
                          strokeWidth={2}
                        />
                      </g>
                    </svg>
                  </div>
                </div> */}
              </div>
              <div className="_body">
                {data.map((dt, i) => (
                  <AppicantRow data={dt} key={i} />
                ))}
              </div>
            </section>
          </div>
        </main>
      )}
      <LoginModal
        handleClose={() => {
          setShowModal(false);
        }}
        show={showModal}
        setCorrect={setAuthState}
      />
    </>
  );
};

export default Dashboard;
