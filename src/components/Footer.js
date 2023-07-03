import React, { useState } from "react";
import "./Footer.css";
import axios from "axios";
import logo from "../components/asset/logo-white.svg";
import { Link } from "react-router-dom";
import { BsSend } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiSocialFacebookCircular } from "react-icons/ti";
import { Button } from "./Button";
import { config } from "../app.config";

function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formElement = document.querySelector("form");
    const formData = new FormData(formElement);
    axios.post(
      `${config.SHEET}`,
      formData
    );
    setEmail("");
    setSubmitted(true);
    setMessage("Subscription successful!!");

    setTimeout(function () {
      setMessage(null);
    }, 3000);
  };
  return (
    <div className="footer-container" id="contact">
      <div className="footer-links layout">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <span className="foot-logo">
              <img src={logo} alt="footer-logo" className="vect-logo" />
            </span>
            <p>8, Green Dover, Kent Delaware, USA</p>
            <div className="lang">
              <BiGlobe style={{ color: "#1B9690", fontSize: "24px" }} /> <span>English</span>
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
                <TiSocialLinkedinCircular style={{ color: "#1B9690", fontSize: "40px" }} />
              </Link>
              <Link
                className="social-icon-link"
                to="https://twitter.com/talentpoel"
                target="_blank"
                aria-label="Twitter"
              >
                <TiSocialTwitterCircular style={{ color: "#1B9690", fontSize: "40px" }} />
              </Link>
              <Link
                className="social-icon-link"
                to="https://web.facebook.com/talentpoel"
                target="_blank"
                aria-label="Facebook"
              >
                <TiSocialFacebookCircular style={{ color: "#1B9690", fontSize: "40px" }} />
              </Link>
            </div>
          </div>

          <div className="footer-link-items">
            <h4>Subscribe</h4>
            <p>Get newsletters.</p>
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
                  text={
                    <BsSend style={{ color: "#27D6CD", fontSize: "20px" }} />
                  }
                  display={true}
                  loading={false}
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
      <section className="footer-bottom layout">
        <p className="website-rights">
          &copy; {new Date().getFullYear()} Talentpoel. All rights reserved
        </p>
      </section>
    </div>
  );
}

export default Footer;
