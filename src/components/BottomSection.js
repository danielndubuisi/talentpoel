import "./BottomSection.css";
import FounderDetails from "../components/FounderDetails";
import GridText from "../components/GridText";
import { Button } from "./Button";
import { generalRoute } from "../Data/generalRoutes";
import { Link } from "react-router-dom";
import frameOne from "./asset/features/frame_1.png"
import frameTwo from "./asset/features/frame_2.png"
import frameThree from "./asset/features/frame_3.png"
import frameFour from "./asset/features/frame_4.png"
import frameFive from "./asset/features/frame_5.png"
import cursorIcon from "./asset/features/carbon_cursor-2.svg"
import earthIcon from "./asset/features/carbon_earth-europe-africa.svg"
// import { config } from "../app.config";

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
                <div className="bottom-img-con grid_wrapper">
                  <div className="flex_container flex_wrap">
                    <div className="flex_container flex_col flex_width-one">
                      <div>
                        <img src={frameOne} alt="feature one" />
                      </div>
                      <div className="flex_frame_one">
                        <div className="flex_frame_one-title">
                          <p>Talents currently from:</p>
                          <h4>
                            Nigeria <br /> Kenya <br /> Zambia and growing
                          </h4>
                        </div>
                        <img
                          src={earthIcon}
                          alt="cursor icon"
                          className="flex_frame_one-icon"
                        />
                      </div>
                    </div>
                    <div className="flex_width-two">
                      <img src={frameTwo} alt="feature two" />
                    </div>
                  </div>
                  <div className="flex_container flex_wrap">
                    <div className="flex_container flex_col flex_width-two">
                      <div className="flex_container flex_row flex_wrap">
                        <div className="flex_frame_two">
                          <h4>Diversity</h4>
                          <img
                            src={cursorIcon}
                            alt="cursor icon"
                            className="flex_frame_two-icon"
                          />
                        </div>
                        <div className="flex_row-img">
                          <img
                            src={frameThree}
                            alt="feature three"
                            // height="100%"
                            width="100%"
                            className="flex_row-img3"
                          />
                        </div>
                      </div>
                      <div className="flex_row-div">
                        <img src={frameFour} alt="feature four" className="flex_row-div-img" />
                      </div>
                    </div>
                    <div className="flex_width-one flex_height">
                      <img src={frameFive} alt="feature five" />
                    </div>
                  </div>
                </div>
              ) : imgShow === "row" ? (
                <FounderDetails />
              ) : null}
            </div>
            {button && (
              <div className="bottom_button-container">
                <Link to={generalRoute.hireATalent}>
                  <Button
                    buttonColor={buttonColor}
                    buttonStyle={buttonStyle}
                    text={buttonText}
                    display={displayButton}
                    icon
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomSection;
