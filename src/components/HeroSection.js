import "./HeroSection.css";
// import { Link } from "react-router-dom";
import { Button } from "./Button";

const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  heading,
  lightTextDesc,
  subHeadline,
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

  const buttonTwoClickHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        id="top"
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
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
                <h4 className={lightText ? "sub-heading" : "sub-heading dark"}>
                  {subHeadline}
                </h4>
                <p
                  className={
                    lightTextDesc ? "desc" : "home__hero-subtitle dark"
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
                    <Button
                      type="submit"
                      buttonColor={buttonColorTwo}
                      text={buttonTextTwo}
                      onClick={buttonTwoClickHandler}
                      display={displayButtonTwo}
                    />
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
                        <span className="extra-text">
                          Quality candidates for Quality companies
                        </span>
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
                  <img src={img1} alt={alt} className="home__hero-img" />
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
