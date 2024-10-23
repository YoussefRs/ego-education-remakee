import React, { useEffect } from "react";
import girl from "../../assets/Home/ego-girl.jpg";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useModal } from "../../globals/Modal/useModal";
import Modal from "../../globals/Modal/Modal";

function HomeAbout() {
  const { showModal, openModal, closeModal } = useModal();

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  const { t } = useTranslation();
  const { line1, line2, line3, line4, button } = t("home.banner");
  return (
    <div className="container">
      <section
        className="special_section content container px-0"
        data-aos={"slide-up"}
      >
        <div className="about-us" id="#about">
          <h2>{line1}</h2>
          <p>
            {line2}
            <br /> <br /> {line3}
            <br /> <br />
            <span className="fw-bold">

            {line4}
            </span>
          </p>
          <a onClick={openModal}>{button} </a>
          {/* <CustomBtn content={"Apply Now"} /> */}
        </div>
        <div className="image-wrapper">
          <img src={girl} />
        </div>
      </section>
      <Modal
        title="My Modal"
        show={showModal}
        onHide={closeModal}
        size="lg"
      ></Modal>
    </div>
  );
}

export default HomeAbout;
