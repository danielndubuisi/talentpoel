import React, { useState } from "react";
import "./Footer.css";
import axios from "axios";
import logo from "../components/asset/Vector.png";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { Button } from "./Button";

function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    const formElement = document.querySelector("form");
    const formData = new FormData(formElement);
    axios.post(
      "https://script.google.com/macros/s/AKfycbwjItjunfq9lxfR0icSEhJYyLdjLSrCSl0BrhU-d7CnJ2zZgkgnjybJ2VrgHTPG6e4c1A/exec",
      formData
    );
    setEmail("");
    setSubmitted(true);
    setMessage("Subscription successful!!");

    setTimeout(function () {
      setMessage(null);
    }, 3000);

    console.log(email);
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
                to="https://www.linkedin.com/company/talentpoel/?viewAsMember=true"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="social-icon-link"
                to="https://twitter.com/talentpoel"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                className="social-icon-link"
                to="https://web.facebook.com/talentpoel"
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
              <form onSubmit={submitHandler}>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  buttonColor="green"
                  display={true}
                  text={<BsSend />}
                />
              </form>
            </div>
            {submitted && (
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#1b9690",
                  fontStyle: "italic",
                  marginLeft: "25px",
                  marginTop: "5px",
                }}
              >
                {message}
              </span>
            )}
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
