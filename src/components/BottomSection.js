import "./BottomSection.css";
import { Button } from "./Button";

const BottomSection = ({
  lightBg,
  headLine,
  headLine2,
  topLine,
  subHeadline,
  lightTextDesc,
  lightText,
  description,
  imgShow,
  img,
  alt,
  button,
  buttonColor,
  buttonStyle,
  buttonText,
  displayButton,
}) => {
  const buttonClickHandler = (e) => {
    e.preventDefault();
    window.location = "mailto:hello@talentpoel.com";
  };

  return (
    <>
      <div
        className={
          lightBg === "darker"
            ? "home__bottom-section darkerBg"
            : lightBg === "dark"
            ? "home__bottom-section darkBg"
            : "home__bottom-section"
        }
      >
        <div className="bottom-container">
          <div className="bottom-col">
            {headLine ? (
              <h2 className="headline">
                <span>{headLine}</span>
                <span>{headLine2}</span>
              </h2>
            ) : null}
            {topLine ? <h3 className="topline">{topLine}</h3> : null}
            {subHeadline ? (
              <h4 className={lightText ? "subhead" : "subhead dark"}>
                {subHeadline}
              </h4>
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
            <div className="home__bottom-img-wrapper">
              {imgShow ? (
                <>
                  <div className="bottom-img">
                    <img src={img} alt={alt} className="home__bottom-img" />
                  </div>
                </>
              ) : null}
            </div>
            {button && (
              <div className="bottom_button-container">
                <Button
                  type="submit"
                  buttonColor={buttonColor}
                  buttonStyle={buttonStyle}
                  text={buttonText}
                  onClick={buttonClickHandler}
                  display={displayButton}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomSection;
