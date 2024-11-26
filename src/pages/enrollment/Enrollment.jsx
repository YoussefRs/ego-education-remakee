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

  const handleSubmit = async () => {
    try {
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
            >
              <option value="">Choose program</option>
              <option value="MSc in Information Security">
                MSc in Information Security
              </option>
            </select>
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
            <span class="wpcf7-form-control-wrap" data-name="first-name">
              <input
                size="40"
                placeholder="First Name*"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </span>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="lastname">
              <input
                size="40"
                placeholder="Last Name*"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="email">
              <input
                size="40"
                placeholder="Email*"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </span>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="email-email">
              <input
                size="40"
                placeholder="Repeat Email*"
                type="email"
                name="repeatEmail"
                value={formData.repeatEmail}
                onChange={handleInputChange}
              />
            </span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="phone">
              <input
                size="40"
                placeholder="Telephone / Mobile*"
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </span>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="date">
              <input
                size="40"
                placeholder="Date of Birth*"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>Academic career*</legend>

              <label class="__lk-fileInput">
                <span data-default="Choose file">
                  {formData.file1 ? formData.file1.name : "Choose file"}
                </span>
                <input type="file" name="file1" onChange={handleInputChange} />
              </label>
            </fieldset>
          </div>
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>Degree obtained*</legend>

              <label class="__lk-fileInput">
                <span data-default="Choose file">
                  {formData.file2 ? formData.file2.name : "Choose file"}
                </span>
                <input type="file" name="file2" onChange={handleInputChange} />
              </label>
            </fieldset>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>CV*</legend>

              <label class="__lk-fileInput">
                <span data-default="Choose file">
                  {formData.file3 ? formData.file3.name : "Choose file"}
                </span>
                <input type="file" name="file3" onChange={handleInputChange} />
              </label>
            </fieldset>
          </div>
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>Copy of a valid identification document*</legend>

              <label class="__lk-fileInput">
                <span data-default="Choose file">
                  {formData.file4 ? formData.file4.name : "Choose file"}
                </span>
                <input type="file" name="file4" onChange={handleInputChange} />
              </label>
            </fieldset>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-6 d-flex justify-content-center">
            <fieldset>
              <legend>Linguistic certification (if obtained)</legend>

              <label class="__lk-fileInput">
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
            <span class="wpcf7-form-control-wrap" data-name="country">
              <input
                size="40"
                placeholder="Country Of Birth*"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </span>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="city">
              <input
                size="40"
                placeholder="City Of Birth*"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Choose gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Female">Other</option>
            </select>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="address">
              <input
                size="40"
                placeholder="Address*"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-6">
            <span class="wpcf7-form-control-wrap" data-name="zip">
              <input
                size="40"
                placeholder="Zip Code*"
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
              />
            </span>
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
              related to the performance of institutional activities (Read more)
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
              refund of the fees paid within 7 days of registration
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
              advertising material (Read more)
            </label>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col">
            <button onClick={handleSubmit}>Confirm</button>
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
          <section class="visuals">
            <img src={logo} />
          </section>
          <section class="readables">
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
