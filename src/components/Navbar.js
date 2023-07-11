import { Link, useLocation } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { useState } from "react";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import logo from "../components/asset/logo-white.svg";
import { BsTelephoneFill } from "react-icons/bs";
import { generalRoute } from "../Data/generalRoutes";
import { Button } from "./Button";

import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const router = useLocation();

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container layout">
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
            <ul className={click ? "nav-menu active " : "nav-menu"}>
              <li
                className={
                  router.hash === "#about" ? "nav-item active-link" : "nav-item"
                }
              >
                <HashLink
                  to="/#about"
                  className={
                    router.hash === "#about"
                      ? "nav-links active-link-text"
                      : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </HashLink>
              </li>
              <li
                className={
                  router.hash === "#advantage"
                    ? "nav-item active-link"
                    : "nav-item"
                }
              >
                <HashLink
                  to="/#advantage"
                  className={
                    router.hash === "#advantage"
                      ? "nav-links active-link-text"
                      : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  Our Advantage
                </HashLink>
              </li>
              <li
                className={
                  router.pathname === "/discover-talents"
                    ? "nav-item active-link"
                    : "nav-item"
                }
              >
                <Link
                  to={generalRoute.discoverTalents}
                  className={
                    router.pathname === "/discover-talents"
                      ? "nav-links active-link-text"
                      : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  Discover talents
                </Link>
              </li>
              <li className="nav-item2">
                <div className="nav-inline nav-links">
                  <span>Careers at Talentpoel </span> <small>(coming soon)</small>
                </div>
              </li>

              <li className="display nav-item-btn">
                <Link to={generalRoute.becomeATalent}>
                  <Button
                    buttonColor="green"
                    text="Become a talent"
                    display={true}
                    loading={false}
                  />
                </Link>
              </li>
              <li
                className={
                  router.hash === "#contact"
                    ? "nav-item display active-link"
                    : "nav-item display"
                }
              >
                <HashLink
                  to="/#contact"
                  className={
                    router.hash === "#contact"
                      ? "nav-links active-link-text"
                      : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  <span>
                    <BsTelephoneFill className="contact-icon" />
                  </span>
                  Contact us
                </HashLink>
              </li>
            </ul>
            <ul className={click ? "nav-menu2 active" : "nav-menu"}>
              <li>
                <Link to={generalRoute.becomeATalent}>
                  <Button
                    buttonColor="green"
                    text="Become a talent"
                    display={true}
                    loading={false}
                  />
                </Link>
              </li>
              <li
                className={
                  router.hash === "#contact"
                    ? "nav-item active-link contact"
                    : "nav-item"
                }
              >
                <HashLink
                  to="/#contact"
                  className={
                    router.hash === "#contact"
                      ? "nav-links active-link-text"
                      : "nav-links"
                  }
                  onClick={closeMobileMenu}
                >
                  <span>
                    <BsTelephoneFill className="contact-icon" />
                  </span>
                  Contact us
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
