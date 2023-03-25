import React from "react";
import "./Footer.css";
import logo from "../components/asset/Vector.png";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { Button } from "./Button";

function Footer() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="footer-container" id="contact">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <span className="foot-logo">
              <img src={logo} alt="footer-logo" className="foot-logo" />
              <h3>
                Talent<small>poel</small>
              </h3>
            </span>
            <p>8, Green Dover, Kent Delaware, USA</p>
            <div className="lang">
              <GrLanguage /> <span>English</span>
            </div>
          </div>

          <div className="footer-link-items">
            <h4>Connect with us</h4>
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
            <h4>Subscribe</h4>
            <small>Get newsletters.</small>
            <div className="form-container">
              <form onSubmit={onSubmit}>
                <input type="email" placeholder="Email" required />
                <Button
                  type="submit"
                  buttonColor="green"
                  display={true}
                  text={<BsSend />}
                />
              </form>
            </div>
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
