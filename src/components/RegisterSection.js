import { Link } from "react-router-dom";
import { useState } from "react";
// import emailjs from "@emailjs/browser";
import Select, { components } from "react-select";
import { countries, getCountryCode, getCountryData } from "countries-list";
import ReactCountryFlag from "react-country-flag";
import { Button } from "../components/Button";
import { errorMessage } from "../utils/message.utils";
import { experience } from "../Data/talents";
import logoWhite from "../../src/components/asset/hire-a-talent/logo_white.svg";
import regModel from "../../src/components/asset/form-images/become3.png";
import axios from "axios";

import star from "./asset/star.svg";

import "./RegisterSection.css";
import { SuccessModal } from "./modal/modal";
import { socialDiscover } from "../Data/talents";
// import { config } from "../app.config";

const InitialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  bio: "",
  linkedin: "",
  availability: false,
  experience: { value: "no", label: "No" },
  socialDiscover: "",
};

// Helper function to capitalize the first letter of each word
const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const RegisterSection = () => {
  const [formDetails, setFormDetails] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(InitialFormData);
  const [country, setCountry] = useState({ value: "NG", label: "Nigeria" });
  const [isOpen, setIsOpen] = useState(false);

  const submitHandlerOne = (e) => {
    e.preventDefault();
    setFormDetails(false);
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  const Control = ({ children, ...props }) => {
    return (
      <components.Control {...props}>
        <ReactCountryFlag
          className="react-country-flag"
          countryCode={country ? country.value : ""}
          svg
          cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
          cdnSuffix="svg"
          title={country ? country.value : ""}
        />
        {children}
      </components.Control>
    );
  };

  const asCountries = Object.keys(countries)
    .filter((countryCode) => countries[countryCode].continent === "AF")
    .reduce((result, countryCode) => {
      result[countryCode] = countries[countryCode];
      return result;
    }, {});

  const submitHandlerTwo = (e) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      role: formData.role,
      country: getCountryData(country.value).name,
      bio: formData.bio,
      linkedin: formData.linkedin,
      availability: formData.availability,
      experience: formData.experience.value,
      through: formData.socialDiscover.value,
    };

    const options = {
      method: "POST",
      // url: "http://localhost:3000/api/become-a-talent",
      url: "https://talentpoel-server.vercel.app/api/become-a-talent",
      data: templateParams,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.request(options).then(
      function (response) {
        if (response.status === 200) {
          setLoading(false);
          // successMessage("Successfully Submitted");
          setIsOpen(true);
          console.log(response);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            role: "",
            bio: "",
            linkedin: "",
            availability: false,
            experience: { value: "no", label: "No" },
            socialDiscover: "",
          });
          setCountry({ value: "NG", label: "Nigeria" });
          setFormDetails(true);
        }
      },
      function (error) {
        console.log("message not delivered", error.message);
        setLoading(false);
        errorMessage("Could not submit form");
      }
    );
  };

  const changeHandler = (newValue) => {
    setCountry(newValue);
  };

  return (
    <div className="register-section">
      {isOpen && <SuccessModal closeModal={closeModal} isOpen={isOpen} />}
      <div className="reg-logo layout">
        <Link to="/" className="">
          <img src={logoWhite} alt="vector-logo" id="reg-icon" />
        </Link>
      </div>
      <div className="reg-content-wrapper layout">
        <div className="reg-content">
          <div className="left">
            <div className="reg-img-con">
              <img src={regModel} alt="register" />
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
                {/* The form is currently unavailable. Please check back later. */}
              </p>
              {formDetails ? (
                <>
                  <form className="form-one" onSubmit={submitHandlerOne}>
                    <div className="form_flex-input">
                      <input
                        type="text"
                        name="First"
                        placeholder="First name"
                        required
                        value={formData.firstName}
                        // disabled
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            firstName: capitalizeWords(
                              event.currentTarget.value
                            ),
                          })
                        }
                      />
                      <input
                        type="text"
                        name="Last"
                        // disabled
                        placeholder="Last name"
                        required
                        value={formData.lastName}
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            lastName: capitalizeWords(
                              event.currentTarget.value
                            ),
                          })
                        }
                      />
                    </div>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email"
                      required
                      // disabled
                      value={formData.email}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          email: event.currentTarget.value,
                        })
                      }
                    />
                    <Select
                      components={{ Control }}
                      isSearchable
                      className="flag-select"
                      options={Object.keys(asCountries).map((countryCode) => ({
                        value: getCountryCode(countries[countryCode].name),
                        label: countries[countryCode].name,
                      }))}
                      value={country}
                      // isDisabled
                      onChange={changeHandler}
                    />
                    <input
                      type="text"
                      name="LinkedIn"
                      placeholder="LinkedIn"
                      value={formData.linkedin}
                      // disabled
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
                      // text="Form Unavailable"
                      text="Continue"
                      disabled={false}
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

                    {/* added a new label and input 8-05-2024 */}
                    <label>how did you discover us ?</label>
                    <div className="form-select-con">
                      <div className="select">
                        <Select
                          value={formData.socialDiscover}
                          onChange={(selectedSocial) => {
                            setFormData({
                              ...formData,
                              socialDiscover: selectedSocial,
                            });
                          }}
                          options={socialDiscover}
                          className="form-select"
                        />
                      </div>
                    </div>

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
