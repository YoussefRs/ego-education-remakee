import React from "react";
import "./Elearning.css";
import SubHeader from "../../globals/SubHeader/SubHeader";

function Elearning() {
  return (
    <>
      <SubHeader
        title={"eLearn"}
        path={[{ url: "/elearn", label: "Home" }]}
        current={"eLearn"}
      />
      <div className="container-fluid p-0">
        <div id="why-us" className="section">
          <div className="container-fluid p-0">
            <hr className="section-hr mt-5 mb-5" />
            <div className="envelop px-5 pt-2">
              <div className="row justify-content-between mt-5 maxed-width ">
                <div className="col-md-6" id="content_">
                  <div id="content-text_">
                    <h1>
                      Make every lecture
                      <span><u>count</u> </span>
                    </h1>
                    <h2>
                      Watch videolectures come to life with interactive elements
                      like quiz questions, polls and discussion forums to keep
                      you engaged and testing your knowledge as you go. Turning
                      passive into active learning.
                    </h2>
                  </div>
                </div>

                <div className="col-md-5 col-md-offset-1">
                  <a className="about-video" href="#">
                    <img
                      className="header-image"
                      src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/02/1.webp"
                      alt="a business man standing and smiling"
                    />
                    <i className="play-icon fa fa-play"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="px-5 py-2 ">
              <div className="pt-5 row justify-content-between maxed-width">
                <div className="col-md-5 col-md-offset-1">
                  <a className="about-video" href="#" id="content_">
                    <img
                      className="header-image"
                      src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/02/2-768x494.webp"
                      alt="a business man standing and smiling"
                    />
                    <i className="play-icon fa fa-play"></i>
                  </a>
                </div>

                <div className="col-md-6">
                  <div id="content-text_">
                    <h1>
                      Collaborate and Grow
                      <span> <u>Together</u></span>
                    </h1>
                    <h2>
                      Study in groups and teams with our in-built social
                      learning tools. Compete on leaderboards and earn badges to
                      stay motivated! Turn the process of acquiring knowledge
                      into an enjoyable competition that spurs you on.
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="envelop px-5 py-2">
              <div className="row pt-5 justify-content-between maxed-width">
                <div className="col-md-6" id="content_">
                  <div id="content-text_">
                    <h1>
                      Join a global community of
                      <span> <u>learners</u></span>
                    </h1>
                    <h2>
                      Students can connect with each other all over the world in
                      discussion forums to share insights, get help and form
                      lifelong learning relationships. The journey of learning
                      is better shared.
                    </h2>
                  </div>
                </div>

                <div className="col-md-5 col-md-offset-1">
                  <a className="about-video" href="#">
                    <img
                      className="header-image"
                      src="https://lizza.wpengine.com/lms/wp-content/uploads/sites/12/2024/02/3.webp"
                      alt="a business man standing and smiling"
                    />
                    <i className="play-icon fa fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Elearning;
