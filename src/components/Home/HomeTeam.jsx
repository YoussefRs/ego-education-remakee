import React, { useEffect } from "react";
import director from "../../assets/Team/fullwhitedaniele.webp";
import cordinator from "../../assets/Team/CV.webp";
import rector from "../../assets/Team/ERNESTOFULL.webp";
import marketing from "../../assets/Team/fullwhitemario.webp";
import info from "../../assets/Team/ysf.webp";
import enrol from "../../assets/Team/MA.webp";
import logo from "../../assets/Logos/logo-ego-black.png";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeTeam() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);

  const { t } = useTranslation();
  const { title, subtitle, specialWord, lecturers } = t("home.homeTeam");

  const teamMembers = [
    {
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
      name: "Gianpiero Rebellato",
      role: "CEO",
      imgSrc: logo,
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
      name: "Claudio Vullo",
      role: "Country Manager - Brasil",
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
      name: "Mattia Di Tommaso",
      role: "Head of Department",
      sub: "Political Sciences, International Relations and Development Cooperation",
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
    {
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

        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="column" key={index} data-aos={"flip-up"}>
              <div className="team-9">
                <div
                  className="team-img"
                  style={{
                    height:
                      member.sub ==
                      "Political Sciences, International Relations and Development Cooperation"
                        ? 143
                        : 200,
                  }}
                >
                  <img src={member.imgSrc} alt={`${member.name} Image`} />
                </div>

                {member.imgSrc != logo && (
                  <div className="logo-img">
                    <img src={logo} />
                  </div>
                )}
                <div className="team-content">
                  <h2>{member.name}</h2>
                  <h3>{member.role}</h3>
                  <h3>{member.sub}</h3>
                </div>
                <div className="team-overlay">
                  <p>{member.description}</p>
                  <div className="team-social">
                    <a className="social-tw" href={member.socialLinks.twitter}>
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="social-fb" href={member.socialLinks.facebook}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="social-li" href={member.socialLinks.linkedin}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      className="social-in"
                      href={member.socialLinks.instagram}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="social-yt" href={member.socialLinks.youtube}>
                      <i className="fab fa-youtube"></i>
                    </a>
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
