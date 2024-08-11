import { useRef, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
// import emailjs from "@emailjs/browser";

import { errorMessage } from "../../utils/message.utils";
import { Button } from "../Button";
import { allTalent } from "../../Data/talents";
import axios from "axios";

import "./hire-a-talent.css";

import addIcon from "../asset/icons/add.svg";
import deleteIcon from "../asset/icons/delete.svg";
import logoWhite from "../asset/hire-a-talent/logo_white.svg";
import regModel from "../asset/features/frame_5.png";
// import { config } from "../../app.config";

import { socialDiscover } from "../../Data/talents";
import { SuccessModal } from "../modal/modal";

const InitialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  additionalRequest: "",
  talent: "",
  socialDiscover: "",
};

// Helper function to capitalize the first letter of each word
const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const HireATalent = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [dropDown, setDropDown] = useState([]);

  const [formData, setFormData] = useState(InitialFormData);

  const [isOpen, setIsOpen] = useState(false);
  const [otherOption, setOtherOption] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  const talentArray = (n) => {
    const arr = [];
    for (let i = 1; i < n + 2; i++) {
      arr.push(`${form.current[`Talents${i}`].value}`);
    }

    return arr;
  };


  const submitHandlerOne = async (e) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      roles: talentArray(dropDown.length),
      request: formData.additionalRequest,
      through:
        formData.socialDiscover.value === "Others"
          ? otherOption
          : formData.socialDiscover.value,
    };

    const options = {
      method: "POST",
      // url: "http://localhost:3000/api/submit-form",
      url: "https://talentpoel-server.vercel.app/api/submit-form",
      data: templateParams,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.request(options);
      // console.log("response from client--- ", response)
      if (response.status === 200) {
        console.log("response fro google sheet--", response);
        setLoading(false);

        setIsOpen(true);

        setOtherOption("");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          additionalRequest: "",
          talent: "",
          socialDiscover: "",
        });
        setDropDown([]);
      }
    } catch (error) {
      console.log("message not delivered", error.message);
      setLoading(false);
      errorMessage("Could not submit form");
    }
  };

  const addDropdown = () => {
    setDropDown([...dropDown, ""]);
  };

  const removeDropdown = (index) => {
    const updatedInputs = [...dropDown];
    updatedInputs.splice(index, 1);
    setDropDown(updatedInputs);
  };

  return (
    <div className="register-section">
      {isOpen && <SuccessModal closeModal={closeModal} isOpen={isOpen} />}
      <div className="reg-logo layout">
        <Link to="/" className=" ">
          {/* changed the image logo and alt attribute text 7-18-2024 */}
          <img src={logoWhite} alt="talentpoel-logo" id="reg-icon" />
        </Link>
      </div>
      <div className="reg-content-wrapper layout">
        <div className="reg-content">
          {/* changed text contents and image src attribute and added a ul tag 7-18-2024 */}
          <div className="left">
            <div className="reg-img-con">
              <img src={regModel} alt="register" />
            </div>
            <h3>
              Are you one of the best non-technical talents in Africa?{" "}
              <span>If so, we want you!</span>
            </h3>
            <p className="hire-para">
              We seek to attract the best talent, and to that end we offer a
              number of benefits to those who join our talent network:
            </p>
            <ul className="hire_list">
              <li className="hire_list-text">
                HMO coverage for the duration of their contract with us.
              </li>
              <li className="hire_list-text">
                Career coaching from our learning partners.
              </li>
              <li className="hire_list-text">
                We are one of the first companies in Africa to introduce the
                concept of "community equity". As a member of our company, you
                will have the opportunity to own a share of the company.
              </li>
            </ul>
            <small className="hire_add_text">
              We will also be offering additional benefits in the near future
            </small>
          </div>
          <div className="right">
            <div className="reg-form-container">
              <p className="form-desc">Looking for a talent, fill this out</p>
              <form className="form-one" onSubmit={submitHandlerOne} ref={form}>
                <div className="form_flex-input">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    required
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        firstName: capitalizeWords(event.currentTarget.value),
                      })
                    }
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    required
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        lastName: capitalizeWords(event.currentTarget.value),
                      })
                    }
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  required
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      email: event.currentTarget.value,
                    })
                  }
                />
                {/* added a new label and input 7-22-2024 */}
                <label>How did you discover us ?</label>
                <div>
                  <div className="form-select-con">
                    <div className="select">
                      <Select
                        value={formData.socialDiscover}
                        onChange={(selectedSocial) => {
                          setFormData({
                            ...formData,
                            socialDiscover: selectedSocial,
                          });
                          if (selectedSocial.value === "Others") {
                            setShowOtherInput(true);
                          } else {
                            setShowOtherInput(false);
                          }
                        }}
                        options={socialDiscover}
                        className="form-select"
                      />
                    </div>
                  </div>
                  {showOtherInput && (
                    <input
                      type="text"
                      value={otherOption}
                      onChange={(e) => {
                        const value = e.target.value;
                        const capitalizedValue = value.replace(/^./, (match) =>
                          match.toUpperCase()
                        );
                        setOtherOption(capitalizedValue);
                      }}
                      placeholder="Enter other option"
                      style={{ marginTop: "10px" }}
                    />
                  )}
                </div>

                <label>Select talent you’re hiring for </label>
                <div className="form-select-con">
                  <div className="select">
                    <Select
                      value={formData.talent}
                      onChange={(selectedOption) => {
                        setFormData({
                          ...formData,
                          talent: selectedOption,
                        });
                      }}
                      options={allTalent}
                      name="Talents1"
                      className="form-select"
                      id="Talents1"
                      defaultValue=""
                      isSearchable
                    />
                  </div>

                  <div onClick={addDropdown} className="action-select">
                    <img src={addIcon} alt="" />
                  </div>
                </div>

                {dropDown.map((input, index) => (
                  <div key={index} className="form-select-con">
                    <div className="select">
                      <Select
                        options={allTalent}
                        name={`Talents${index + 2}`}
                        className="form-select"
                        id={`Talents${index + 2}`}
                        defaultValue=""
                        isSearchable
                      />
                    </div>
                    <div onClick={removeDropdown} className="action-select">
                      <img src={deleteIcon} alt="" />
                    </div>
                  </div>
                ))}

                <label htmlFor="additional_request">
                  Not seeing what you are looking for ? Make a request.
                </label>
                <textarea
                  id="additional_request"
                  type="text"
                  name="additional_request"
                  placeholder="Request a Talent"
                  value={formData.additionalRequest}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      additionalRequest: event.target.value,
                    })
                  }
                />

                <Button
                  id="reg-buttonOne"
                  type="submit"
                  buttonColor="green"
                  text="Submit"
                  display={true}
                  loading={loading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireATalent;
