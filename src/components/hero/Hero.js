import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { generalRoute } from "../../Data/generalRoutes";
import { Button } from "../Button";
import { Link } from "react-router-dom";

import hero from "../asset/hero.png"
import heroMobile from "../asset/hero-mobile.png"

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
            <LazyLoadImage
              className="hero-des-img"
              src={hero}
              alt="Image Alt"
              effect="blur"
            />
            <LazyLoadImage
              className="hero-mobile-img"
              src={heroMobile}
              alt=""
              effect="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
