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
          src="https://media.istockphoto.com/id/1353308759/photo/businesswoman-hand-using-laptop-computer-with-document-management-icon.jpg?b=1&s=612x612&w=0&k=20&c=5YFpNOseQK2jcjmY733eGP0y830EK4tqhSx-W8JSb9o="
          alt="contact"
        />
      </div>
      <div className="contact-details mb-3">
        <div className="d-flex align-items-center justify-content-start">
          <button className="button-white" onClick={openModal}>
            {button}
          </button>
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
