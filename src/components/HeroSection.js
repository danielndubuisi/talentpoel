import "./HeroSection.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import line from "./asset/line.svg";
import vector from "./asset/Vector.svg";

const HeroSection = ({
  id,
  lightBg,
  topLine,
  lightText,
  heading,
  lightTextDesc,
  subHeadline,
  smallHeadline,
  about,
  aboutText,
  about1,
  about2,
  about3,
  description,
  button,
  img1,
  img2,
  imgDouble,
  alt,
  imgStart,
  imgEmbed,
  floatImg,
  imgF,
  extraText,
  extraTextValue,
  buttonColorOne,
  buttonColorTwo,
  buttonTextOne,
  buttonTextTwo,
  displayButtonTwo,
  displayButtonOne,
}) => {
  const buttonOneClickHandler = (e) => {
    e.preventDefault();
    window.location = "mailto:hello@talentpoel.com";
  };

  return (
    <>
      <div
        id="top"
        className={
          lightBg === "grey"
            ? "home__hero-section greyBg"
            : lightBg === "dark"
            ? "home__hero-section darkBg"
            : "home__hero-section"
        }
      >
        <div className="container" id={id}>
          <div
            className={
              imgStart === "start" ? "row home__hero-row" : "home__hero-row"
            }
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className={topLine ? "top-line" : "none"}>{topLine}</div>
                <h1 className={heading ? "heading" : "none"}>
                  Scale your business with the best
                  <span className="greenhead"> non-technical talent </span>
                  in Africa
                </h1>
                <h2 className={lightText ? "sub-heading" : "sub-heading dark"}>
                  {subHeadline}
                </h2>
                {aboutText ? (
                  <>
                    <div className="about-section">
                      <h4
                        className={
                          aboutText ? "small-heading" : "small-heading dark"
                        }
                      >
                        <span>
                          <img src={line} alt="hr-line" />
                        </span>{" "}
                        {smallHeadline}
                      </h4>
                      {about ? (
                        <>
                          <p className="home__hero-subtitle light">{about1}</p>
                          <p className="home__hero-subtitle light">{about2}</p>
                          <div className="vect-img">
                            <img src={vector} alt="about-img" />
                          </div>
                          <h5>Our Vision</h5>
                          <p className="home__hero-subtitle light">{about3}</p>
                        </>
                      ) : null}
                    </div>
                  </>
                ) : null}
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle light"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                {button && (
                  <div className="button-container">
                    <Button
                      type="submit"
                      buttonColor={buttonColorOne}
                      text={buttonTextOne}
                      onClick={buttonOneClickHandler}
                      display={displayButtonOne}
                    />
                    <Link to="/register">
                      <Button
                        type="submit"
                        buttonColor={buttonColorTwo}
                        text={buttonTextTwo}
                        display={displayButtonTwo}
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                {imgDouble ? (
                  <>
                    <div className="main_hero-img">
                      <img
                        src={img1}
                        alt={alt}
                        className="home__hero-img main"
                      />
                      {extraText ? (
                        <span className="extra-text">{extraTextValue}</span>
                      ) : null}
                    </div>
                    <div className="sub_hero-img">
                      <img
                        src={img2}
                        alt={alt}
                        className="home__hero-img sub"
                      />
                    </div>
                  </>
                ) : (
                  <div className="solo-container">
                    <img src={img1} alt={alt} className="home__hero-img solo" />
                    {extraText ? (
                      <span className="extra-text">{extraTextValue}</span>
                    ) : null}
                  </div>
                )}
                {floatImg ? (
                  <img
                    src={imgF}
                    alt="floated-img"
                    className="home__hero-floated-img"
                  />
                ) : null}
                <div className="home__img-embed-container">
                  {imgEmbed ? <div>Nothing to see</div> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
