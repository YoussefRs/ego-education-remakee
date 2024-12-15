import React, { useRef, useState } from "react";
import SubHeader from "../../globals/SubHeader/SubHeader";
import CModal from "../../globals/Modal/Modal";
import { useModal } from "../../globals/Modal/useModal";
import axios from "axios";
import { Modal } from "react-bootstrap";
import "./enrolment.css";
import Loading from "../../globals/Loading/Loading";
import logo from "../../assets/Logos/logo-ego-black.png";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Styles for phone input

import {
  CertificateIcon,
  EmailIcon,
  FileIcon,
  IdIcon,
  LangIcon,
  NameIcon,
  PhoneIcon,
  ProgramIcon,
  CalendarIcon,
  UploadIcon,
  AddressIcon,
  CityIcon,
  CountryIcon,
  GenderIcon,
} from "./Svgs";
import { countries } from "../../globals/countriesData";
import Flag from "react-world-flags";

function Enrollment() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { showModal, openModal, closeModal } = useModal();
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [showCountryMenu, setShowCountryMenu] = useState(false);

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

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
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

  const [inputType, setInputType] = useState("text");
  const dateInputRef = useRef(null);

  const handleFocus = () => {
    setInputType("date");
    setTimeout(() => {
      dateInputRef.current?.showPicker();
    }, 100);
  };

  const handleBlur = () => {
    if (!formData.date) {
      setInputType("text");
    }
  };

  console.warn(formData.phone);

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
        <div className="row mb-md-5">
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <ProgramIcon />
            </div>
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
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <LangIcon />
            </div>
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
        <div className="row mb-md-5">
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <NameIcon width={"77%"} />
            </div>
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
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <NameIcon width={"77%"} />
            </div>
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
        <div className="row mb-md-5">
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <EmailIcon width={"77%"} />
            </div>
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
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <EmailIcon width={"77%"} />
            </div>
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
        <div className="row mb-md-5">
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <PhoneIcon width={"77%"} />
            </div>
            <span className="wpcf7-form-control-wrap" data-name="phone">
              <PhoneInput
                country={"us"} // Default country
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "phone",
                  required: true,
                  placeholder: "Telephone / Mobile*",
                }}
                enableSearch={true} // Search countries in dropdown
                countryCodeEditable={false} // Prevent manual editing of country code
                la
              />
            </span>
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <CalendarIcon width={"77%"} />
            </div>
            <span className="wpcf7-form-control-wrap" data-name="date">
              <input
                ref={dateInputRef}
                size="40"
                placeholder="Date of Birth*"
                type={inputType}
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </span>
            {errors.date && <div className="error">{errors.date}</div>}
          </div>
        </div>
        <div className="row mb-md-5 align-items-center">
          <div className="col-md-6 col-12 d-flex justify-content-center __enrollment_field">
            <div className="__icon">
              <FileIcon width={"77%"} />
            </div>
            <fieldset>
              <legend>Academic career*</legend>
              <span data-default="Choose file">
                {formData.file1 ? formData.file1.name : ""}
              </span>
            </fieldset>
            {errors.file1 && <div className="error">{errors.file1}</div>}
            <label className="__upload_icon" data-default="Choose file">
              <UploadIcon />
              <input type="file" name="file1" onChange={handleInputChange} />
            </label>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center __enrollment_field">
            <div className="__icon">
              <FileIcon width={"77%"} />
            </div>
            <fieldset>
              <legend>Degree obtained*</legend>
              <span>{formData.file2 ? formData.file2.name : ""}</span>
            </fieldset>
            {errors.file2 && <div className="error">{errors.file2}</div>}
            <label className="__upload_icon" data-default="Choose file">
              <UploadIcon />
              <input type="file" name="file2" onChange={handleInputChange} />
            </label>
          </div>
        </div>
        <div className="row mb-md-5 align-items-center">
          <div className="col-md-6 col-12 d-flex justify-content-center __enrollment_field">
            <div className="__icon">
              <FileIcon width={"77%"} />
            </div>
            <fieldset>
              <legend>CV*</legend>
              <span>{formData.file3 ? formData.file3.name : ""}</span>
            </fieldset>
            {errors.file3 && <div className="error">{errors.file3}</div>}
            <label className="__upload_icon" data-default="Choose file">
              <UploadIcon />
              <input type="file" name="file3" onChange={handleInputChange} />
            </label>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center __enrollment_field">
            <div className="__icon">
              <IdIcon width={"77%"} />
            </div>
            <fieldset>
              <legend>Copy of a valid identification document*</legend>
              <span>{formData.file4 ? formData.file4.name : ""}</span>
            </fieldset>
            {errors.file4 && <div className="error">{errors.file4}</div>}
            <label className="__upload_icon" data-default="Choose file">
              <UploadIcon />
              <input type="file" name="file4" onChange={handleInputChange} />
            </label>
          </div>
        </div>
        <div className="row mb-md-5 align-items-center">
          <div className="col-md-6 col-12 d-flex justify-content-center __enrollment_field">
            <div className="__icon">
              <CertificateIcon width={"77%"} />
            </div>
            <fieldset>
              <legend>Linguistic certification (if obtained)</legend>
              <span>{formData.file5 ? formData.file5.name : ""}</span>
            </fieldset>
            {errors.file5 && <div className="error">{errors.file5}</div>}
            <label className="__upload_icon" data-default="Choose file">
              <UploadIcon />
              <input type="file" name="file5" onChange={handleInputChange} />
            </label>
          </div>
        </div>
        <h1 className="mt-5 mb-4">Additional Information</h1>
        <div className="row mb-md-5">
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <CountryIcon width={"77%"} />
            </div>
            <span
              className="wpcf7-form-control-wrap d-flex justify-content-center"
              data-name="country"
            >
              {/* <input
                size="40"
                placeholder="Country Of Birth*"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              /> */}
              <div
                className="__country_select"
                onClick={() => {
                  setShowCountryMenu(!showCountryMenu);
                }}
              >
                <Flag
                  code={
                    countries.find((cnt) => {
                      return cnt.name_en === formData?.country;
                    })?.code
                  }
                  fallback={<span></span>}
                  height={"11px"}
                  width={"16px"}
                />
                {formData.country && formData.country !== "" ? (
                  <span>{formData.country}</span>
                ) : (
                  <span className="__ph">"Country Of Birth*"</span>
                )}
              </div>
            </span>
            <div
              className={`__country_select_menu ${
                showCountryMenu ? "__show" : ""
              }`}
            >
              <div
                className="__option"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    country: "",
                  }));
                  setShowCountryMenu(false);
                }}
              ></div>
              {countries.map((cntr, i) => (
                <div
                  className="__option"
                  value={cntr.code}
                  key={i}
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      country: cntr.name_en,
                    }));
                    setShowCountryMenu(false);
                  }}
                >
                  <Flag
                    code={cntr.code}
                    fallback={<span></span>}
                    height={"11px"}
                    width={"16px"}
                  />
                  <span>{cntr.name_de}</span>
                </div>
              ))}
            </div>
            {errors.country && <div className="error">{errors.country}</div>}
          </div>
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <CityIcon width={"77%"} />
            </div>
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
        <div className="row mb-md-5">
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <AddressIcon width={"60%"} />
            </div>
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
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <AddressIcon width={"60%"} />
            </div>
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
        <div className="row mb-md-5">
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <GenderIcon width={"77%"} />
            </div>
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
              style={{ width: "150px" }}
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
          <section>
            <button onClick={() => setShowApplyModal(false)}>Close</button>
          </section>
        </section>
      </Modal>
    </>
  );
}

export default Enrollment;
