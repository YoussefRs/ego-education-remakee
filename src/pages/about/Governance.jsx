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
import marketing from "../../assets/Team/fullwhitemario.webp";
import enrol from "../../assets/Team/MA.webp";
import cordinator from "../../assets/Team/CV.webp";

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
  const { lecturers } = t("home.homeLecturers");
  const {
    title,
    subtitle,
    specialWord,
    s1,
    s2,
    s3,
    s4,
    highlight,
    egoWord,
    ouur,
    lecc,
  } = t("about");

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
      sub: "Brasil",
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
    <div className="gov-section-about d-flex flex-column py-5">
      <h1
        className="container-title-extra text-black fw-bold text-center mb-5"
        data-aos={"zoom-in"}
      >
        The
        <span style={{ color: "#046635" }}> Governance </span>
      </h1>

      <section class="container">
        <div className="row active-with-click">
          <Slider {...settings}>
            {cardsData?.map((member, i) => (
              <div
                className="col-lg-3 col-md-3 col-sm-12 "
                data-aos={"flip-up"}
              >
                <div
                  className="card"
                  style={{
                    margin: "0.7rem",
                  }}
                >
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
                    <div>
                      <span className="subheading" style={{fontStyle: "italic"}}>{member.role}</span>
                      <br />
                      <span className="subheading" style={{fontStyle: "italic"}}>{member.sub}</span>
                    </div>
                    <blockquote>
                      <p>{member.description} </p>
                    </blockquote>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="social d-flex align-items-center gap-4">
                        <a className="fa fa-fw fa-facebook" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="#fff"
                            class="bi bi-envelope-at-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                          </svg>
                        </a>
                        <a className="fa fa-fw fa-twitter" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="#fff"
                            class="bi bi-linkedin"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                          </svg>
                        </a>
                        {/* <a className="fa fa-fw fa-linkedin" href="#"></a>
                  <a className="fa fa-fw fa-google-plus" href="#"></a> */}
                      </div>

                      <Link to={`/detail/${member.id}`} state={member}>
                        <button
                          style={{
                            background: "transparent",
                            padding: 0,
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            class="bi bi-arrow-up-right-square"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Governance;
