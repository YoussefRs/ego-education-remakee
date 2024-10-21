import React, { useState } from "react";
import "./styles.css";
import { Button, Form, Modal } from "react-bootstrap";

const LoginModal = ({ show, handleClose, setCorrect }) => {
  const correctPassword = "aJ#49f@c9K!3pL";
  const [password, setPassword] = useState(""); // To track the entered password
  const [triesCount, setTriesCount] = useState(3); // To track the remaining tries
  const [errorMessage, setErrorMessage] = useState(""); // For showing error messages

  // Handle password submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered password matches the correct password
    if (password === correctPassword) {
      setCorrect(true); // Set correct state to true
      handleClose(); // Close the modal
    } else {
      setTriesCount((prev) => prev - 1); // Decrease tries count
      setErrorMessage(
        `Incorrect password. You have ${triesCount - 1} tries left.`
      );

      // Close the tab if no tries left
      if (triesCount - 1 <= 0) {
        setErrorMessage(
          "You have reached the maximum number of attempts. Please refresh the page and try again later."
        );
        return;
      }
    }
  };

  return (
    <Modal
      show={show}
    //   onHide={handleClose}
      className="details_modal"
      dialogClassName="details_modal_dialog"
      centered
    >
      <Modal.Header>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="passwordInput">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password" // Use password type for security
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on input change
              placeholder="Enter your password"
              disabled={triesCount <= 0}
            />
          </Form.Group>

          {errorMessage && ( // Conditionally show error message if it exists
            <div
              className="error-message"
              style={{ color: "red", marginBottom: "1rem" }}
            >
              {errorMessage}
            </div>
          )}

          <Button
            type="submit"
            style={{ backgroundColor: "#046635", padding: "0.5rem 1.5rem" }}
            disabled={triesCount <= 0}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
