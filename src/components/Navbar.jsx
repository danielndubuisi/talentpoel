import { Link } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { useState } from "react";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import logo from "../components/asset/logo-white.svg";
import { BsTelephoneFill } from "react-icons/bs";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <span
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <img src={logo} alt="vector-logo" className="vect-logo" />
              </span>
            </Link>
            <div className="menu-icon" onClick={() => setClick(!click)}>
              {click ? <FaRegTimesCircle /> : <GiHamburgerMenu />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li
                className="nav-item"
                onClick={() => {
                  setClick(false);
                  const anchor = document.querySelector("#advantage");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "end",
                  });
                }}
              >
                <Link
                  to="/"
                  className="nav-links"
                  // onClick={closeMobileMenu}
                >
                  Our Advantage
                </Link>
              </li>
              <li className="nav-line">
                <hr />
              </li>
              <li className="nav-item" onClick={window.scrollTo(0, 0)}>
                <Link
                  to="/register"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  For Talents
                </Link>
              </li>
              <li className="nav-line">
                <hr />
              </li>{" "}
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  <div className="nav-inline">
                    <span> Careers</span> <small>(coming soon)</small>
                  </div>
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
                    inline: "end",
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
              <li
                className="nav-item"
                onClick={() => {
                  const anchor = document.querySelector("#pricing");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "end",
                  });
                }}
              >
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
