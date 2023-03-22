import React from "react";
import "./Footer.css";
import logo from "../components/asset/Vector.png";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

function Footer() {
  return (
    <div className="footer-container" id="contact">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <span>
              <img src={logo} alt="footer-logo" className="foot-logo" />
            </span>
            <h3>Talentpoel</h3>
            <small>8, Green Dover, Kent Delaware, USA</small>
            <GrLanguage /> English
          </div>

          <div className="footer-link-items">
            <h2>Connect with us</h2>
            <p>hello@talentpoel.com</p>
            <p>+1 425 777 7978</p>
            <div className="social-icons">
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
            </div>
          </div>

          <div className="footer-link-items">
            <h3>Subscribe</h3>
            <small>Get newsletters.</small>
          </div>
        </div>
      </div>
      <section className="footer-bottom">
        <div className="bottom-wrap">
          <small className="website-rights">
            &copy; {new Date().getFullYear()} Talentpoel. All rights reserved
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
