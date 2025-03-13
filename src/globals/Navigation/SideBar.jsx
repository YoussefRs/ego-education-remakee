import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SideBar({ show, handleShow }) {
  const { t } = useTranslation();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const toggleDropdown1 = () => {
    setDropdownVisible1(!dropdownVisible1);
  };
  const toggleDropdown2 = () => {
    setDropdownVisible2(!dropdownVisible2);
  };

  const { home, courses, eLearning, partners, research, apply, institute, office } =
  t("home.nav");

  return (
    <menu
      id="menu"
      className="side_menu"
      style={{ right: show ? 0 : "-400px" }}
    >
      <div className="d-flex justify-content-end align-items-center w-100">
        <a
          className="close"
          onClick={() => {
            handleShow((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </a>
      </div>
      <br />
      
      <ul className="px-0" id="_mobile-nav">
        <li>
        <a href="/">
          {home}
          </a>
        </li>

        <li>
        <a href="/courses">
        {courses}
          </a>
        </li>
        {/* <li className="dropdown">
          <a href="/elearn">
          {eLearning}
          </a>
        </li> */}
        <li>
        <a href="/partners">
          {partners}
          </a>
        </li>
        <li>
        <a href="/research">
        {/* {research} */}
          </a>
        </li>
        <li>
        <a href="/confirm">
        {apply}
          </a>
        </li>
        <li>
        <a href="/institute">
          {institute}
          </a>
        </li>
        <li>
        <a href="/office">
        {office}
          </a>
        </li>
        {/* <li className="fixed_flex">
        <Link className="_btn btn_1 chat_popup">SignUp/LogIn</Link>
        <Link className="_btn btn_2 chat_popup">Admission</Link>
      </li> */}
      </ul>

      <ul className="px-0">
        <li>
          <Link>Events</Link>
        </li>

        <li className="dropdown">
          <a href="/policies-privacy">
            Policies & Privacy
          </a>
        </li>
        {/* <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li> */}
        {/* <li className="fixed_flex">
        <Link className="_btn btn_1 chat_popup">SignUp/LogIn</Link>
        <Link className="_btn btn_2 chat_popup">Admission</Link>
      </li> */}
      </ul>

    </menu>
  );
}

export default SideBar;
