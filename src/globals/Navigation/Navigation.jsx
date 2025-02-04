import React, { useEffect, useRef, useState } from "react";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/Logos/logo-ego-white.png";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navigation({ show, backgroundColor }) {
  const navItems = [
    { key: "home", link: "/" },
    { key: "courses", link: "/courses" },
    { key: "eLearning", link: "/elearn" },
    { key: "partners", link: "/partners" },
    { key: "research", link: "/research" },
    { key: "apply", link: "/confirm" },
    { key: "institute", link: "/institute" },
    { key: "office", link: "/student-office" },
  ];

  const navRef = useRef(null);
  const [activeLink, setActiveLink] = useState("home");
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        navRef.current &&
        (document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80)
      ) {
        navRef.current.classList.add("fixed_nav");
      } else if (navRef.current) {
        navRef.current.classList.remove("fixed_nav");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://icons.iconarchive.com/icons/wikipedia/flags/48/GB-United-Kingdom-Flag-icon.png",
    },
    {
      code: "br",
      name: "Español",
      flag: "https://cdn.parcellab.com/img/flags/br.png",
    },
    {
      code: "it",
      name: "Italiano",
      flag: "https://cdn.parcellab.com/img/flags/it.png",
    },
  ];

  // Load selected language from localStorage or use default
  const [selectedLang, setSelectedLang] = useState(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    return savedLang ? JSON.parse(savedLang) : languages[0]; // Default to English
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Apply the saved language on mount
  useEffect(() => {
    i18n.changeLanguage(selectedLang.code);
  }, [selectedLang]);

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
    localStorage.setItem("selectedLanguage", JSON.stringify(lang));
    i18n.changeLanguage(lang.code);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} style={{ backgroundColor }}>
      <section className="flex_content">
        <figure className="logo fixed_flex">
          <Link to={"/"} className="p-0">
            <img src={Logo} alt="white logo" />
          </Link>
        </figure>
      </section>
      <section className="flex_content nav_content">
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.link}
            className={activeLink === item.key ? "active" : ""}
            onClick={() => handleLinkClick(item.key)}
            style={{ color: "#fff" }}
          >
            {t(`home.nav.${item.key}`)}
          </Link>
        ))}
      </section>
      <section className="flex_content d-flex alingn-items-center justify-content-between">
        <div id="mini-nav" ref={dropdownRef}>
          <div className="_dropdown pull-right">
            <button
              onClick={toggleDropdown}
              className="dropdown-toggle"
              style={{
                background: "transparent",
                padding: "6px 5px",
                border: "2px solid white",
                width: "100%",
              }}
            >
              <span id="current-lang">
                <img
                  src={selectedLang.flag}
                  className="flag"
                  alt={`Flag representing ${selectedLang.name}`}
                />
              </span>
              <span className="caret"></span>
            </button>

            {isDropdownOpen && (
              <ul
                id="lang-switcher-list"
                className="_dropdown-menu"
                style={{ paddingLeft: 0 }}
              >
                {languages
                  .filter((lang) => lang.code !== selectedLang.code) // Filter out the currently selected language
                  .map((lang) => (
                    <li key={lang.code}>
                      <a onClick={() => handleLangChange(lang)}>
                        <img
                          src={lang.flag}
                          className="flag"
                          alt={`Flag representing ${lang.name}`}
                        />
                      </a>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
        <a
          className="ham"
          href="https://ego-education.ispringlearn.eu/login"
          target="_blank"
        >
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a
          className="ham"
          id="ham__"
          onClick={() => {
            show((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </a>
      </section>
    </nav>
  );
}

export default Navigation;
