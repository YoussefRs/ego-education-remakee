import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logos/logo-ego-white.png";
import "./Footer.css";
import { useTranslation } from "react-i18next";


const Footer = () => {
  const {t} = useTranslation();
  const {about, contact, quickLinks} = t("footer")
  return (
    <>
      <section className="footer" id="footer">
        <div className="footer-contents">
          <div className="footer-col footer-col-1">
            <div className="col-title">
              <img src={logo} alt="ego-edication" />
            </div>
            <div className="col-contents">
              <p>
                <strong>{about?.st1} </strong> {about?.description1}
              </p>
              <p>
                <strong>{about?.st1} </strong> {about?.description2}
              </p>
            </div>
          </div>

          <div className="footer-col footer-col-2">
            <div className="col-title">
              <h3>{contact.title} </h3>
            </div>
            <div className="col-contents">
              <div className="contact-row">
                <span>{contact.addressLabel} </span>
                <span>
                  40, Villa Fairholme, Sir Augustus Bartolo Street, Ta’ Xbiex
                  XBX 1095, Malta
                </span>
              </div>
              {/* <div className="contact-row">
                <span>Phone</span>
                <span>+012 987 23456</span>
              </div> */}
              <div className="contact-row">
                <span>{contact.websiteLabel} </span>
                <a>www.ego-education.com</a>
              </div>
              <div className="contact-row">
                <span>{contact.emailLabel} </span>
                <span>info@ego-education.com</span>
              </div>
            </div>
          </div>

          <div className="footer-col footer-col-3">
            <div className="col-title">
              <h3>{quickLinks.title} </h3>
            </div>
            <div className="col-contents">
              <a href="/">{quickLinks.links.home} </a>
              <a href="/courses">{quickLinks.links.courses}</a>
              <a href="/elearn">{quickLinks.links.elearn}</a>
              <a href="/partners">{quickLinks.links.partners}</a>
              <a href="/confirm">{quickLinks.links.apply}</a>
              <a href="/institute">{quickLinks.links.about}</a>
              <a href="/student-office">{quickLinks.links.sf}</a>
              <a href="/policies-privacy">{quickLinks.links.policiesPrivacy}</a>
            </div>
          </div>

          {/* <div className="footer-col footer-col-4">
            <div className="col-title">
              <h3>Newsletter</h3>
            </div>
            <div className="col-contents">
              <form className="newsletter">
                <input type="email" placeholder="Your Email" />
                <button className="newsletter-btn btn" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div> */}
        </div>
        <div className="copy-rights">
          <p>All Rights Reserved, 2025</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
