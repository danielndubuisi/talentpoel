import "./CompanySection.css";
import vector from "./asset/icons/vector.svg";
import company from "./asset/icons/company.svg";
import founders from "./asset/icons/founders.svg";
import { Button } from "./Button";

const CompanySection = () => {
  const buttonClickHandler = (e) => {
    e.preventDefault();
    window.location = "mailto:hello@talentpoel.com";
  };
  return (
    <div className="company-section layout">
      <div className="img-wrapper">
        <div>
          <div className="img-wrapper-img-main">
            <img
              src="https://res.cloudinary.com/dcp6fbxa9/image/upload/v1687453392/Frame_35_otemdd.png"
              alt="company-img"
            />
            <div>
              <img src={vector} alt="" />
            </div>
          </div>
          <div className="img-wrapper-text">
            <h3>Talents available</h3>
            <p>
              Still can't find the talent you're looking for “in the list above”
              click the button below to request talent.
            </p>
          </div>
        </div>
      </div>
      <div className="company-text-wrapper">
        <div className="text-wrapper com">
          <div className="icon-wrapper">
            <img src={company} alt="company-icon" />
          </div>
          <h2 className="company-headline">For companies</h2>
          <p className="home__hero-subtitle light founders-sub">
            Start building your team and and hire the best non-technical talent
            in Africa.
          </p>
          <Button
            type="submit"
            buttonColor="white"
            buttonStyle="btn--outline"
            text="Get quote →"
            onClick={buttonClickHandler}
            display={true}
          />
        </div>
        <div className="text-wrapper fou">
          <div className="icon-wrapper">
            <img src={founders} alt="company-icon" />
          </div>
          <h2 className="company-headline">For founders</h2>
          <p className="home__hero-subtitle light founders-sub">
            Start building your team and and hire the best non-technical talent
            in Africa.
          </p>
          <Button
            type="submit"
            buttonColor="white"
            buttonStyle="btn--outline"
            text="Get quote →"
            onClick={buttonClickHandler}
            display={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
