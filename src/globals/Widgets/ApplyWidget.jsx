// import React from "react";
// import "./Widgets.css";
// import { useTranslation } from "react-i18next";
// import Modal from "../../globals/Modal/Modal";
// import { useModal } from "../Modal/useModal";

// const ApplyWidget = () => {
//   const { t } = useTranslation();
//   const { line1, line2, button } = t("widget.apply");
//   const { showModal, openModal, closeModal } = useModal();

//   return (
//     <section className="widget has-divider mb-3" id="request-widget">
//       <h3 className="text-bkack fw-bold">{line1}</h3>
//       <p>{line2}</p>
//       <div className="d-flex align-items-center justify-content-start">
//         <button className="text-white button-green" onClick={openModal}>
//           {button}
//         </button>
//       </div>
//       <Modal
//         title="My Modal"
//         show={showModal}
//         onHide={closeModal}
//         size="lg"
//       ></Modal>
//     </section>
//   );
// };

// export default ApplyWidget;

import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "../../globals/Modal/Modal";
import { useModal } from "../Modal/useModal";

function ApplyWidget() {
  const { t } = useTranslation();
  const { line1, line2 } = t("widget.apply");
  const { button } = t("widget.apply");
  const { showModal, openModal, closeModal } = useModal();
  return (
    <div className="contact-widget">
      <h2 className="fw-bold">{line1} </h2>
      <p>{line2}</p>
      <div className="contact-img">
        <img
          src="https://www.elearninglearning.com/thumbs/large/7/9/c/79c711e6d2d1fc2f81e4a0c51871c054a704c00e.jpg"
          alt="evaluation"
        />
      </div>
      <div className="contact-details">
        <div className="icon-wrapper m-0">
          <div className="icon-content">
            <span>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-bar-graph" viewBox="0 0 16 20">
  <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
              </i>
            </span>
          </div>
        </div>
        <div className="details-wrapper">
          <div className="details-subtitle">{button} </div>
          <div className="details-title">
            <h5>
              <a
                href="mailto:evaluation@ego-education.com"
                target="_blank"
                rel="nofollow"
              >
                evaluation@ego-education.com
              </a>
            </h5>
          </div>
        </div>
      </div>
      <Modal
        title="My Modal"
        show={showModal}
        onHide={closeModal}
        size="lg"
      ></Modal>
    </div>
  );
}

export default ApplyWidget;
