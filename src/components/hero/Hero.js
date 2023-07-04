import React from "react";
import { config } from "../../app.config";

import { generalRoute } from "../../Data/generalRoutes";
import { Button } from "../Button";
import { Link } from "react-router-dom";

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
          <div className="hero-img-con">
            <img
              className="hero-des-img"
              src={`${config.IMAGE_BASE_URL}/v1688476355/hero_z6bqyg.webp`}
              alt=""
            />
            <img
              className="hero-mobile-img"
              src={`${config.IMAGE_BASE_URL}/v1688476353/hero-mobile_z7r0w5.webp`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
