import React from "react";
import "./Widgets.css";
import { useTranslation } from "react-i18next";
import Modal from "../../globals/Modal/Modal";
import { useModal } from "../Modal/useModal";

const ApplyWidget = () => {
  const { t } = useTranslation();
  const { line1, line2, button } = t("widget.apply");
  const { showModal, openModal, closeModal } = useModal();

  return (
    <section className="widget has-divider mb-3" id="request-widget">
      <h3 className="text-bkack fw-bold">{line1}</h3>
      <p>{line2}</p>
      <div className="d-flex align-items-center justify-content-start">
        <button className="text-white button-green" onClick={openModal}>
          {button}
        </button>
      </div>
      <Modal
        title="My Modal"
        show={showModal}
        onHide={closeModal}
        size="lg"
      ></Modal>
    </section>
  );
};

export default ApplyWidget;
