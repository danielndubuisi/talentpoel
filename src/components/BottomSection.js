import "./BottomSection.css";
import FounderDetails from "../components/FounderDetails";
import GridText from "../components/GridText";
import { Button } from "./Button";
import { generalRoute } from "../Data/generalRoutes";
import { Link } from "react-router-dom";
import { config } from "../app.config";

const BottomSection = ({
  id,
  paraId,
  lightBg,
  headLine,
  headLine2,
  topLine,
  subHeadline,
  lightTextDesc,
  lightText,
  description,
  gridText,
  imgShow,
  button,
  buttonColor,
  buttonStyle,
  buttonText,
  displayButton,
}) => {
  return (
    <>
      <div
        className={
          lightBg === "darker"
            ? "home__bottom-section darkerBg"
            : lightBg === "dark"
            ? "home__bottom-section darkBg"
            : lightBg === "top"
            ? "home__bottom-section-quality"
            : "home__bottom-section"
        }
      >
        <div className="bottom-container layout">
          <div className="bottom-col" id={id}>
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
            {gridText ? <GridText /> : null}
            <p
              id={paraId}
              className={
                lightTextDesc
                  ? "home__hero-subtitle light"
                  : "home__hero-subtitle dark"
              }
            >
              {description}
            </p>
            <div className="home__bottom-img-wrapper">
              {imgShow === "grid" ? (
                <div className="bottom-img-con">
                  <img
                    className="hero-des-img"
                    src={`${config.IMAGE_BASE_URL}/v1688477745/grid_yfxprb.webp`}
                    alt=""
                  />
                  <img
                    className="hero-mobile-img"
                    src={`${config.IMAGE_BASE_URL}/v1688477729/grid-mobile_wcsfrp.webp`}
                    alt=""
                  />
                </div>
              ) : imgShow === "row" ? (
                <FounderDetails />
              ) : null}
            </div>
            {button && (
              <div className="bottom_button-container">
                <Link to={generalRoute.hireATalent}><Button
                  buttonColor={buttonColor}
                  buttonStyle={buttonStyle}
                  text={buttonText}
                  display={displayButton}
                  icon
                /></Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomSection;
