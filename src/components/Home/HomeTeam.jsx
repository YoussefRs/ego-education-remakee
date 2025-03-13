import React, { useEffect } from "react";
import director from "../../assets/Team/fullwhitedaniele.webp";
import cordinator from "../../assets/Team/CV.webp";
import rector from "../../assets/Team/ERNESTOFULL.webp";
import marketing from "../../assets/Team/fullwhitemario.webp";
import info from "../../assets/Team/ysf.webp";
import enrol from "../../assets/Team/MA.webp";
import mattia from "../../assets/Team/Mattia-di-Tommaso.webp";
import logo from "../../assets/Logos/logo-ego-black.png";
import ceo from "../../assets/Team/GIANPIERO-REBELLATO.webp";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function HomeTeam() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);

  const { t } = useTranslation();
  const { title, subtitle, specialWord, lecturers } = t("home.homeTeam");

  const headMembers = [
    {
      id: "156gy44kg4zfzf",
      name: "Ernesto Pallotta",
      role: "Rector",
      imgSrc: rector,
      description: "Some text goes here that describes about team member",
      socialLinks: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        youtube: "#",
      },
    },
    {
      id: "4z4gh44j6d4j8",
      name: "A.Daniele Pallotta",
      role: "General Director",
      imgSrc: director,
      description: "Some text goes here that describes about team member",
      socialLinks: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        youtube: "#",
      },
    },
    {
      id: "t4jfkf8yt4lu8",
      name: "Gianpiero Rebellato",
      role: "CEO",
      imgSrc: ceo,
      description: "Some text goes here that describes about team member",
      socialLinks: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        youtube: "#",
      },
    },
  ];

  const subHeadMembers = [
    {
      id: "trdj7f8drh44ff",
      name: "Youssef Rouissi",
      role: "IT Director",
      imgSrc: info,
      description: "Some text goes here that describes about team member",
      socialLinks: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        youtube: "#",
      },
    },
    {
      id: "h4dtrwr4d3j1t",
      name: "Mario Ingrassia",
      role: "Marketing Office",
      imgSrc: marketing,
      description: "Some text goes here that describes about team member",
      socialLinks: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        youtube: "#",
      },
    },
    {
      id: "4az4f4j4glyu4",
      name: "Mounira Adel",
      role: "Enrolment Office",
      imgSrc: enrol,
      description: "Some text goes here that describes about team member",
      socialLinks: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        youtube: "#",
      },
    },

    {
      id: "85re1h22jf22t",
      name: "Claudio Vullo",
      role: "Country Manager ",
      sub: "Brazil",
      imgSrc: cordinator,
      description: "Some text goes here that describes about team member",
      socialLinks: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        youtube: "#",
      },
    },

    {
      id: "12tyj1f1j11j",
      name: "Mattia Di Tommaso",
      role: "Head of Department",
      sub: "Political Sciences, International Relations and Development Cooperation",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam autem sapiente eaque porro repellat amet possimus impedit, nam repudiandae error aliquid saepe, recusandae voluptatum mollitia asperiores nihil vitae aliquam! ",
      imgSrc: mattia,
      socialLinks: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        youtube: "#",
      },
    },
    {
      id: "4g4rs66699see",
      name: "Francesco Basso",
      role: "Head of Department",
      sub: "Informatics",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam autem sapiente eaque porro repellat amet possimus impedit, nam repudiandae error aliquid saepe, recusandae voluptatum mollitia asperiores nihil vitae aliquam! ",
      imgSrc: logo,
      socialLinks: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "#",
        youtube: "#",
      },
    },
  ];

  return (
    <>
      <div className="team-container">
        <h1
          className="container-title-extra text-center fw-bold"
          data-aos={"zoom-in"}
          data-aos-delay={"600"}
          style={{ fontFamily: "Gotham Light", marginBottom: "3rem" }}
        >
          {subtitle} <span style={{ color: "#046635" }}>{specialWord}</span>
          {/* test */}
        </h1>

        <div className="row justify-content-center mb-3">
          {headMembers.map((member, index) => (
            <div className="column" key={index} data-aos={"flip-up"}>
              <div
                className="col-lg-4 col-md-6 col-sm-12 w-100"
                data-aos={"flip-up"}
              >
                <div className="card mb-3">
                  <img
                    className="card-img-top"
                    src={member.imgSrc}
                    height="380"
                    alt="Card image cap"
                  />
                  <div className="lecturer-detail">
                    <h5 className="card-title heading text-center">
                      {member.name}{" "}
                    </h5>
                    <span className="subheading">{member.role}</span>
                 
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          {subHeadMembers.map((member, index) => (
            <div className="column" key={index} data-aos={"flip-up"}>
              <div
                className="col-lg-4 col-md-6 col-sm-12 w-100"
                data-aos={"flip-up"}
              >
                <div className="card mb-3">
                  <img
                    className="card-img-top"
                    src={member.imgSrc}
                    height="380"
                    alt="Card image cap"
                  />
                  <div
                    className={
                      member.sub ===
                      "Political Sciences, International Relations and Development Cooperation"
                        ? "lecturer-detail_spec"
                        : "lecturer-detail"
                    }
                  >
                    <h5 className="card-title heading text-center">
                      {member.name}{" "}
                    </h5>
                    <span className="subheading">{member.role}</span>
                    <span
                      className="subheading"
                      style={{ fontStyle: "italic" }}
                    >
                      {member.sub}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeTeam;
