import React, { useEffect, useState } from "react";
import "./gov.css";
import logo from "../../assets/Logos/logo-ego-black.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import dani from "../../assets/Team/fullwhitedaniele.webp";
import rector from "../../assets/Team/ERNESTOFULL.webp";
import info from "../../assets/Team/ysf.webp";
import ceo from "../../assets/Team/GIANPIERO-REBELLATO.webp";
import marketing from "../../assets/Team/fullwhitemario.webp";
import enrol from "../../assets/Team/MA.webp";
import cordinator from "../../assets/Team/CV.webp";

import director from "../../assets/Team/fullwhitedaniele.webp";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Governance() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  const { t } = useTranslation();

  const { title, subtitle, specialWord, lecturers } = t("home.homeTeam");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    className: "sample",
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

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
        sub : "Brazil",
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

  const cardsData = [
    {
      id: "156gy44kg4zfzf",
      color: "Pink",
      name: "Ernesto Pallotta",
      role: "Rector",
      imgSrc: rector,
    },
    {
      id: "4z4gh44j6d4j8",
      color: "Pink",
      name: "A.Daniele Pallotta",
      role: "General Director",
      imgSrc: dani,
    },
    {
      id: "t4jfkf8yt4lu8",
      color: "Pink",
      name: "Gianpiero Rebellato",
      role: "CEO",
      imgSrc: logo,
    },
    {
      id: "trdj7f8drh44ff",
      color: "Pink",
      name: "Youssef Rouissi",
      role: "IT Director",
      imgSrc: info,
    },
    {
      id: "h4dtrwr4d3j1t",
      color: "Pink",
      name: "Mario Ingrassia",
      role: "Marketing Office",
      imgSrc: marketing,
    },
    {
      id: "4az4f4j4glyu4",
      color: "Pink",
      name: "Mounira Adel",
      role: "Enrolment Office",
      imgSrc: enrol,
    },
    {
      id: "85re1h22jf22t",
      color: "Pink",
      name: "Claudio Vullo",
      role: "Country Manager ",
      sub: "Brazil",
      imgSrc: cordinator,
    },
    {
      id: "12tyj1f1j11j",
      color: "Pink",
      name: "Mattia Di Tommaso",
      role: "Head of Department",
      sub: "Political Sciences, International Relations and Development Cooperation",
      imgSrc: logo,
    },
    {
      id: "4g4rs66699see",
      color: "Pink",
      name: "Francesco Basso",
      role: "Head of Department ",
      sub: "Informatics",
      imgSrc: logo,
    },
  ];

  return (
   /*  <div className="gov-section-about d-flex flex-column py-5">
      <h1
        className="container-title-extra text-black fw-bold text-center mb-5"
        data-aos={"zoom-in"}
      >
        The
        <span style={{ color: "#046635" }}> Governance </span>
      </h1>

    
    </div> */


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
                      <div className={member.sub === "Political Sciences, International Relations and Development Cooperation" ? "lecturer-detail_spec" : "lecturer-detail"} >
                        <h5 className="card-title heading text-center">
                          {member.name}{" "}
                        </h5>
                        <span className="subheading" >{member.role}</span>
                        <span className="subheading" style={{fontStyle: "italic"}}>{member.sub}</span>
                      
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

  );
}

export default Governance;
