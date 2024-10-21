import React, { useState } from "react";
import "./styles.css";
import DetailsModal from "../DetailsModal/DetailsModal";

const AppicantRow = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="_applicant_row">
        <div className="_fname">{data.firstName}</div>
        <div className="_lname">{data.lastName}</div>
        <div className="_email">{data.email}</div>
        <div className="_tel">{data.telephone}</div>
        <div className="_dob">{data.dateOfBirth}</div>
        <div
          className="_details"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <div className="_open_applicant_modal_btn">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <circle cx={12} cy={12} r={4} fill="#fff" />
                <path
                  d="M21 12C21 12 20 4 12 4C4 4 3 12 3 12"
                  stroke="#fff"
                  strokeWidth={2}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <DetailsModal
        data={data}
        show={showModal}
        handleClose={() => {
          setShowModal(false);
        }}
      />
    </>
  );
};

export default AppicantRow;
