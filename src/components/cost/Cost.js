import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { generalRoute } from "../../Data/generalRoutes";
import aboutImage from "../asset/hero/about.png"

import "./cost.css";

// import { config } from "../../app.config";

const Cost = () => {
  return (
    <div id="top" className="home__hero-section cost">
      <div className="layout">
        <div className="flex">
          {/* add image  */}
          <div className="cost-img-con">
            <img src={aboutImage} alt="About talentpoel" />
          </div>
          <div className="">
            <div className="home__hero-text-wrapper">
              <h2 className="sub-heading">Talentpoel is Cost-Effective</h2>

              <p className="home__hero-subtitle light">
                Talentpoel is a low-cost solution for businesses looking to hire
                the best non-technical talent in Africa. Our pricing model is
                clear, and there are no hidden fees. We provide a variety of
                talent to fit a variety of budgets, and we collaborate closely
                with our clients to provide tailored solutions that meet their
                needs.
              </p>
              <div className="button-container">
                <Link to={generalRoute.hireATalent} className="space-btn">
                  <Button
                    buttonColor="green"
                    text="Build your non-technical team"
                    icon
                    display={true}
                    loading={false}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cost;
