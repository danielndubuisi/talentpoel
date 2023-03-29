import "./CompanySection.css";
import img from "./asset/for-companies.svg";
import icon from "./asset/company-vector.svg";
import { Button } from "./Button";

const CompanySection = () => {
  const buttonClickHandler = (e) => {
    e.preventDefault();
    window.location = "mailto:hello@talentpoel.com";
  };
  return (
    <div className="company-section">
      <div className="img-wrapper">
        <img src={img} alt="company-img" />
      </div>
      <div className="text-wrapper">
        <div className="icon-wrapper">
          <img src={icon} alt="company-icon" />
        </div>
        <h2 className="company-headline">For companies</h2>
        <p className="home__hero-subtitle light">
          Start building your team and and hire the best non-technical talent in
          Africa.
        </p>
        <Button
          type="submit"
          buttonColor="white"
          buttonStyle="btn--outline"
          text="Get quote"
          onClick={buttonClickHandler}
          display={true}
        />
      </div>
    </div>
  );
};

export default CompanySection;
