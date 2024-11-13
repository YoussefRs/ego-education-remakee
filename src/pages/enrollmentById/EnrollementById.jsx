import React, { useState } from "react";
import "./enrollementById.css";
import SubHeader from "../../globals/SubHeader/SubHeader";
import { useLocation } from "react-router-dom";

function EnrollementById() {
  const location = useLocation();
  const { course, degree, inst } = location.state;
  const [formData, setFormData] = useState({
    course: course.name,
    lng: "english",
    degree: course.degree,
    inst: course.institute,
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
  console.log(formData);
  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  // Function to send form data to the backend
  const handleSubmit = () => {
    // Send formData to the backend using fetch or axios
    console.log("Form Data:", formData);
    // Reset form after submission if needed
    // setFormData({...initialFormData});
  };


  return (
    <>
      <SubHeader
        title={"Enrollment"}
        path={[{ url: "/enrollment", label: "enrollment" }]}
        current={`${course.name}`}
      />
      <div className="container enrollment d-flex flex-column">
        <h1 className="mb-4">Enrollment Informations</h1>
        <div className="row mb-5">
          <div className="col">
            <select>
              <option value={course.name} onChange={handleInputChange}>
                {course.name}{" "}
              </option>
            </select>
          </div>
          <div className="col">
            <select>
              <option value="option2" onChange={handleInputChange}>
                English{" "}
              </option>
              <option value="option3" onChange={handleInputChange}>
                Italian{" "}
              </option>
            </select>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <select>
              <option value={course.degree} onChange={handleInputChange}>
                {course.degree}{" "}
              </option>
            </select>
          </div>
          <div className="col">
            <select>
              <option value="option5" onChange={handleInputChange}>
                {course.institute}{" "}
              </option>
            </select>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="first-name">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="First Name*"
                type="text"
                name="first-name"
                onChange={handleInputChange}
              />
            </span>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="lastname">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Last Name*"
                type="text"
                name="last-name"
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
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Email*"
                type="email"
                name="email"
                onChange={handleInputChange}
              />
            </span>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="email-email">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Repeat Email*"
                type="email"
                name="email-email"
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
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Telephone / Mobile*"
                type="number"
                name="phone"
              />
            </span>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="date">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Repeat Email*"
                type="date"
                name="date"
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
                  {formData.file1 || "Choose file"}
                </span>
                <input type="file" onChange={handleInputChange} />
              </label>
            </fieldset>
          </div>
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>Degree obtained*</legend>

              <label class="__lk-fileInput">
                <span data-default="Choose file">
                  {formData.file2 || "Choose file"}
                </span>
                <input type="file" onChange={handleInputChange} />
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
                  {formData.file3 || "Choose file"}
                </span>
                <input type="file" onChange={handleInputChange} />
              </label>
            </fieldset>
          </div>
          <div className="col d-flex justify-content-center">
            <fieldset>
              <legend>Copy of a valid identification document*</legend>

              <label class="__lk-fileInput">
                <span data-default="Choose file">
                  {formData.file4 || "Choose file"}
                </span>
                <input type="file" onChange={handleInputChange} />
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
                  {formData.file4 || "Choose file"}
                </span>
                <input type="file" onChange={handleInputChange} />
              </label>
            </fieldset>
          </div>
        </div>
        <h1 className="mt-5 mb-4">Additional Informations</h1>
        <div className="row mb-5">
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="country">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Country Of Birth*"
                type="text"
                name="country"
                onChange={handleInputChange}
              />
            </span>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="city">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="City Of birth*"
                type="text"
                name="city"
                onChange={handleInputChange}
              />
            </span>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <select name="gender" onChange={handleInputChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="col">
            <span class="wpcf7-form-control-wrap" data-name="address">
              <input
                size="40"
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Address*"
                type="text"
                name="address"
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
                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                aria-required="true"
                aria-invalid="false"
                placeholder="Zip Code*"
                type="text"
                name="zip"
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
    </>
  );
}

export default EnrollementById;
