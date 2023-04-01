import "./RegisterSection.css";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import logo from "../components/asset/Vector.png";
import star from "../components/asset/star.svg";
import { useState } from "react";

const RegisterSection = ({ imgSrc }) => {
  const [formDetails, setFormDetails] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    setFormDetails(false);
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
                  <form className="form-one" onSubmit={submitHandler}>
                    <input type="text" placeholder="First name" required />
                    <input type="text" placeholder="Last name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="LinkedIn" />
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
                  <form className="form-two" onSubmit={submitHandler}>
                    <label htmlFor="exp">
                      Do you have up to 3-5 years of experience as a
                      non-technical professional?
                    </label>
                    <select name="exp" id="exp">
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                    <label htmlFor="role">
                      Enter your non - technical role
                    </label>
                    <input id="role" type="text" placeholder="Role" required />
                    <label htmlFor="bio">
                      Enter a short bio (one sentence)
                    </label>
                    <input id="bio" type="text" placeholder="Bio" required />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
