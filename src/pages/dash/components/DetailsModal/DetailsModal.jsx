import React from "react";
import "./styles.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DetailsModal = ({ data, show, handleClose }) => {
  const handleDownload = (filePath) => {
    const url = `http://localhost:8080/${filePath}`;
    window.open(url, "_blank");
  };

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const renderFileDownloadButton = (label, fileKey) => (
    <div className="_pdf_boxe">
      <div className="_label">
        <p>{label}</p>
      </div>
      <div className="_buttons">
        <div className="_btn" onClick={() => handleDownload(data[fileKey])}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-download"
            viewBox="0 0 16 16"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
          </svg>
          Download
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="details_modal"
      dialogClassName="details_modal_dialog"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {data.firstName} {data.lastName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="_detail_row">
          <p className="_detail_label">Email:</p>
          <p className="_detail_value">{data.email}</p>
        </div>
        <div className="_detail_row">
          <p className="_detail_label">Telephone:</p>
          <p className="_detail_value">{data.phone}</p>
        </div>
        <div className="_detail_row">
          <p className="_detail_label">Date of birth:</p>
          <p className="_detail_value">{data.date_of_birth}</p>
        </div>
        {data.gender && (
          <div className="_detail_row">
            <p className="_detail_label">Gender:</p>
            <p className="_detail_value">{data.gender}</p>
          </div>
        )}
        {data.country_of_birth && (
          <div className="_detail_row">
            <p className="_detail_label">Country of birth:</p>
            <p className="_detail_value">{data.country_of_birth}</p>
          </div>
        )}
        {data.city_of_birth && (
          <div className="_detail_row">
            <p className="_detail_label">City of birth:</p>
            <p className="_detail_value">{data.city_of_birth}</p>
          </div>
        )}

        {data.address && (
          <div className="_detail_row">
            <p className="_detail_label">Address:</p>
            <p className="_detail_value">{data.address}</p>
          </div>
        )}
        {data.zip_code && (
          <div className="_detail_row">
            <p className="_detail_label">Zip code:</p>
            <p className="_detail_value">{data.zip_code}</p>
          </div>
        )}
        <div className="_pdf_boxes">
          {renderFileDownloadButton("Academic Career", "file1")}
          {renderFileDownloadButton("Degree Obtained", "file2")}
          {renderFileDownloadButton("CV", "file3")}
          {renderFileDownloadButton("Additional Document 1", "file4")}
          {renderFileDownloadButton("Additional Document 2", "file5")}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DetailsModal;
