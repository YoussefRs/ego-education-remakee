import React, { useEffect, useState } from "react";
import "./styles.css";

import logo from "../../assets/Logos/logo-ego-black.png";
import { useNavigate } from "react-router-dom";
import AppicantRow from "./components/ApplicantRow/AppicantRow";
import LoginModal from "./components/LoginModal/LoginModal";
import axios from "axios";
import DetailsModal from "./components/DetailsModal/DetailsModal";

const Dashboard = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showModalCandidate, setShowModalCandidate] = useState(false);
 

  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const [candidates, setCandidates] = useState([]);
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function formatDate(dateString) {
    const date = new Date(dateString); // Convert the ISO string to a Date object
    const options = {
      weekday: "long", // e.g., Monday
      year: "numeric",
      month: "long", // e.g., November
      day: "numeric", // e.g., 25
    };

    // Format the date as a localized string
    return date.toLocaleDateString("en-US", options);
  }

  const fetchCandidates = async () => {
    try {
      const response = await axios.get(`${apiUrl}/candidates`);
      setCandidates(response.data.Data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching candidates:", err);
      setError("Failed to fetch candidates. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchCandidates();
  }, []);

  const handleClose = () => {
    setShowModalCandidate(false);
  };

  const deleteCandidate = async (candidateId) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/candidates/${candidateId}`
      );
      alert("Candidate deleted successfully!");
    } catch (error) {
      console.error("Error deleting candidate:", error);
      alert(
        error.response?.data?.Error ||
          "An error occurred while deleting the candidate."
      );
    }
  };

  const filterLinks = (data) => {
    return data.map((row) => {
      const filteredRow = { ...row }; // Clone the row to avoid modifying the original data
      Object.keys(filteredRow).forEach((key) => {
        // If the value is a URL (using a basic check for links), replace it with an empty string
        if (
          typeof filteredRow[key] === "string" &&
          filteredRow[key].startsWith("http")
        ) {
          filteredRow[key] = ""; // Remove the link or replace it with any placeholder like "[Link Removed]"
        }
      });
      return filteredRow;
    });
  };

  // Function to export the data to CSV
  function exportToCSV(filename, data) {
    const csvRows = [];

    // Extract the headers (keys from the first object)
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(","));

    // Loop through the data and generate rows
    data.forEach((row) => {
      const values = headers.map((header) => row[header]);
      csvRows.push(values.join(","));
    });

    // Create a Blob from the CSV string
    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    // Trigger a click to start the download
    link.click();
  }



  return (
    <>
      {authState && (
        <>
          <div className="container__">
            <div className="_sidebar__">
              <div>
                <div className="sidebar__logo">
                  <img src={logo} />
                  {/* <h2 className="sidebar__logo-header">Ego Education</h2> */}
                </div>
                <ul className="side-nav">
                  <span className="side-nav__header">Main Menu</span>
                  <li className="side-nav__item side-nav__item-active">
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.23201 3.4202L9.23239 3.41989C10.2108 2.63408 11.7843 2.63834 12.7781 3.42994C12.7783 3.43005 12.7784 3.43015 12.7785 3.43025L18.7784 8.2301C18.7789 8.23054 18.7795 8.23099 18.78 8.23143C19.1189 8.50835 19.4146 8.94381 19.6058 9.44415C19.7968 9.94409 19.8672 10.4662 19.8014 10.8985L18.6475 17.8037C18.6474 17.8042 18.6473 17.8047 18.6472 17.8052C18.4217 19.0989 17.1608 20.1667 15.8585 20.1667H6.1418C4.81982 20.1667 3.58766 19.1252 3.36227 17.8148C3.36221 17.8145 3.36215 17.8142 3.36209 17.8138L2.20746 10.9043L2.20726 10.9032C2.13345 10.4677 2.19947 9.94466 2.39002 9.44498C2.58055 8.94535 2.87982 8.51038 3.22697 8.2334L3.22784 8.2327L9.23201 3.4202ZM11.0001 18.1876C11.6521 18.1876 12.1876 17.652 12.1876 17.0001V14.2501C12.1876 13.5981 11.6521 13.0626 11.0001 13.0626C10.3482 13.0626 9.81263 13.5981 9.81263 14.2501V17.0001C9.81263 17.652 10.3482 18.1876 11.0001 18.1876Z"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    </svg>
                    <span>Application</span>
                  </li>
                  <li className="side-nav__item">
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.30664 17.1375V15.24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11 17.1375V13.3425"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M15.6934 17.1375V11.4358"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M15.6933 5.86255L15.2716 6.35755C12.9341 9.08922 9.79914 11.0234 6.30664 11.8942"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13.0073 5.86255H15.6932V8.53922"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.25016 20.6667H13.7502C18.3335 20.6667 20.1668 18.8334 20.1668 14.25V8.75004C20.1668 4.16671 18.3335 2.33337 13.7502 2.33337H8.25016C3.66683 2.33337 1.8335 4.16671 1.8335 8.75004V14.25C1.8335 18.8334 3.66683 20.6667 8.25016 20.6667Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Courses</span>
                  </li>
                  <li className="side-nav__item">
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.1668 9.66671V14.25C20.1668 18.8334 18.3335 20.6667 13.7502 20.6667H8.25016C3.66683 20.6667 1.8335 18.8334 1.8335 14.25V8.75004C1.8335 4.16671 3.66683 2.33337 8.25016 2.33337H12.8335"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.1668 9.66671H16.5002C13.7502 9.66671 12.8335 8.75004 12.8335 6.00004V2.33337L20.1668 9.66671Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.4165 12.4166H11.9165"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.4165 16.0834H10.0832"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Events</span>
                  </li>
                </ul>

                <ul className="side-nav">
                  <span className="side-nav__header">Preferences</span>
                  <li className="side-nav__item">
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.75 8.85081V14.14C2.75 16.0833 2.75 16.0833 4.58333 17.3208L9.625 20.2358C10.3858 20.6758 11.6233 20.6758 12.375 20.2358L17.4167 17.3208C19.25 16.0833 19.25 16.0833 19.25 14.1491V8.85081C19.25 6.91664 19.25 6.91664 17.4167 5.67914L12.375 2.76414C11.6233 2.32414 10.3858 2.32414 9.625 2.76414L4.58333 5.67914C2.75 6.91664 2.75 6.91664 2.75 8.85081Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 14.25C12.5188 14.25 13.75 13.0188 13.75 11.5C13.75 9.98122 12.5188 8.75 11 8.75C9.48122 8.75 8.25 9.98122 8.25 11.5C8.25 13.0188 9.48122 14.25 11 14.25Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Settings</span>
                  </li>
                  <li className="side-nav__item">
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.0002 20.6666C16.0418 20.6666 20.1668 16.5416 20.1668 11.5C20.1668 6.45831 16.0418 2.33331 11.0002 2.33331C5.9585 2.33331 1.8335 6.45831 1.8335 11.5C1.8335 16.5416 5.9585 20.6666 11.0002 20.6666Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 7.83331V12.4166"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.9951 15.1667H11.0034"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Help &amp; Center</span>
                  </li>
                </ul>
              </div>

              <ul className="side-nav">
                <li className="side-nav__item last-item">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.8999 8.05999C9.2099 4.45999 11.0599 2.98999 15.1099 2.98999H15.2399C19.7099 2.98999 21.4999 4.77999 21.4999 9.24999V15.77C21.4999 20.24 19.7099 22.03 15.2399 22.03H15.1099C11.0899 22.03 9.2399 20.58 8.9099 17.04"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.0001 12.5H3.62012"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.85 9.14999L2.5 12.5L5.85 15.85"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Log Out</span>
                </li>
              </ul>
            </div>

            <main className="main-content">
              <div className="top-container">
                <div action="#" className="search">
                  <svg
                    className="search__icon"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5418 19.25C15.3513 19.25 19.2502 15.3512 19.2502 10.5417C19.2502 5.73223 15.3513 1.83337 10.5418 1.83337C5.73235 1.83337 1.8335 5.73223 1.8335 10.5417C1.8335 15.3512 5.73235 19.25 10.5418 19.25Z"
                      stroke="#596780"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.1668 20.1667L18.3335 18.3334"
                      stroke="#596780"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    type="text"
                    className="search__input"
                    placeholder="Search something here"
                  />
                </div>
                {/* <div className="user-nav">
                  <button className="notification">
                    <svg
                      className="notification__icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0201 2.91003C8.71009 2.91003 6.02009 5.60003 6.02009 8.91003V11.8C6.02009 12.41 5.76009 13.34 5.45009 13.86L4.30009 15.77C3.59009 16.95 4.08009 18.26 5.38009 18.7C9.69009 20.14 14.3401 20.14 18.6501 18.7C19.8601 18.3 20.3901 16.87 19.7301 15.77L18.5801 13.86C18.2801 13.34 18.0201 12.41 18.0201 11.8V8.91003C18.0201 5.61003 15.3201 2.91003 12.0201 2.91003Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </button>
                  <div className="user-info">
                    <svg
                      className="user-image"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        fill-opacity="0.01"
                      />
                      <path
                        fillRule="evenodd"
                        clip-rule="evenodd"
                        d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12.0321 19C8.67459 19 6.80643 17.2316 6.80643 14V13H17.1158L17.1434 13.9715C17.2358 17.2145 15.4003 19 12.0321 19ZM15.0875 15C14.8526 16.3955 13.9089 17 12.0321 17C10.1563 17 9.18179 16.3902 8.89677 15H15.0875ZM14 8H17V10H14V8ZM10 8H7V10H10V8Z"
                        fill="black"
                      />
                    </svg>
                    <span className="user-name">Elif Duygu</span>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5999 7.45837L11.1666 12.8917C10.5249 13.5334 9.4749 13.5334 8.83324 12.8917L3.3999 7.45837"
                      stroke="#596780"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div> */}
              </div>
              <div className="bottom-container">
                <div className="bottom-container__left">
                  {/*  <div className="box total-box">
                    <div className="total-box__left">
                      <div className="header-container">
                        <h3 className="section-header">Total Income</h3>
                        <svg
                          className="up-arrow"
                          width="42"
                          height="42"
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="42" height="42" rx="8" fill="#F6F7F9" />
                          <path
                            d="M27.0702 18.57L21.0002 12.5L14.9302 18.57"
                            stroke="#7FB519"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 29.5V12.67"
                            stroke="#7FB519"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h1 className="price">
                        $50,530.00<span className="price-currency">(USD)</span>
                      </h1>
                      <p>
                        <span className="percentage-increase">20%</span> increase
                        compared to last week
                      </p>
                    </div>
                    <div className="total-box__right">
                      <div className="header-container">
                        <h3 className="section-header">Total Expense</h3>
                        <svg
                          width="42"
                          height="42"
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="42" height="42" rx="8" fill="#F6F7F9" />
                          <path
                            d="M27.0702 23.43L21.0002 29.5L14.9302 23.43"
                            stroke="#FF4423"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 12.5V29.33"
                            stroke="#FF4423"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h1 className="price">
                        $50,530.00<span className="price-currency">(USD)</span>
                      </h1>
                      <p>
                        <span className="percentage-decrease">10%</span> decrease
                        compared to last week
                      </p>
                    </div>
                  </div> */}
                  <div className="box transaction-box">
                    <div className="header-container">
                      <h3 className="section-header">Application History</h3>
                      <div className="d-flex gap-2">
                        <div className="date-selector">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-clockwise"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                            />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                          </svg>
                          <span onClick={fetchCandidates}>Refresh</span>
                        </div>
                        <div className="date-selector">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 1.5V3.75"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 1.5V3.75"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.625 6.8175H15.375"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
                              stroke="#292D32"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7713 10.275H11.778"
                              stroke="#292D32"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.7713 12.525H11.778"
                              stroke="#292D32"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.99686 10.275H9.00359"
                              stroke="#292D32"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.99686 12.525H9.00359"
                              stroke="#292D32"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.22049 10.275H6.22723"
                              stroke="#292D32"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.22049 12.525H6.22723"
                              stroke="#292D32"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span onClick={exportToCSV}>Export CSV</span>
                        </div>
                      </div>
                    </div>
                    <table className="transaction-history">
                      <thead>

                      <tr>
                        <th>Full Name</th>
                        <th>
                          Email
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498"
                              stroke="#90A3BF"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </th>
                        <th>
                          Application Date
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498"
                              stroke="#90A3BF"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </th>

                        <th>
                          Course
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498"
                              stroke="#90A3BF"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </th>
                        <th>
                          Status
                        </th>
                        <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>

                      {candidates?.map((cd, i) => (
                        <tr key={i}>
                          <td>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="36"
                              height="36"
                              fill="currentColor"
                              className="bi bi-person-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                              <path
                                fillRule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                              />
                            </svg>
                            {cd.firstName} {cd.lastName}
                          </td>
                          <td>{cd.email}</td>
                          <td>{formatDate(cd.created_at)} </td>
                          <td>{cd.course}</td>
                          <td>{cd.status } </td>
                          <td>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="#046635"
                              className="bi bi-eye-fill"
                              viewBox="0 0 16 16"
                              style={{ marginRight: 15, cursor: "pointer" }}
                              onClick={() => {
                                setShowModalCandidate(true);
                                setCandidate(cd);
                              }}
                            >
                              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="red"
                              className="bi bi-trash3-fill"
                              viewBox="0 0 16 16"
                              style={{ cursor: "pointer" }}
                              onClick={() => deleteCandidate(cd.id)}
                            >
                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                            </svg>
                          </td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/*   <div className="bottom-container__right">
                  <div className="box">
                    <div className="header-container">
                      <h3 className="section-header">Your balance</h3>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 10.4166C3.9 10.4166 3 11.3541 3 12.5C3 13.6458 3.9 14.5833 5 14.5833C6.1 14.5833 7 13.6458 7 12.5C7 11.3541 6.1 10.4166 5 10.4166Z"
                          stroke="#1A202C"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M19 10.4166C17.9 10.4166 17 11.3541 17 12.5C17 13.6458 17.9 14.5833 19 14.5833C20.1 14.5833 21 13.6458 21 12.5C21 11.3541 20.1 10.4166 19 10.4166Z"
                          stroke="#1A202C"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 10.4166C10.9 10.4166 10 11.3541 10 12.5C10 13.6458 10.9 14.5833 12 14.5833C13.1 14.5833 14 13.6458 14 12.5C14 11.3541 13.1 10.4166 12 10.4166Z"
                          stroke="#1A202C"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <h1 className="price">
                      $120,435.00<span className="price-currency">(USD)</span>
                    </h1>
                    <p>From Jan 01, 2022 to Jan 31, 2022</p>
                    <div className="button-box">
                      <button className="btn btn-purple">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.104 13.1771C9.104 14.1066 9.82277 14.8541 10.7044 14.8541H12.5061C13.2727 14.8541 13.8957 14.2025 13.8957 13.3879C13.8957 12.5158 13.5123 12.1996 12.9469 11.9983L10.0623 10.9921C9.49692 10.7908 9.1136 10.4841 9.1136 9.60248C9.1136 8.79748 9.7365 8.13623 10.5032 8.13623H12.3048C13.1865 8.13623 13.9053 8.88373 13.9053 9.81331"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.5 7.1875V15.8125"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.0832 11.5C21.0832 16.79 16.7898 21.0833 11.4998 21.0833C6.20984 21.0833 1.9165 16.79 1.9165 11.5C1.9165 6.20996 6.20984 1.91663 11.4998 1.91663"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.2915 2.875V6.70833H20.1248"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.0832 1.91663L16.2915 6.70829"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Top Up</span>
                      </button>
                      <button className="btn btn-white">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.104 13.1771C9.104 14.1066 9.82277 14.8541 10.7044 14.8541H12.5061C13.2727 14.8541 13.8957 14.2025 13.8957 13.3879C13.8957 12.5158 13.5123 12.1996 12.9469 11.9983L10.0623 10.9921C9.49692 10.7908 9.1136 10.4841 9.1136 9.60248C9.1136 8.79748 9.7365 8.13623 10.5032 8.13623H12.3048C13.1865 8.13623 13.9053 8.88373 13.9053 9.81331"
                            stroke="#1A202C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.5 7.1875V15.8125"
                            stroke="#1A202C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.0832 11.5C21.0832 16.79 16.7898 21.0833 11.4998 21.0833C6.20984 21.0833 1.9165 16.79 1.9165 11.5C1.9165 6.20996 6.20984 1.91663 11.4998 1.91663"
                            stroke="#1A202C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.0833 5.74996V1.91663H17.25"
                            stroke="#1A202C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.2915 6.70829L21.0832 1.91663"
                            stroke="#1A202C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Transfer</span>
                      </button>
                    </div>
                  </div>
                  <div className="box spending-box">
                    <div className="header-container">
                      <h3 className="section-header">Spend by category</h3>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 10.4166C3.9 10.4166 3 11.3541 3 12.5C3 13.6458 3.9 14.5833 5 14.5833C6.1 14.5833 7 13.6458 7 12.5C7 11.3541 6.1 10.4166 5 10.4166Z"
                          stroke="#1A202C"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M19 10.4166C17.9 10.4166 17 11.3541 17 12.5C17 13.6458 17.9 14.5833 19 14.5833C20.1 14.5833 21 13.6458 21 12.5C21 11.3541 20.1 10.4166 19 10.4166Z"
                          stroke="#1A202C"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 10.4166C10.9 10.4166 10 11.3541 10 12.5C10 13.6458 10.9 14.5833 12 14.5833C13.1 14.5833 14 13.6458 14 12.5C14 11.3541 13.1 10.4166 12 10.4166Z"
                          stroke="#1A202C"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <div className="pie-chart">
                      <canvas
                        id="myChart2"
                        height="220px"
                        width="220px"
                      ></canvas>
                    </div>
                    <div className="overall-spending">
                      <h4>Overall Spending</h4>
                      <span>$19,760,00</span>
                    </div>
                    <div className="pie-chart__labels">
                      <div className="pie-chart__labels-item">
                        <div className="label">
                          <div className="label__color first"></div>
                          Employees Salary
                        </div>
                        $8.000.00
                      </div>
                      <div className="pie-chart__labels-item">
                        <div className="label">
                          <div className="label__color second"></div>
                          Material Supplies
                        </div>
                        $2.130.00
                      </div>
                      <div className="pie-chart__labels-item">
                        <div className="label">
                          <div className="label__color third"></div>
                          Company tax
                        </div>
                        $1.510.00
                      </div>
                      <div className="pie-chart__labels-item">
                        <div className="label">
                          <div className="label__color fourth"></div>
                          Maintenance system
                        </div>
                        $2.245.00
                      </div>
                      <div className="pie-chart__labels-item">
                        <div className="label">
                          <div className="label__color fifth"></div>
                          Development System
                        </div>
                        $4.385.00
                      </div>
                      <div className="pie-chart__labels-item">
                        <div className="label">
                          <div className="label__color sixth"></div>
                          Production Tools
                        </div>
                        $1.000.00
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </main>
          </div>
        </>
      )}
      <LoginModal
        handleClose={() => {
          setShowModal(false);
        }}
        show={showModal}
        setCorrect={setAuthState}
      />

      <DetailsModal
        data={candidate}
        show={showModalCandidate}
        handleClose={() => {
          setShowModalCandidate(false);
        }}
      />
    </>
  );
};

export default Dashboard;
