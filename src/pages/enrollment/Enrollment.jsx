import React, { useState } from "react";
import SubHeader from "../../globals/SubHeader/SubHeader";
import CModal from "../../globals/Modal/Modal";
import { useModal } from "../../globals/Modal/useModal";
import axios from "axios";
import { Modal } from "react-bootstrap";
import "./enrolment.css";
import Loading from "../../globals/Loading/Loading";
import logo from "../../assets/Logos/logo-ego-black.png";

function Enrollment() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { showModal, openModal, closeModal } = useModal();
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const initialData = {
    course: "",
    lng: "",
    firstName: "",
    lastName: "",
    email: "",
    repeatEmail: "",
    phone: "",
    date: "",
    country: "",
    city: "",
    gender: "",
    address: "",
    zip: "",
    processingAuthorization: false,
    withdrawalAuthorization: false,
    advertisingAuthorization: false,
    file1: null,
    file2: null,
    file3: null,
    file4: null,
    file5: null,
  };
  const [formData, setFormData] = useState({
    course: "",
    lng: "",
    firstName: "",
    lastName: "",
    email: "",
    repeatEmail: "",
    phone: "",
    date: "",
    country: "",
    city: "",
    gender: "",
    address: "",
    zip: "",
    processingAuthorization: false,
    withdrawalAuthorization: false,
    advertisingAuthorization: false,
    file1: null,
    file2: null,
    file3: null,
    file4: null,
    file5: null,
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.course) newErrors.course = "Course is required.";
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (formData.email !== formData.repeatEmail)
      newErrors.repeatEmail = "Emails do not match.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.date) newErrors.date = "Date of birth is required.";
    if (!formData.file1) newErrors.file1 = "Academic career file is required.";
    if (!formData.file2) newErrors.file2 = "Degree obtained file is required.";
    if (!formData.file3) newErrors.file3 = "CV file is required.";
    if (!formData.file4)
      newErrors.file4 = "Valid identification document is required.";
    if (!formData.country) newErrors.country = "Country of birth is required.";
    if (!formData.city) newErrors.city = "City of birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.zip) newErrors.zip = "ZIP code is required.";
    if (!formData.processingAuthorization)
      newErrors.processingAuthorization = "Authorization is required.";

    setErrors(newErrors);

    // Return true if no errors, otherwise false
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;
      setLoading(true);
      setShowApplyModal(true); // Open modal immediately when submit is clicked

      const data = new FormData();
      for (const key in formData) {
        if (key.startsWith("file")) {
          if (formData[key]) {
            data.append(key, formData[key]);
          }
        } else {
          data.append(key, formData[key]);
        }
      }

      await axios.post(`${apiUrl}/create`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFormData(initialData);
    } catch (error) {
      console.log("Error submitting form:", error);
    } finally {
      setLoading(false); // Update the loading state when the request finishes
    }
  };

  const hideApplyModal = () => {
    setShowApplyModal(false);
  };

  return (
    <>
      <SubHeader
        title={"Apply"}
        path={[{ url: "/enrollment", label: "home" }]}
        current={"Apply"}
      />
      <CModal title="My Modal" show={showModal} onHide={closeModal}></CModal>
      <div className="container enrollment d-flex flex-column">
        <h1 className="mb-4">Enrollment Information</h1>
        <div className="row mb-5">
          <div className="col">
            <select
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose program</option>
              <option value="MSc in Information Security">
                MSc in Information Security
              </option>
            </select>
            {errors.course && <div className="error">{errors.course}</div>}
          </div>
          <div className="col">
            <select
              name="lng"
              value={formData.lng}
              onChange={handleInputChange}
            >
              <option value="">Choose language</option>
              <option value="English">English</option>
              <option value="Italian">Italian</option>
            </select>
          </div>
        </div>
        <div className="row"></div>
        <div className="row mb-5">
          <div className="col">
            <span className="wpcf7-form-control-wrap" data-name="first-name">
              <input
                size="40"
                placeholder="First Name*"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </span>
            {errors.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
          </div>
          <div className="col">
            <span className="wpcf7-form-control-wrap" data-name="lastname">
              <input
                size="40"
                placeholder="Last Name*"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </span>
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <span className="wpcf7-form-control-wrap" data-name="email">
              <input
                size="40"
                placeholder="Email*"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </span>
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="col">
            <span className="wpcf7-form-control-wrap" data-name="email-email">
              <input
                size="40"
                placeholder="Repeat Email*"
                type="email"
                name="repeatEmail"
                value={formData.repeatEmail}
                onChange={handleInputChange}
                required
              />
            </span>
            {errors.repeatEmail && (
              <div className="error">{errors.repeatEmail}</div>
            )}
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <span className="wpcf7-form-control-wrap" data-name="phone">
              <input
                size="40"
                placeholder="Telephone / Mobile*"
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </span>
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
          <div className="col">
            <span className="wpcf7-form-control-wrap" data-name="date">
              <input
                size="40"
                placeholder="Date of Birth*"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </span>
            {errors.date && <div className="error">{errors.date}</div>}
          </div>
        </div>
        <div className="row mb-5">
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>Academic career*</legend>

              <label className="__lk-fileInput">
                <span data-default="Choose file">
                  {formData.file1 ? formData.file1.name : "Choose file"}
                </span>
                <input
                  type="file"
                  name="file1"
                  onChange={handleInputChange}
                  required
                />
              </label>

              {errors.file1 && <div className="error">{errors.file1}</div>}
            </fieldset>
          </div>
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>Degree obtained*</legend>

              <label className="__lk-fileInput">
                <span data-default="Choose file">
                  {formData.file2 ? formData.file2.name : "Choose file"}
                </span>
                <input
                  type="file"
                  name="file2"
                  onChange={handleInputChange}
                  required
                />
              </label>
              {errors.file2 && <div className="error">{errors.file2}</div>}
            </fieldset>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>CV*</legend>

              <label className="__lk-fileInput">
                <span data-default="Choose file">
                  {formData.file3 ? formData.file3.name : "Choose file"}
                </span>
                <input
                  type="file"
                  name="file3"
                  onChange={handleInputChange}
                  required
                />
              </label>
              {errors.file3 && <div className="error">{errors.file3}</div>}
            </fieldset>
          </div>
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>Copy of a valid identification document*</legend>

              <label className="__lk-fileInput">
                <span data-default="Choose file">
                  {formData.file4 ? formData.file4.name : "Choose file"}
                </span>
                <input
                  type="file"
                  name="file4"
                  onChange={handleInputChange}
                  required
                />
              </label>
              {errors.file4 && <div className="error">{errors.file4}</div>}
            </fieldset>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-6 d-flex justify-content-center">
            <fieldset>
              <legend>Linguistic certification (if obtained)</legend>

              <label className="__lk-fileInput">
                <span data-default="Choose file">
                  {formData.file5 ? formData.file5.name : "Choose file"}
                </span>
                <input type="file" name="file5" onChange={handleInputChange} />
              </label>
            </fieldset>
          </div>
        </div>
        <h1 className="mt-5 mb-4">Additional Information</h1>
        <div className="row mb-5">
          <div className="col">
            <span className="wpcf7-form-control-wrap" data-name="country">
              <input
                size="40"
                placeholder="Country Of Birth*"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              />
            </span>
            {errors.country && <div className="error">{errors.country}</div>}
          </div>
          <div className="col">
            <span className="wpcf7-form-control-wrap" data-name="city">
              <input
                size="40"
                placeholder="City Of Birth*"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </span>
            {errors.city && <div className="error">{errors.city}</div>}
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">Choose gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Female">Other</option>
            </select>
            {errors.gender && <div className="error">{errors.gender}</div>}
          </div>
          <div className="col">
            <span className="wpcf7-form-control-wrap" data-name="address">
              <input
                size="40"
                placeholder="Address*"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </span>
            {errors.address && <div className="error">{errors.address}</div>}
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-6">
            <span className="wpcf7-form-control-wrap" data-name="zip">
              <input
                size="40"
                placeholder="Zip Code*"
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                required
              />
            </span>
            {errors.zip && <div className="error">{errors.zip}</div>}
          </div>
        </div>
        <h1 className="mt-5 mb-4">Privacy</h1>
        <div className="row ">
          <div className="col">
            <label className="Check">
              <input
                type="checkbox"
                name="processingAuthorization"
                checked={formData.processingAuthorization}
                onChange={handleInputChange}
              />
              I hereby authorise the processing of my personal data for purposes
              related to the performance of institutional activities.
            </label>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <label className="Check">
              <input
                type="checkbox"
                name="withdrawalAuthorization"
                checked={formData.withdrawalAuthorization}
                onChange={handleInputChange}
              />
              It is possible to exercise the right of withdrawal and receive a
              refund of the fees paid within 7 days of registration.
            </label>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <label className="Check">
              <input
                type="checkbox"
                name="advertisingAuthorization"
                checked={formData.advertisingAuthorization}
                onChange={handleInputChange}
              />
              I hereby authorise the processing of my personal data for sending
              advertising material.
            </label>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col">
            <button
              onClick={handleSubmit}
              className={`submit-btn ${
                formData.advertisingAuthorization &&
                formData.withdrawalAuthorization &&
                formData.processingAuthorization
                  ? ""
                  : "disabled"
              }`}
              disabled={
                !formData.advertisingAuthorization ||
                !formData.withdrawalAuthorization ||
                !formData.processingAuthorization
              }
            >
              {loading ? "..." : "Submit"}
            </button>
          </div>
        </div>
      </div>

      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showApplyModal}
        onHide={hideApplyModal}
      >
        <section id="lead-capture">
          <section className="visuals">
            <img src={logo} />
          </section>
          <section className="readables">
            <div id="please">
              {loading ? (
                <span>
                  Please wait while your file is being uploaded. This may take a
                  moment depending on the size of the file. Thank you for your
                  patience!
                </span>
              ) : (
                <>
                  <h2> Thank you for your application!</h2>
                  <br />
                  We sincerely appreciate your interest in joining us. Your
                  application has been received successfully. An email
                  confirmation has been sent to you, and we will carefully
                  review your application. Our team will get back to you as soon
                  as possible with the next steps.
                  <br />
                  <br />
                  <span>
                    Thank you for your patience, and we look forward to
                    connecting with you soon!
                  </span>
                </>
              )}
            </div>
          </section>
        </section>
      </Modal>
    </>
  );
}

export default Enrollment;
