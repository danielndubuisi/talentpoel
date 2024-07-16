import React from "react";
import { config } from "../../app.config";

import { generalRoute } from "../../Data/generalRoutes";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import imageOne from "../asset/hero/Anne.png";
import imageTwo from "../asset/hero/Dubem.png";
import imageThree from "../asset/hero/stack_1.png"
import imageFour from "../asset/hero/stack_2.png"
import imageFive from "../asset/hero/stack_3.png"

import "./hero.css";

const Hero = () => {
  return (
    <div id="top" className="home__hero-section darkBg hero">
      <div className="layout">
        <div className="flex ">
          <div className="">
            <div className="home__hero-text-wrapper">
              <h1 className="heading">
                Scale your business with the best
                <span className="greenhead"> non-technical talent </span>
                in Africa
              </h1>
              <p className="home__hero-subtitle dark">
                Our matching process is designed to be adaptable and flexible,
                allowing us to create a customised process for each of our
                clients.
              </p>
              <div className="button-container">
                <Link to={generalRoute.discoverTalents} className="space-btn">
                  <Button
                    buttonColor="white"
                    text="Discover talents"
                    display={true}
                    loading={false}
                  />
                </Link>
                <Link to={generalRoute.becomeATalent}>
                  <Button
                    buttonColor="green"
                    text="Become a talent"
                    display={true}
                    loading={false}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* adding changes to the image container 7-16-2024 */}
          <div className="hero-img-con">
            <div className="stack_one">
              <img
                src={imageOne}
                alt="Anne profile"
                className="stack_one-img"
              />
            </div>
            <div className="stack_two">
              <img
                src={imageTwo}
                alt="Dubem profile"
                className="stack_two-img"
              />
            </div>
            <div className="stack_three">
              <p className="stack_three-text">
                Quality candidates for Quality companies
              </p>
            </div>
            <div className="stack-four">
              <img
                src={imageThree}
                alt="team member"
                className="stack-four-img"
              />
              <img
                src={imageFour}
                alt="team member"
                className="stack-four-img img-stack"
              />
              <img
                src={imageFive}
                alt="team member"
                className="stack-four-img img-stack"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
