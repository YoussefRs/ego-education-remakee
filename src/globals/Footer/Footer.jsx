import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logos/logo-ego-white.png";
import "./Footer.css";

const Footer = () => {
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
                <strong>eGO Education</strong> (formerly International
                E-Learning Institute Ltd) is a company established in 2017 in
                Malta, by deed C83113.
              </p>
              <p>
                <strong>eGO Education</strong> has been accredited by the Malta
                Further & Higher Education Authority (MFHEA) as a Higher
                Education Institute in 2023 with licence n. 2023-015.
              </p>
            </div>
          </div>

          <div className="footer-col footer-col-2">
            <div className="col-title">
              <h3>Contact</h3>
            </div>
            <div className="col-contents">
              <div className="contact-row">
                <span>Address</span>
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
                <span>Website</span>
                <a>www.ego-education.com</a>
              </div>
              <div className="contact-row">
                <span>Email</span>
                <span>info@ego-education.com</span>
              </div>
            </div>
          </div>

          <div className="footer-col footer-col-3">
            <div className="col-title">
              <h3>Quick Links</h3>
            </div>
            <div className="col-contents">
              <a href="/">Home</a>
              <a href="/courses">Courses</a>
              <a href="/elearn">eLearn</a>
              <a href="/partners">Partners</a>
              <a href="/confirm">Apply</a>
              <a href="/about">About Us</a>
              <a href="/policy">Policy & Privacy</a>
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
          <p>All Rights Reserved, 2024</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
