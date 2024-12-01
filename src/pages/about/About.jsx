import React, { useEffect } from "react";
import "./About.css";
import SubHeader from "../../globals/SubHeader/SubHeader";
import PartnersSlider from "../../globals/Sliders/PartnersSlider";
import CourseSlider from "../../globals/Sliders/CourseSlider";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  const { t } = useTranslation();
  const { lecturers } = t("home.homeLecturers");
  const { title, subtitle, specialWord, s1, s2, s3, s4, highlight, egoWord } =
    t("about");
  return (
    <>
      <SubHeader
        title={"About"}
        path={[{ url: "/about", label: "Home" }]}
        current={"About"}
      />
      <div className="about-us-container">
      <div className="it-about-area p-relative mt-5 margin-auto">
        <div className="container it-about-ctr" data-aos={"zoom-in"}>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              {/* <div className="it-about-thumb-box p-relative">
                <div className="it-about-thumb-1 d-none d-xl-block">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                    alt=""
                  />
                </div>
                <div className="it-about-thumb-2 d-none d-xl-block">
                  <img
                    src={rector}
                    alt=""
                  />
                </div>
                <div className="it-about-main-thumb text-xl-end text-center">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                    alt=""
                  />
                </div>
              </div> */}

              <ul className="featured">
                <li className="left_">
                  <div className="text">
                    {/* <h2>The amazing title</h2>
      <p>Lorem ipsum dolor</p> */}
                  </div>
                </li>
                <li className="right">
                  <div className="right-top">
                    <div className="text">
                      {/* <h2>Another title</h2>
        <p>Lorem ipsum</p> */}
                    </div>
                  </div>
                  <div className="right-bottom">
                    <div className="text">
                      {/* <h2>A third Title</h2>
                      <p>
                        Lorem Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Nostrum debitis dignissimos eaque
                        autem adipisci quis laudantium eum fuga laborum voluptas
                        ducimus illum sequi numquam quaerat tenetur velit, dicta
                        ullam pariatur?
                      </p> */}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-about-right-box">
                <div className="it-about-title-box mb-4">
                  <span className="it-section-subtitle wdt-heading-subtitle ">
                    {title}{" "}
                  </span>
                  <h4 className="it-section-title mt-2">
                    {subtitle}{" "}
                    <strong style={{ color: "#046635" }}>{specialWord}</strong>
                  </h4>
                </div>
                <div className="it-about-text pb-10">
                  <p>
                    <span style={{ color: "#046635" }}>{egoWord}</span> {s1}
                  </p>
                  <p>
                    <span style={{ color: "#046635" }}>{egoWord}</span> {s2}
                  </p>
                  <p>{s3}</p>
                  <p>
                    <span style={{ color: "#046635" }}>{egoWord}</span> {s4}{" "}
                    <span style={{ color: "#046635" }}>{highlight}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PartnersSlider />
      <div className="it-about-area p-relative our-mission py-5">
        <div className="container it-about-ctr">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6" data-aos={"slide-right"}>
              <div className="it-about-right-box">
                <span className="wdt-heading-subtitle mb-4">OUR MISSION</span>
                <p>
                  Our mission is to train the world to come: several
                  institutions have underlined the necessity of continuous
                  learning in order to reduce the skills shortage we are
                  starting to face. The staffing firm Manpower reported that{" "}
                  <strong style={{ color: "#046635" }}>
                    54% of companies have troubles finding the right employees
                    with the right skills
                  </strong>
                  , the advisory firm Gartner shows that global talent shortage
                  is now the top emerging risk facing organizations, with 63% of
                  respondents indicating that a talent shortage was a key
                  concern for their organization. Furthermore, the firm HDI
                  values the effects of the issue in $8 trillion in unrealised
                  revenue by 2030.
                  <br />
                  <br />
                  <strong style={{ color: "#046635" }}>eGO Education</strong>’s
                  goal is to become an{" "}
                  <strong style={{ color: "#046635" }}>
                    international Higher Education Institute
                  </strong>{" "}
                  that delivers highly specialised courses using the most
                  important and innovative existing technological tools. This
                  training offer, rarely present in current online universities,
                  will be implemented through knowledge of local work dynamics,
                  the needs of competitiveness and internationalisation of the
                  global market and through partnerships with the structures
                  present therein.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6" data-aos={"slide-left"}>
              <div className="it-about-thumb-box  p-relative">
                <div className="it-about-main-thumb text-xl-end text-center">
                  <img
                    src="https://images.pexels.com/photos/3747519/pexels-photo-3747519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    id="mission-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-container" data-aos={"zoom-in"}>
        <div className="container mt-5" data-aos={"zoom-in"}>
          <div className="row">
            <div className="col-md-12 col-lg-4 col-sm-12 d-flex align-items-center">
              <h1 className="container-title text-black fw-bold ">
                Explore Our Innovative{" "}
                <span style={{ color: "#046635" }}>Courses</span>
              </h1>
            </div>

            <div className="col-md-12 col-lg-8 col-sm-12 d-flex align-items-center">
              <CourseSlider />
            </div>
          </div>
        </div>
      </div>

      <div className="lecturers-section-about d-flex flex-column py-5">
        <h2
          className="container-heading-green"
          style={{ color: "#046635" }}
          data-aos={"zoom-in"}
        >
          Our Lecturers
        </h2>
        <h1
          className="container-title-extra text-black fw-bold text-center mb-5"
          data-aos={"zoom-in"}
        >
          Our Experienced
          <span style={{ color: "#046635" }}> Lecturers</span>
        </h1>
        <div className="container d-flex align-items-center justify-content-center">
          <div className="row">
            {lecturers?.map((lecturer, i) => (
              <div className="col-lg-4 col-md-6 col-sm-12 " data-aos={"flip-up"}>
                <div className="card mb-3" style={{ width: "20rem" }}>
                  <img
                    className="card-img-top"
                    src={lecturer.img}
                    height="380"
                    alt="Card image cap"
                  />
                  <div className="lecturer-detail">
                    <h5 className="card-title heading text-center">
                      {lecturer.name}{" "}
                    </h5>
                    <span className="subheading">{lecturer.title}</span>
                    <blockquote>
                      <p>{lecturer.description} </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contact-section-about py-5">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="form w-100">
            <div
              data-aos={"flip-left"}
              className="it-about-title-box  p-5 d-flex justify-content-center align-items-center flex-column"
            >
              <span
                className="it-section-subtitle wdt-heading-subtitle"
                style={{ placeSelf: "flex-start" }}
              >
                CONTACT US FOR
              </span>
              <h4 className="it-section-title mt-2 mb-5">
                Seamless Collaboration & Personilized Learning.
              </h4>
              <img
                src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/02/newsletter-img-1536x1303.webp"
                alt="contact"
              />
            </div>

            <div className="contact-form" data-aos={"flip-right"}>
              <form action="index.html" autocomplete="off">
                <h3 className="title">Contact us</h3>
                <div className="input-container">
                  <input type="text" name="name" className="input" />
                  <label for="">Full Name</label>
                  <span>Full Name</span>
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="input" />
                  <label for="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input type="tel" name="phone" className="input" />
                  <label for="">Phone</label>
                  <span>Phone</span>
                </div>
                <div className="input-container textarea">
                  <textarea name="message" className="input"></textarea>
                  <label for="">Message</label>
                  <span>Message</span>
                </div>
                <input type="submit" value="Send" className="btnn" />
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default About;
