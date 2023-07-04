import "./HeroSection.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import line from "./asset/line.svg";
import vector from "./asset/Vector.svg";
import star from "../components/asset/star.svg";
import { generalRoute } from "../Data/generalRoutes";
import { config } from "../app.config";

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
  listItem,
  button,
  img1,
  img2,
  imgDouble,
  alt,
  noDisplay,
  imgStart,
  imgEmbed,
  floatImg,
  imgFloat1,
  imgFloat2,
  imgFloat3,
  extraText,
  extraTextValue,
  extraTextValueTwo,
  buttonColorOne,
  buttonColorTwo,
  buttonTextOne,
  buttonTextTwo,
  displayButtonTwo,
  displayButtonOne,
}) => {
  return (
    <>
      <div
        id={id}
        className={
          lightBg === "grey"
            ? "home__hero-section greyBg"
            : lightBg === "dark"
            ? "home__hero-section darkBg"
            : "home__hero-section whiteBg"
        }
      >
        <div className="layout" id={id}>
          <div className={imgStart === "start" ? "row flex" : "flex"}>
            <div className="">
              <div className="home__hero-text-wrapper">
                <div className={topLine ? "top-line" : "none"}>{topLine}</div>
                <h1 className={heading ? "heading" : "none"}>
                  Scale your business with the best
                  <span className="greenhead"> non-technical talent </span>
                  in Africa
                </h1>
                {noDisplay ? null : (
                  <h2
                    className={lightText ? "sub-heading" : "sub-heading dark"}
                  >
                    {subHeadline}
                  </h2>
                )}
                {aboutText ? (
                  <>
                    <div className="about-section">
                      <h4
                        className={
                          aboutText ? "small-heading" : "small-heading dark"
                        }
                      >
                        <span>
                          <LazyLoadImage src={line} alt="hr-line" />
                        </span>{" "}
                        {smallHeadline}
                      </h4>
                      {about ? (
                        <>
                          <div>
                            <p className="home__hero-subtitle light">
                              {about1}
                            </p>
                            <p className="home__hero-subtitle light space-bottom">
                              {about2}
                            </p>
                          </div>
                          <div className="vect-img">
                            <img src={vector} alt="about-img" />
                          </div>
                          <h5>Our Vision</h5>
                          <p className="home__hero-subtitle light about-bottom">
                            {about3}
                          </p>
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
                {listItem ? (
                  <div className="reg-list">
                    <h3>The vetting process comprises two stages:</h3>
                    <ul>
                      <span>
                        <img src={star} alt="list-star" />
                        <li>Cultural add interview + Non-technical test</li>
                      </span>
                      <span>
                        <img src={star} alt="list-star" />
                        <li>Personality test + Interview with a Team Member</li>
                      </span>
                    </ul>
                  </div>
                ) : null}
                {button && (
                  <div className="button-container">
                    <Link to={generalRoute.hireATalent} className="space-btn">
                      <Button
                        buttonColor={buttonColorOne}
                        text={buttonTextOne}
                        display={displayButtonOne}
                        loading={false}
                      />
                    </Link>
                    <Link to={generalRoute.becomeATalent}>
                      <Button
                        buttonColor={buttonColorTwo}
                        text={buttonTextTwo}
                        display={displayButtonTwo}
                        loading={false}
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="">
              <div className="">
                {imgDouble ? (
                  <>
                    <div className="main_hero-img">
                      <LazyLoadImage
                        src={img1}
                        alt={alt}
                        className="home__hero-img main"
                      />
                      {extraText ? (
                        <span className="extra-text">{extraTextValue}</span>
                      ) : null}
                    </div>
                    <div className="sub_hero-img">
                      <LazyLoadImage
                        src={img2}
                        alt={alt}
                        className="home__hero-img sub"
                      />
                    </div>
                  </>
                ) : (
                  <div>
                    <img
                      className="hero-des-img"
                      src={`${config.IMAGE_BASE_URL}/v1687446394/Group_2_yjqpmg.png`}
                      alt=""
                    />
                    <img
                      className="hero-mobile-img"
                      src={`${config.IMAGE_BASE_URL}/v1687446486/Group_2_1_bq8pk0.png`}
                      alt=""
                    />
                  </div>
                )}
                {floatImg ? (
                  <div className="floats">
                    <LazyLoadImage
                      src={imgFloat1}
                      alt="floated-img"
                      className="home__hero-floated-img"
                    />
                    <LazyLoadImage
                      src={imgFloat2}
                      alt="floated-img"
                      className="home__hero-floated-img"
                    />
                    <LazyLoadImage
                      src={imgFloat3}
                      alt="floated-img"
                      className="home__hero-floated-img"
                    />
                  </div>
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
