import "./RegisterSection.css";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import logo from "../components/asset/Vector.png";
import star from "../components/asset/star.svg";
import { useState } from "react";
import axios from "axios";

const RegisterSection = ({ imgSrc }) => {
  const [formDetails, setFormDetails] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState(null);

  const submitHandlerOne = (e) => {
    e.preventDefault();
    setFormDetails(false);
    const formElement = document.querySelector("form");
    const formData = new FormData(formElement);
    axios.post(
      "https://script.google.com/macros/s/AKfycbwjItjunfq9lxfR0icSEhJYyLdjLSrCSl0BrhU-d7CnJ2zZgkgnjybJ2VrgHTPG6e4c1A/exec",
      formData
    );
  };

  const submitHandlerTwo = (e) => {
    e.preventDefault();
    setFormDetails(true);
    setSubmitted(true);
    setMessage("Application submitted!");

    setTimeout(function () {
      setMessage(null);
    }, 3000);
  };
  return (
    <div className="register-section">
      <div className="reg-logo">
        <Link to="/" className="navbar-logo">
          <span>
            <img src={logo} alt="vector-logo" className="vect-logo" />
          </span>
          <span>
            Talent<span style={{ fontWeight: 200 }}>poel</span>
          </span>
        </Link>
      </div>
      <div className="reg-content-wrapper">
        <div className="reg-content">
          <div className="left">
            <img src={imgSrc} alt="register" />
            <h3>
              Are you one of the best non-technical talents in Africa?{" "}
              <span>If so, we want you!</span>{" "}
            </h3>
            <p className="home__hero-subtitle light" id="reg-para">
              We seek to attract the best talent, and to that end we offer a
              number of benefits to those who join our talent network:
            </p>
            <div className="reg-list">
              <ul>
                <span>
                  <img src={star} alt="list-star" />
                  <li>
                    HMO coverage for the duration of their contract with us.
                  </li>
                </span>
                <span>
                  <img src={star} alt="list-star" />
                  <li>Career coaching from our learning partners.</li>
                </span>
                <span>
                  <img src={star} alt="list-star" />

                  <li>
                    We are one of the first companies in Africa to introduce the
                    concept of "community equity". As a member of our company,
                    you will have the opportunity to own a share of the company.
                  </li>
                </span>
              </ul>
              <small>
                We will also be offering additional benefits in the near future
              </small>
            </div>
          </div>
          <div className="right">
            <div className="reg-form-container">
              <p className="form-desc">
                Fill out this application, become a talent
              </p>
              {formDetails ? (
                <>
                  <form className="form-one" onSubmit={submitHandlerOne}>
                    <input
                      type="text"
                      name="First"
                      placeholder="First name"
                      required
                    />
                    <input
                      type="text"
                      name="Last"
                      placeholder="Last name"
                      required
                    />
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email"
                      required
                    />
                    <input type="text" name="LinkedIn" placeholder="LinkedIn" />
                    <Button
                      id="reg-buttonOne"
                      type="submit"
                      buttonColor="green"
                      text="Continue"
                      display={true}
                    />
                  </form>
                </>
              ) : (
                <div>
                  <form className="form-two" onSubmit={submitHandlerTwo}>
                    <label htmlFor="exp">
                      Do you have up to 3-5 years of experience as a
                      non-technical professional?
                    </label>
                    <select name="Experience" id="exp">
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                    <label htmlFor="role">
                      Enter your non - technical role
                    </label>
                    <input
                      id="role"
                      name="Role"
                      type="text"
                      placeholder="Role"
                      required
                    />
                    <label htmlFor="bio">
                      Enter a short bio (one sentence)
                    </label>
                    <input
                      id="bio"
                      type="text"
                      name="Bio"
                      placeholder="Bio"
                      required
                    />
                    <small>Availability (part-time or full-time)</small>
                    <Button
                      type="submit"
                      buttonColor="green"
                      text="Submit"
                      display={true}
                    />
                  </form>
                </div>
              )}
              {submitted && (
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    color: "green",
                    fontStyle: "italic",
                    marginLeft: "25px",
                    marginTop: "-30px",
                  }}
                >
                  {message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
