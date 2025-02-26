import React, { useState } from "react";
import "./styles.css";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const DetailsModal = ({ data, show, handleClose, setShowModalCandidate }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [rejectModal, setRejectModal] = useState(false);

  const handleDownload = (filePath) => {
    const url = `${apiUrl}/${filePath}`;
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
            className="bi bi-download"
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

  const handleAccept = async (
    candidateId,
    email,
    firstName,
    lastName,
    course
  ) => {
    try {
      const response = await axios.post(`${apiUrl}/accept/${candidateId}`, {
        email,
        firstName,
        lastName,
        course,
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      handleClose();
    }
  };

  const [reasons, setReasons] = useState([""]);

  const handleAddReason = () => {
    setReasons([...reasons, ""]);
  };

  const handleRemoveReason = (index) => {
    setReasons(reasons.filter((_, i) => i !== index));
  };

  const handleReasonChange = (index, value) => {
    const updatedReasons = [...reasons];
    updatedReasons[index] = value;
    setReasons(updatedReasons);
  };
  const closeRejectModal = () => {
    setRejectModal(false);
    setReasons([""]);
  };

  const handleReject = async (
    candidateId,
    email,
    firstName,
    lastName,
    course,
    reasons
  ) => {
    try {
      const response = await axios.post(`${apiUrl}/reject/${candidateId}`, {
        email,
        firstName,
        lastName,
        course,
        reasons,
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setReasons([""]);
      closeRejectModal();
      setShowModalCandidate(false);
    }
  };

  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        className="details_modal"
        dialogClassName="details_modal_dialog"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {data?.firstName} {data?.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="_detail_row">
            <p className="_detail_label">Email:</p>
            <p className="_detail_value">{data?.email}</p>
          </div>
          <div className="_detail_row">
            <p className="_detail_label">Telephone:</p>
            <p className="_detail_value">{data?.phone}</p>
          </div>
          <div className="_detail_row">
            <p className="_detail_label">Date of birth:</p>
            <p className="_detail_value">{data?.date_of_birth}</p>
          </div>
          {data?.gender && (
            <div className="_detail_row">
              <p className="_detail_label">Gender:</p>
              <p className="_detail_value">{data?.gender}</p>
            </div>
          )}
          {data?.country_of_birth && (
            <div className="_detail_row">
              <p className="_detail_label">Country of birth:</p>
              <p className="_detail_value">{data?.country_of_birth}</p>
            </div>
          )}
          {data?.city_of_birth && (
            <div className="_detail_row">
              <p className="_detail_label">City of birth:</p>
              <p className="_detail_value">{data?.city_of_birth}</p>
            </div>
          )}

          {data?.address && (
            <div className="_detail_row">
              <p className="_detail_label">Address:</p>
              <p className="_detail_value">{data?.address}</p>
            </div>
          )}
          {data?.zip_code && (
            <div className="_detail_row">
              <p className="_detail_label">Zip code:</p>
              <p className="_detail_value">{data?.zip_code}</p>
            </div>
          )}
          <div className="_pdf_boxes">
            {renderFileDownloadButton("Academic Career", "file1")}
            {renderFileDownloadButton("Degree Obtained", "file2")}
            {renderFileDownloadButton("CV", "file3")}
            {renderFileDownloadButton(
              "Copy of a valid identification document",
              "file4"
            )}
            {renderFileDownloadButton("Linguistic certification", "file5")}
          </div>
        </Modal.Body>
        {data?.status == "Pending" && (
          <Modal.Footer className="d-flex justify-content-center align-items-center">
            <div className="d-flex gap-4">
              <button
                className="date-selector"
                onClick={() =>
                  handleAccept(
                    data?.id,
                    data?.email, // Correct position for email
                    data?.firstName, // Correct position for firstName
                    data?.lastName, // Correct position for lastName
                    data?.course // Correct position for course
                  )
                }
                disabled={data?.status !== "Pending"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#046635"
                  className="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                </svg>
                <span>Accept</span>
              </button>
              <button
                className="date-selector"
                /* onClick={() =>
                handleReject(
                  data.id,
                  data.email,
                  data.firstName,
                  data.lastName,
                  data.course
                )
              } */
                onClick={() => setRejectModal(true)}
                disabled={data?.status != "Pending"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="red"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
                <span>Reject</span>
              </button>
            </div>
          </Modal.Footer>
        )}
      </Modal>

      <Modal
        size="md"
        show={rejectModal}
        onHide={closeRejectModal}
        className="details_modal"
        centered
      >
        <Modal.Body>
          <h5>Rejection Reasons</h5>
          {reasons.map((reason, index) => (
            <div key={index} className="mb-2 d-flex align-items-center">
              <input
                type="text"
                className="form-control"
                placeholder="Enter reason"
                value={reason}
                onChange={(e) => handleReasonChange(index, e.target.value)}
              />
              {reasons.length > 1 && (
                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={() => handleRemoveReason(index)}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Button variant="primary" onClick={handleAddReason}>
            Add Reason
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeRejectModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              handleReject(
                data?.id,
                data?.email,
                data?.firstName,
                data?.lastName,
                data?.course,
                reasons
              )
            }
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DetailsModal;
