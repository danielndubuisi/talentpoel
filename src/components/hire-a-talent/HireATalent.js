import { Link } from "react-router-dom";
import logo from "../asset/logo-green.svg";
import star from "../asset/star.svg";
import { useState } from "react";
import axios from "axios";
import { Button } from "../Button";
import { errorMessage, successMessage } from "../../utils/message.utils";
import "./hire-a-talent.css";

import addIcon from "../asset/icons/add.svg";
import deleteIcon from "../asset/icons/delete.svg";

const InitialFormData = {
  fullName: "",
  companyEmail: "",
  additionalRequest: "",
};

const HireATalent = () => {
  const [loading, setLoading] = useState(false);
  const [dropDown, setDropDown] = useState([]);

  const [formData, setFormData] = useState(InitialFormData);
  const formElementOne = document.querySelector(".form-one");

  const submitHandlerOne = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(formElementOne);

    try {
      axios.post(
        "https://script.google.com/macros/s/AKfycbx1XM9X1c0ztgiS_ktMI83luz53TdWRxdvsVP9vZqosh9kLrNpZ7R8vPtoqLUkNLpGy/exec",
        formData
      );
      setLoading(false);
      successMessage("Successfully Submitted");
      setFormData({ fullName: "", companyEmail: "", additionalRequest: "" });
      setDropDown([])
    } catch (e) {
      errorMessage("Could not submit form");
      setLoading(false);
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
      <div className="reg-logo layout">
        <Link to="/" className=" ">
          <img src={logo} alt="vector-logo" id="reg-icon" />
        </Link>
      </div>
      <div className="reg-content-wrapper layout">
        <div className="reg-content">
          <div className="left">
            <img
              src="https://res.cloudinary.com/dcp6fbxa9/image/upload/v1687267567/Frame_280_wv2tqw.svg"
              alt="register"
            />
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
              <form className="form-one" onSubmit={submitHandlerOne}>
                <input
                  type="text"
                  name="Full Name"
                  placeholder="Full name"
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
                  name="Company Email"
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
                  <div class="select">
                    <select
                      name="Talents1"
                      defaultValue="Community manager"
                      className="form-select"
                    >
                      <option value="Community manager" className="my-opt">
                        Community manager
                      </option>
                      <option value="Yiminghe">Yiminghe</option>
                    </select>
                  </div>
                  <div onClick={addDropdown} className="action-select">
                    <img src={addIcon} alt="" />
                  </div>
                </div>

                {dropDown.map((input, index) => (
                  <div key={index} className="form-select-con">
                    <div class="select">
                      <select
                        name={`Talents${index + 2}`}
                        defaultValue="Digital Marketer"
                        className="form-select"
                      >
                        <option value="Digital Marketer">
                          Digital Marketer
                        </option>
                        <option value="Yiminghe">Yiminghe</option>
                      </select>
                    </div>
                    <div onClick={removeDropdown} className="action-select">
                      <img src={deleteIcon} alt="" />
                    </div>
                  </div>
                ))}

                <label htmlFor="Additional Request">
                  Not seeing what you are looking for ? Make;
                </label>
                <textarea
                  id="Additional Request"
                  type="text"
                  name="Additional Request"
                  placeholder="Additional request"
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
