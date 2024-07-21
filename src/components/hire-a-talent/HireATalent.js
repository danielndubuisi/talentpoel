import { useRef, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { errorMessage, successMessage } from "../../utils/message.utils";
import { Button } from "../Button";
import { allTalent } from "../../Data/talents";

import "./hire-a-talent.css";

import addIcon from "../asset/icons/add.svg";
import deleteIcon from "../asset/icons/delete.svg";
import logoWhite from "../asset/hire-a-talent/logo_white.svg"
import regModel from "../asset/features/frame_5.png"
import { config } from "../../app.config";

const InitialFormData = {
  companyName: "",
  companyEmail: "",
  additionalRequest: "",
  talent: "",
};

const HireATalent = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [dropDown, setDropDown] = useState([]);

  const [formData, setFormData] = useState(InitialFormData);

  const talentArray = (n) => {
    const arr = [];
    for (let i = 1; i < n + 2; i++) {
      arr.push(`${form.current[`Talents${i}`].value}`);
    }

    return arr;
  };

  const submitHandlerOne = (e) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      company_name: formData.companyName,
      email: formData.companyEmail,
      additional_request: formData.additionalRequest,
      talents: talentArray(dropDown.length),
    };

    emailjs
      .send(
        `${config.HIRE_SERVICE_ID}`,
        `${config.HIRE_TEMPLATE_ID}`,
        templateParams,
        `${config.USER_ID}`
      )
      .then(
        function (response) {
          if (response.status === 200) {
            setLoading(false);
            successMessage("Successfully Submitted");
            setFormData({
              companyName: "",
              companyEmail: "",
              additionalRequest: "",
              talent: "",
            });
            setDropDown([]);
          }
        },
        function (error) {
          setLoading(false);
          errorMessage("Could not submit form");
        }
      );
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
                <input
                  type="text"
                  name="company_name"
                  placeholder="Company Name"
                  value={formData.companyName}
                  required
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      companyName: event.currentTarget.value,
                    })
                  }
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Company Email"
                  value={formData.companyEmail}
                  required
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      companyEmail: event.currentTarget.value,
                    })
                  }
                />
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
