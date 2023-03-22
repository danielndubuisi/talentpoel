import "./HeroSection.css";
import { Button } from "./Button";

const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  lightText2,
  lightTextDesc,
  headline,
  subHeadline,
  description,
  formLabel,
  listDesc,
  subPhotos,
  img,
  imgSwitch,
  alt,
  imgStart,
  imgEmbed,
  floatImg,
  imgF,
}) => {
  const onSubmit = (e) => {
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
                <h1 className={lightText2 ? "none" : "heading dark"}>
                  {headline}
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
                <ul
                  key={Math.random()}
                  className={lightText ? "list" : "list dark"}
                >
                  <div>Nothing</div>
                </ul>
                <div className="home__sub-photo">
                  {subPhotos &&
                    subPhotos.map((pic) => (
                      <img key={pic.id} src={pic.src} alt={pic.alt} />
                    ))}
                </div>
                {formLabel && (
                  <div className="form-container">
                    <form onSubmit={onSubmit}>
                      <input
                        type="email"
                        placeholder="Enter email address"
                        required
                      />
                      <Button
                        type="submit"
                        buttonColor="green"
                        text="Get early access"
                      />
                    </form>
                  </div>
                )}
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                {imgSwitch ? (
                  <li listDesc={listDesc} />
                ) : (
                  <img src={img} alt={alt} className="home__hero-img" />
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
