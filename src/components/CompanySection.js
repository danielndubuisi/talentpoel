import "./CompanySection.css";
import vector from "./asset/icons/vector.svg";
import company from "./asset/icons/company.svg";
import founders from "./asset/icons/founders.svg";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { generalRoute } from "../Data/generalRoutes";

import image from "./asset/discover/company.webp"

const CompanySection = () => {
  return (
    <div className="company-section layout">
      <div className="img-wrapper">
        <div>
          <div className="img-wrapper-img-main">
            <img
              src={image}
              alt="company-img"
            />
            <div>
              <img src={vector} alt="" />
            </div>
          </div>
          <div className="img-wrapper-text">
            <h3>Talents available</h3>
            <p>
              Explore our extensive pool of talent, carefully categorized into
              five distinct areas: Marketing, Design, Support, Human Management,
              and Finance.
              <br /> <span className="find">Find our more below.</span> 
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
            Start building your team and hire the best non-technical talents
            in Africa.
          </p>
          <Link to={generalRoute.hireATalent}>
            <Button
              type="submit"
              buttonColor="white"
              buttonStyle="btn--outline"
              text="Get quote"
              icon
              display={true}
            />
          </Link>
        </div>
        <div className="text-wrapper fou">
          <div className="icon-wrapper">
            <img src={founders} alt="company-icon" />
          </div>
          <h2 className="company-headline">For founders</h2>
          <p className="home__hero-subtitle light founders-sub">
            Start building your team and hire the best non-technical talents
            in Africa.
          </p>
          <Link to={generalRoute.hireATalent}>
            <Button
              type="submit"
              buttonColor="white"
              buttonStyle="btn--outline"
              text="Get quote"
              icon
              display={true}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
