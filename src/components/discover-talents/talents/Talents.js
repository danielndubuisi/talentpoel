import React from "react";
import DropDown from "../../dropdown/DropDown";

import "./talents-types.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import { generalRoute } from "../../../Data/generalRoutes";
import { Design, Finance, HumanManagement, Marketing, Support } from "../../../Data/talents";

const Talents = () => {
  return (
    <main className="talents-type-container layout">
      <div className="talents-type-text-con">
        <h2>Types of talents we offer;</h2>
        <p>
          Our talents are grouped into 5 categories we focus only on mid-level
          (3-5 years) and senior level (6+ years) talents:
        </p>
      </div>

      <div className="dropdown-grid">
        <DropDown title="Marketing" items={Marketing} className="market" />
        <DropDown title="Support" items={Support} />
        <DropDown title="Finance" items={Finance} />
        <DropDown title="Design" items={Design} />
        <DropDown title="Human Management" items={HumanManagement} />
      </div>

      <div className="talents-btn-con">
        <Link to={generalRoute.hireATalent}>
          <Button
            buttonColor="green"
            text="Hire a talent"
            icon
            display={true}
          />
        </Link>
      </div>
    </main>
  );
};

export default Talents;
