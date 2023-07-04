import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { generalRoute } from "../../Data/generalRoutes";

import "./cost.css";

import cost from "../asset/cost.jpg"
import costMobile from "../asset/cost-mobile.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Cost = () => {
  return (
    <div id="top" className="home__hero-section cost">
      <div className="layout">
        <div className="flex">
          <div className="hero-img-con">
            <LazyLoadImage
              className="hero-des-img"
              src={cost}
              alt=""
              effect="blur"
            />
            <LazyLoadImage
              className="hero-mobile-img"
              src={costMobile}
              alt=""
              effect="blur"
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
