import { Link } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdOutlineSegment } from "react-icons/md";
import "./Navbar.css";
import { useState } from "react";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import logo from "../components/asset/Vector.png";
import { BsTelephoneFill } from "react-icons/bs";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#cdebf5" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <span>
                <img src={logo} alt="vector-logo" className="vect-logo" />
              </span>
              <span
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Talent<span style={{ fontWeight: 200 }}>poel</span>
              </span>
            </Link>
            <div className="menu-icon" onClick={() => setClick(!click)}>
              {click ? <FaRegTimesCircle /> : <MdOutlineSegment />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li
                className="nav-item"
                onClick={() => {
                  const anchor = document.querySelector("#howItWorks");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Our advantage
                </Link>
              </li>
              <li className="nav-line">
                <hr />
              </li>
              <li className="nav-item">
                <Link
                  to="/register"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  For talents
                </Link>
              </li>
              <li className="nav-line">
                <hr />
              </li>{" "}
              <li
                className="nav-item"
                onClick={() => {
                  const anchor = document.querySelector("#careers");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Careers
                </Link>
              </li>
              <li className="nav-line">
                <hr />
              </li>{" "}
              <li
                className="nav-item"
                onClick={() => {
                  const anchor = document.querySelector("#about");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  About us
                </Link>
              </li>
              <li className="nav-line">
                <hr />
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Pricing
                </Link>
              </li>
              <li className="nav-line">
                <hr />
              </li>
              <li
                className="nav-item contact"
                onClick={() => {
                  const anchor = document.querySelector("#contact");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  <span>
                    <BsTelephoneFill className="contact-icon" />
                  </span>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
