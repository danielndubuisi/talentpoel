import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Select from "react-select";

import { Button } from "../components/Button";
import { errorMessage, successMessage } from "../utils/message.utils";
import { experience } from "../Data/talents"

import star from "../components/asset/star.svg";

import "./RegisterSection.css";
import { config } from "../app.config";

const InitialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  bio: "",
  linkedin: "",
  availability: false,
  experience: { value: "no", label: "No" },
};

const RegisterSection = () => {
  const [formDetails, setFormDetails] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(InitialFormData);

  const submitHandlerOne = (e) => {
    e.preventDefault();
    setFormDetails(false);
  };

  const submitHandlerTwo = (e) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      role: formData.role,
      bio: formData.bio,
      linkedin: formData.linkedin,
      availability: formData.availability,
      experience: formData.experience.value,
    };

    emailjs
      .send(
        `${config.BECOME_SERVICE_ID}`,
        `${config.BECOME_TEMPLATE_ID}`,
        templateParams,
        `${config.USER_ID}`
      )
      .then(
        function (response) {
          if (response.status === 200) {
            setLoading(false);
            successMessage("Successfully Submitted");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              role: "",
              bio: "",
              linkedin: "",
              availability: false,
              experience: { value: "no", label: "No" },
            });
            setFormDetails(true);
          }
        },
        function (error) {
          setLoading(false);
          errorMessage("Could not submit form");
        }
      );
  };

  return (
    <div className="register-section">
      <div className="reg-logo layout">
        <Link to="/" className="">
          <img src={`${config.IMAGE_BASE_URL}/v1688403601/logo-green_jmqctv.svg`} alt="vector-logo" id="reg-icon" />
        </Link>
      </div>
      <div className="reg-content-wrapper layout">
        <div className="reg-content">
          <div className="left">
            <div className="reg-img-con">
              <img src={`${config.IMAGE_BASE_URL}/v1688403530/become_pazhm1.jpg`} alt="register" />
            </div>
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
                    HMO coverage will be provided for the duration of the
                    talent's contract with our company.
                  </li>
                </span>
                <span>
                  <img src={star} alt="list-star" />
                  <li>
                    Our talent community members will receive career coaching
                    from our trusted learning partners.
                  </li>
                </span>
                <span>
                  <img src={star} alt="list-star" />
                  <li>
                    Eligibility for equity participation is extended to all
                    members of our talent community.
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
                      value={formData.firstName}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          firstName: event.currentTarget.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      name="Last"
                      placeholder="Last name"
                      required
                      value={formData.lastName}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          lastName: event.currentTarget.value,
                        })
                      }
                    />
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          email: event.currentTarget.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      name="LinkedIn"
                      placeholder="LinkedIn"
                      value={formData.linkedin}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          linkedin: event.currentTarget.value,
                        })
                      }
                    />
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
                    <div className="form-select-con">
                      <div className="select">
                        <Select
                          options={experience}
                          name="experience"
                          className="form-select"
                          id="experience"
                          value={formData.experience}
                          onChange={(selectedOption) => {
                            setFormData({
                              ...formData,
                              experience: selectedOption,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <label htmlFor="role">
                      Enter your non - technical role
                    </label>
                    <input
                      id="role"
                      name="Role"
                      type="text"
                      placeholder="Role"
                      required
                      value={formData.role}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          role: event.currentTarget.value,
                        })
                      }
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
                      value={formData.bio}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          bio: event.currentTarget.value,
                        })
                      }
                    />
                    <div className="available">
                      <div className="check-left">
                        <small>Availability (contract)</small>
                        <p className="check-text">
                          Check for contract availability
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        name="Availability"
                        id="availability"
                        checked={formData.availability}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            availability: !formData.availability,
                          })
                        }
                      />
                    </div>
                    <Button
                      type="submit"
                      buttonColor="green"
                      text="Submit"
                      display={true}
                      loading={loading}
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
