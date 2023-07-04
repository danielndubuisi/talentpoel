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
import logo from "../asset/logo-green.svg"
import formimg from "../asset/form-images/hire.webp"
import { config } from "../../app.config";

const InitialFormData = {
  fullName: "",
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
      full_name: formData.fullName,
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
              fullName: "",
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
          <img src={logo} alt="vector-logo" id="reg-icon" />
        </Link>
      </div>
      <div className="reg-content-wrapper layout">
        <div className="reg-content">
          <div className="left">
            <div className="reg-img-con">
              <img src={formimg} alt="register" />
            </div>
            <h3>
              We understand the challenges associated with finding exceptional
              talent in Africa.
            </h3>
            <p className="hire-para">
              That's why we are here to take the burden off your shoulders. Our
              proven vetting process ensures that you have access to the most
              qualified professionals who can help your company thrive. Fill out
              the form to request any talent you need.
            </p>
          </div>
          <div className="right">
            <div className="reg-form-container">
              <p className="form-desc">
                Looking for a talent, fill this out
              </p>
              <form className="form-one" onSubmit={submitHandlerOne} ref={form}>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  value={formData.fullName}
                  required
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      fullName: event.currentTarget.value,
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
