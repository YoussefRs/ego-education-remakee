import "./Modal.css";
import { Modal } from "react-bootstrap";

const ReusableModal = ({
  show,
  onHide,
  children,
  size,
  otherContent = false,
}) => {
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {otherContent ? (
          children
        ) : (
          <>
            <strong style={{ color: "#046635" }}>Thank you</strong> for your
            interest in our courses.
            <br /> We appreciate your enthusiasm for learning and are diligently
            preparing for upcoming sessions. <br /> Please note that course
            registration is not yet open, we're working hard to ensure that the
            registration process is smooth and accessible for all.
            <br /> Stay tuned for updates, and we look forward to welcoming you
            to our learning community{" "}
            <strong style={{ color: "#046635" }}>soon!</strong>{" "}
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ReusableModal;
