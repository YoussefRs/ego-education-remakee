import React, { useRef, useState } from "react";
import "./enrollementById.css";
import SubHeader from "../../globals/SubHeader/SubHeader";
import { useLocation } from "react-router-dom";
import { Modal } from "react-bootstrap";
import CModal from "../../globals/Modal/Modal";
import axios from "axios";
import "../enrollment/enrolment.css";
import logo from "../../assets/Logos/logo-ego-black.png";
import PhoneInput from "react-phone-input-2";
import { useTranslation } from "react-i18next";
import { useModal } from "../../globals/Modal/useModal";

import { countries } from "../../globals/countriesData";
import Flag from "react-world-flags";
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
} from "../enrollment/Svgs";

function EnrollementById() {
  const location = useLocation();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { course, degree, inst } = location.state;

  const { t } = useTranslation();
  const {
    header,
    program,
    lng,
    fname,
    lname,
    reamil,
    bday,
    acc,
    degg,
    cv,
    copy,
    lngg,
    header2,
    country,
    city,
    address,
    zip,
    gender,
    h1,
    h2,
    h3,
    btn,
  } = t("enrol");
  const {t1, t2, t3, t4} = t("applyerr");

  const inputRefs = useRef({});
  const { showModal, openModal, closeModal } = useModal();
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showErrorModal, setShowErrorModal] = useState(false);

  const [showCountryMenu, setShowCountryMenu] = useState(false);

  const initialData = {
    course: course.name,
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
    course: course.name,
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

  const validateForm = (backendErrors = {}) => {
    const newErrors = { ...backendErrors }; // Merge backend errors into newErrors
    let firstInvalidInput = null;

    if (!formData.course) {
      newErrors.course = "Course is required.";
      firstInvalidInput = firstInvalidInput || "course";
    }

    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
      firstInvalidInput = firstInvalidInput || "firstName";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
      firstInvalidInput = firstInvalidInput || "lastName";
    }

    // If backend provides email error, overwrite the existing email error
    if (backendErrors.email) {
      newErrors.email = backendErrors.email;
      firstInvalidInput = firstInvalidInput || "email";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
      firstInvalidInput = firstInvalidInput || "email";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
      firstInvalidInput = firstInvalidInput || "email";
    } else if (formData.email !== formData.repeatEmail) {
      newErrors.repeatEmail = "Emails do not match.";
      firstInvalidInput = firstInvalidInput || "repeatEmail";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
      firstInvalidInput = firstInvalidInput || "phone";
    }
    if (!formData.date) {
      newErrors.date = "Date of birth is required.";
      firstInvalidInput = firstInvalidInput || "date";
    }
    if (!formData.file1) {
      newErrors.file1 = "Academic career file is required.";
      firstInvalidInput = firstInvalidInput || "file1";
    }
    if (!formData.file2) {
      newErrors.file2 = "Degree obtained file is required.";
      firstInvalidInput = firstInvalidInput || "file2";
    }
    if (!formData.file3) {
      newErrors.file3 = "CV file is required.";
      firstInvalidInput = firstInvalidInput || "file3";
    }
    if (!formData.file4) {
      newErrors.file4 = "Valid identification document file is required.";
      firstInvalidInput = firstInvalidInput || "file4";
    }
    if (!formData.country) {
      newErrors.country = "Country of birth is required.";
      firstInvalidInput = firstInvalidInput || "country";
    }
    if (!formData.city) {
      newErrors.city = "City of birth is required.";
      firstInvalidInput = firstInvalidInput || "city";
    }
    if (!formData.address) {
      newErrors.address = "Address of birth is required.";
      firstInvalidInput = firstInvalidInput || "address";
    }
    if (!formData.zip) {
      newErrors.zip = "Zip code of birth is required.";
      firstInvalidInput = firstInvalidInput || "zip";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required.";
      firstInvalidInput = firstInvalidInput || "gender";
    }

    // Set errors and scroll to first invalid input
    setErrors(newErrors);

    if (firstInvalidInput) {
      inputRefs.current[firstInvalidInput]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // Optionally focus the input to highlight it
      inputRefs.current[firstInvalidInput].focus();
    }

    const isValid = Object.keys(newErrors).length === 0;
    return isValid;
  };

  const openErrorModal = () => {
    setShowErrorModal(true);
  };

  const handleSubmit = async () => {
    try {
      const isValid = validateForm(); // Perform initial validation
      if (!isValid) {
        return; // Stop if the frontend validation fails
      }

      setLoading(true);

      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key.startsWith("file")) {
          if (formData[key]) {
            data.append(key, formData[key]);
          }
        } else {
          data.append(key, formData[key]);
        }
      });

      const response = await axios.post(`${apiUrl}/create`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setShowApplyModal(true);
      setFormData(initialData); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);

      // Handle backend errors
      if (error.response && error.response.data) {
        const backendErrors = {};
        if (error.response.data.Error) {
          backendErrors.email = error.response.data.Error; // Capture backend error
        }

        // Revalidate the form with backend errors
        const isValidAfterBackendErrors = validateForm(backendErrors);

        if (!isValidAfterBackendErrors) {
          console.log(
            "Form is invalid due to backend errors. Stopping submission."
          );
          return; // Stop further actions if backend errors exist
        }
      }
    } finally {
      setLoading(false);
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

  return (
    <>
      <SubHeader
        title={"Apply"}
        path={[{ url: "/enrollment", label: "home" }]}
        current={"Apply"}
      />
      <CModal title="My Modal" show={showModal} onHide={closeModal}></CModal>

      <div className="container enrollment d-flex flex-column">
        <h1 className="mb-4">{header} </h1>
        <div className="row mb-md-5">
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <ProgramIcon />
            </div>
            <select
              name="course"
              value={formData.course}
              onChange={(e) => {
                handleInputChange(e);
                if (e.target.value) {
                  setErrors((prevErrors) => {
                    const updatedErrors = { ...prevErrors };
                    delete updatedErrors.course;
                    return updatedErrors;
                  });
                }
              }}
              ref={(el) => (inputRefs.current.course = el)}
              required
            >
              <option value="">{program} </option>
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
              <option>{lng} </option>
              <option value="English">English</option>
              <option value="Italian">Italian</option>
              <option value="Italian">Brazilian</option>
            </select>
            {errors.lng && <div className="error">{errors.lng}</div>}
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
                placeholder={fname}
                type="text"
                name="firstName"
                value={formData.firstName}
                ref={(el) => (inputRefs.current.firstName = el)}
                onChange={(e) => {
                  handleInputChange(e);
                  if (e.target.value) {
                    setErrors((prevErrors) => {
                      const updatedErrors = { ...prevErrors };
                      delete updatedErrors.firstName;
                      return updatedErrors;
                    });
                  }
                }}
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
                placeholder={lname}
                type="text"
                name="lastName"
                value={formData.lastName}
                ref={(el) => (inputRefs.current.lastName = el)}
                onChange={(e) => {
                  handleInputChange(e);
                  if (e.target.value) {
                    setErrors((prevErrors) => {
                      const updatedErrors = { ...prevErrors };
                      delete updatedErrors.lastName;
                      return updatedErrors;
                    });
                  }
                }}
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
                ref={(el) => (inputRefs.current.email = el)}
                onChange={(e) => {
                  handleInputChange(e);
                  if (e.target.value) {
                    setErrors((prevErrors) => {
                      const updatedErrors = { ...prevErrors };
                      delete updatedErrors.email;
                      return updatedErrors;
                    });
                  }
                }}
                required
              />
            </span>
            {errors.email && <div className="error">{errors.email}</div>}
            {errors.email && (
              <div className="error">{errors.email.message}</div>
            )}
          </div>
          <div className="col-md-6 col-12 __enrollment_field">
            <div className="__icon">
              <EmailIcon width={"77%"} />
            </div>
            <span className="wpcf7-form-control-wrap" data-name="email-email">
              <input
                size="40"
                placeholder={reamil}
                type="email"
                name="repeatEmail"
                value={formData.repeatEmail}
                ref={(el) => (inputRefs.current.repeatEmail = el)}
                onChange={(e) => {
                  handleInputChange(e);
                  if (e.target.value) {
                    setErrors((prevErrors) => {
                      const updatedErrors = { ...prevErrors };
                      delete updatedErrors.repeatEmail;
                      return updatedErrors;
                    });
                  }
                }}
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
                ref={(el) => (inputRefs.current.phone = el)}
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
                placeholder={bday}
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
              <legend>{acc} </legend>
              <span data-default="Choose file">
                {formData.file1 ? formData.file1.name : ""}
              </span>
            </fieldset>
            {errors.file1 && <div className="error">{errors.file1}</div>}
            <label className="__upload_icon" data-default="Choose file">
              <UploadIcon />
              <input
                type="file"
                name="file1"
                onChange={(e) => {
                  handleInputChange(e);
                  if (e.target.files.length > 0) {
                    setErrors((prevErrors) => {
                      const updatedErrors = { ...prevErrors };
                      delete updatedErrors.file1;
                      return updatedErrors;
                    });
                  }
                }}
                ref={(el) => (inputRefs.current.file1 = el)}
              />
            </label>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center __enrollment_field">
            <div className="__icon">
              <FileIcon width={"77%"} />
            </div>
            <fieldset>
              <legend>{degg} </legend>
              <span>{formData.file2 ? formData.file2.name : ""}</span>
            </fieldset>
            {errors.file2 && <div className="error">{errors.file2}</div>}
            <label className="__upload_icon" data-default="Choose file">
              <UploadIcon />
              <input
                type="file"
                name="file2"
                onChange={(e) => {
                  handleInputChange(e);
                  if (e.target.files.length > 0) {
                    setErrors((prevErrors) => {
                      const updatedErrors = { ...prevErrors };
                      delete updatedErrors.file2;
                      return updatedErrors;
                    });
                  }
                }}
                ref={(el) => (inputRefs.current.file2 = el)}
              />
            </label>
          </div>
        </div>
        <div className="row mb-md-5 align-items-center">
          <div className="col-md-6 col-12 d-flex justify-content-center __enrollment_field">
            <div className="__icon">
              <FileIcon width={"77%"} />
            </div>
            <fieldset>
              <legend>{cv} </legend>
              <span>{formData.file3 ? formData.file3.name : ""}</span>
            </fieldset>
            {errors.file3 && <div className="error">{errors.file3}</div>}
            <label className="__upload_icon" data-default="Choose file">
              <UploadIcon />
              <input
                type="file"
                name="file3"
                onChange={(e) => {
                  handleInputChange(e);
                  if (e.target.files.length > 0) {
                    setErrors((prevErrors) => {
                      const updatedErrors = { ...prevErrors };
                      delete updatedErrors.file3;
                      return updatedErrors;
                    });
                  }
                }}
                ref={(el) => (inputRefs.current.file3 = el)}
              />
            </label>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center __enrollment_field">
            <div className="__icon">
              <IdIcon width={"77%"} />
            </div>
            <fieldset>
              <legend>{copy} </legend>
              <span>{formData.file4 ? formData.file4.name : ""}</span>
            </fieldset>
            {errors.file4 && <div className="error">{errors.file4}</div>}
            <label className="__upload_icon" data-default="Choose file">
              <UploadIcon />
              <input
                type="file"
                name="file4"
                onChange={(e) => {
                  handleInputChange(e);
                  if (e.target.files.length > 0) {
                    setErrors((prevErrors) => {
                      const updatedErrors = { ...prevErrors };
                      delete updatedErrors.file4;
                      return updatedErrors;
                    });
                  }
                }}
                ref={(el) => (inputRefs.current.file4 = el)}
              />
            </label>
          </div>
        </div>
        <div className="row mb-md-5 align-items-center">
          <div className="col-md-6 col-12 d-flex justify-content-center __enrollment_field">
            <div className="__icon">
              <CertificateIcon width={"77%"} />
            </div>
            <fieldset>
              <legend>{lngg} </legend>
              <span>{formData.file5 ? formData.file5.name : ""}</span>
            </fieldset>
            {errors.file5 && <div className="error">{errors.file5}</div>}
            <label className="__upload_icon" data-default="Choose file">
              <UploadIcon />
              <input type="file" name="file5" onChange={handleInputChange} />
            </label>
          </div>
        </div>
        <h1 className="mt-5 mb-4">{header2} </h1>
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
              onChange={(e) => {
                handleInputChange(e);
                if (e.target.value) {
                  setErrors((prevErrors) => {
                    const updatedErrors = { ...prevErrors };
                    delete updatedErrors.country;
                    return updatedErrors;
                  });
                }
              }}
              ref={(el) => (inputRefs.current.country = el)}
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
                  <span className="__ph">{country} </span>
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
                placeholder={city}
                type="text"
                name="city"
                value={formData.city}
                onChange={(e) => {
                  handleInputChange(e);
                  if (e.target.value) {
                    setErrors((prevErrors) => {
                      const updatedErrors = { ...prevErrors };
                      delete updatedErrors.city;
                      return updatedErrors;
                    });
                  }
                }}
                ref={(el) => (inputRefs.current.city = el)}
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
                placeholder={address}
                type="text"
                name="address"
                value={formData.address}
                onChange={(e) => {
                  handleInputChange(e);
                  if (e.target.value) {
                    setErrors((prevErrors) => {
                      const updatedErrors = { ...prevErrors };
                      delete updatedErrors.address;
                      return updatedErrors;
                    });
                  }
                }}
                ref={(el) => (inputRefs.current.address = el)}
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
                placeholder={zip}
                type="number"
                name="zip"
                value={formData.zip}
                onChange={(e) => {
                  handleInputChange(e);
                  if (e.target.value) {
                    setErrors((prevErrors) => {
                      const updatedErrors = { ...prevErrors };
                      delete updatedErrors.zip;
                      return updatedErrors;
                    });
                  }
                }}
                ref={(el) => (inputRefs.current.zip = el)}
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
              onChange={(e) => {
                handleInputChange(e);
                if (e.target.value) {
                  setErrors((prevErrors) => {
                    const updatedErrors = { ...prevErrors };
                    delete updatedErrors.gender;
                    return updatedErrors;
                  });
                }
              }}
              required
            >
              <option value="">{gender} </option>
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
              {h1}
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
              {h2}
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
              {h3}
            </label>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col">
            <button
              onClick={openErrorModal}
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
              {loading ? "..." : btn}
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
                  Please do not close the tab while your file is being uploaded.
                  This may take a moment depending on the size of the file.
                  Thank you for your patience!
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

      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showErrorModal}
        onHide={() => setShowErrorModal(false)}
      >
        <section id="lead-capture">
          <section className="visuals">
            <img src={logo} />
          </section>
          <section className="readables">
            <div id="please">
              <h2> {t1}</h2>
              <br />
              {t2}
              <span style={{ color: "rgb(4, 102, 53)" }}>
                {" "}
                enrolment@ego-education.com
              </span>
              <br />
              <br />
              <span>
              {t3}
              </span>
            </div>
          </section>
          <section>
            <button onClick={() => setShowErrorModal(false)}>{t4}</button>
          </section>
        </section>
      </Modal>
    </>
  );
}

export default EnrollementById;
