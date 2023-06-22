import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { generalRoute } from "../../Data/generalRoutes";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./cost.css";

const Cost = () => {
  return (
    <div id="top" className="home__hero-section whiteBg cost">
      <div className="layout">
        <div className="flex">
          {/* <div className="">
            <div className="home__hero-img-wrapper">
              <div className="solo-container">
                <LazyLoadImage
                  src="images/imageThree.svg"
                  alt="christina-sits"
                  className="home__hero-img solo"
                />
                <span className="extra-text-middle">
                  <p>Matching African talent to a Global Audience</p>
                </span>
              </div>
            </div>
          </div> */}
          <div className="hero-img-con">
            <img
              className="hero-des-img"
              src="https://res.cloudinary.com/dcp6fbxa9/image/upload/v1687416323/Group_10_lv2lsm.png"
              alt=""
            />
            <img
              className="hero-mobile-img"
              src="https://res.cloudinary.com/dcp6fbxa9/image/upload/v1687416473/Group_10_1_x2rygg.png"
              alt=""
            />
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
