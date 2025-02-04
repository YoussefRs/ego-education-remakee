import React from "react";
import "./Elearning.css";
import SubHeader from "../../globals/SubHeader/SubHeader";

import {
  faFlask,
  faUsers,
  faComments,
  faPersonChalkboard,
  faBookOpenReader,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function Elearning() {
  const { t } = useTranslation();
  return (
    <>
      <div className="elearn_">
        <section class="about-section_">
          <div class="container-fluid">
            <div class="row no-gutters position-relative">
              <div class="left-header  col-lg-3 col-xl-4"></div>
              <div class="col-lg-9 col-xl-8 main-ctr">
                <div class="main-content">
                  <div class="main-header mb-4">
                    <h1
                      class="main-heading d-inline-block text-uppercase pb-3 border-bottom"
                      style={{ color: "#046635" }}
                    >
                      &lt; Elearn &gt;
                    </h1>
                  </div>

                  <div class="row mb-5">
                    <div class="mb-5 mb-sm-4 col-md-4 img_el">
                      <img
                        src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/02/1.webp"
                        alt="Colorful Wall"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="about__text mb-5 mb-sm-4 mb-md-4">
                        <h3 className="fw-bold">
                          Make every lecture
                          <span>
                            {" "}
                            <u style={{ color: "#046635" }}>Count</u>
                          </span>
                        </h3>
                        <p class="m-0">
                          Watch video lectures come to life with interactive
                          elements like quiz questions, polls, and discussion
                          forums, designed to keep you engaged and actively
                          participating. Test your knowledge as you progress,
                          share insights with peers, and get real-time feedback
                          to reinforce learning. Transform passive watching into
                          an active, immersive experience that helps you retain
                          information and stay motivated every step of the way.
                        </p>
                      </div>
                      <div class="about__text mb-5 mb-sm-4 mb-md-4">
                        <h3 className="fw-bold">
                          Collaborate and Grow
                          <span>
                            {" "}
                            <u style={{ color: "#046635" }}>Together</u>
                          </span>
                        </h3>
                        <p class="m-0">
                          Study in groups and teams with our in-built social
                          learning tools that foster collaboration and
                          connection. Engage in friendly competition on
                          leaderboards, earn badges for your achievements, and
                          celebrate milestones with your peers. Transform the
                          process of acquiring knowledge into a fun and
                          interactive journey, where teamwork and competition
                          drive your motivation and help you reach new heights.
                        </p>
                      </div>
                      <div class="about__text mb-5 mb-sm-4 mb-md-4">
                        <h3 className="fw-bold">
                          Join a global community of
                          <span>
                            {" "}
                            <u style={{ color: "#046635" }}>learners</u>
                          </span>
                        </h3>
                        <p class="m-0">
                          Students can connect with peers from around the globe
                          in discussion forums, creating a vibrant community to
                          share insights, seek guidance, and exchange ideas.
                          Collaborate on challenges, celebrate successes, and
                          build lifelong learning relationships that extend far
                          beyond the classroom. Because the journey of learning
                          is richer and more meaningful when shared with others.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="about-data">
                    <div class="row no-gutters pt-5 border-top">
                      <div class="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-4">
                        <div class="media">
                          <i class="fas fa-mug-hot icon-18 mr-2">
                            <FontAwesomeIcon
                              icon={faFlask}
                              className="feature-icon"
                            />
                          </i>
                          <div class="media-body">
                            <p class="data-number m-0 font-weight-bold">
                              {t("home.homeFeatures.features.0.title")}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-4">
                        <div class="media">
                          <i class="fas fa-code icon-18 mr-2">
                            {" "}
                            <FontAwesomeIcon
                              icon={faUsers}
                              className="feature-icon"
                            />
                          </i>
                          <div class="media-body">
                            <p class="data-number m-0 font-weight-bold">
                              {t("home.homeFeatures.features.1.title")}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-4">
                        <div class="media">
                          <i class="fas fa-bus icon-18 mr-2">
                            <FontAwesomeIcon
                              icon={faComments}
                              className="feature-icon"
                            />
                          </i>
                          <div class="media-body">
                            <p class="data-number m-0 font-weight-bold">
                              {t("home.homeFeatures.features.2.title")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Elearning;
